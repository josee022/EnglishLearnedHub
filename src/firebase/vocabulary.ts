import { 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  Timestamp
} from 'firebase/firestore';
import { db } from './config';
import { VocabularyItem } from '../types';
import { convertTimestampsToDates, calculateNextReviewDate } from './utils';

// Colección de vocabulario
export const vocabularyCollection = (userId: string) => {
  return collection(db, 'users', userId, 'vocabulary');
};

// Añadir un nuevo elemento de vocabulario
export const addVocabularyItem = async (userId: string, item: Omit<VocabularyItem, 'id'>) => {
  try {
    if (!userId || !item) throw new Error('userId y item son requeridos');
    
    const newDocRef = doc(vocabularyCollection(userId));
    
    // Crear objeto compatible con Firestore
    const itemForFirestore: Record<string, unknown> = {};
    
    // Copiar propiedades no relacionadas con fechas
    Object.entries(item).forEach(([key, value]) => {
      if (key !== 'createdAt' && key !== 'lastReviewed') {
        itemForFirestore[key] = value;
      }
    });
    
    // Convertir fechas a Timestamp
    if (item.createdAt) {
      itemForFirestore.createdAt = Timestamp.fromDate(item.createdAt);
    }
    
    if (item.lastReviewed) {
      itemForFirestore.lastReviewed = Timestamp.fromDate(item.lastReviewed);
    }
    
    await setDoc(newDocRef, itemForFirestore as Record<string, unknown>);
    return newDocRef.id;
  } catch (error) {
    console.error('Error al añadir vocabulario:', error);
    throw error;
  }
};

// Actualizar un elemento de vocabulario existente
export const updateVocabularyItem = async (userId: string, itemId: string, data: Partial<VocabularyItem>) => {
  try {
    if (!userId || !itemId) throw new Error('userId y itemId son requeridos');
    
    const docRef = doc(vocabularyCollection(userId), itemId);
    
    // Crear objeto compatible con Firestore
    const updateDataForFirestore: Record<string, unknown> = {};
    
    // Copiar propiedades no relacionadas con fechas
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'createdAt' && key !== 'lastReviewed') {
        updateDataForFirestore[key] = value;
      }
    });
    
    // Convertir fechas a Timestamp
    if (data.createdAt) {
      updateDataForFirestore.createdAt = Timestamp.fromDate(data.createdAt);
    }
    
    if (data.lastReviewed) {
      updateDataForFirestore.lastReviewed = Timestamp.fromDate(data.lastReviewed);
    }
    
    await updateDoc(docRef, updateDataForFirestore as Record<string, unknown>);
  } catch (error) {
    console.error('Error al actualizar vocabulario:', error);
    throw error;
  }
};

// Eliminar un elemento de vocabulario
export const deleteVocabularyItem = async (userId: string, itemId: string) => {
  try {
    if (!userId || !itemId) throw new Error('userId e itemId son requeridos');
    
    const docRef = doc(vocabularyCollection(userId), itemId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error al eliminar vocabulario:', error);
    throw error;
  }
};

// Obtener todos los elementos de vocabulario
export const getVocabularyItems = async (userId: string) => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    const querySnapshot = await getDocs(vocabularyCollection(userId));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Convertir los campos Timestamp a Date
      const itemWithDates = convertTimestampsToDates(data, ['createdAt', 'lastReviewed']);
      
      return {
        id: doc.id,
        ...itemWithDates
      } as unknown as VocabularyItem; // El as unknown es necesario para la conversión de tipos
    });
  } catch (error) {
    console.error('Error al obtener vocabulario:', error);
    throw error;
  }
};

// Obtener un elemento de vocabulario específico
export const getVocabularyItem = async (userId: string, itemId: string) => {
  try {
    if (!userId || !itemId) throw new Error('userId e itemId son requeridos');
    
    const docRef = doc(vocabularyCollection(userId), itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Convertir los campos Timestamp a Date
      const itemWithDates = convertTimestampsToDates(data, ['createdAt', 'lastReviewed']);
      
      return {
        id: docSnap.id,
        ...itemWithDates
      } as unknown as VocabularyItem; // El as unknown es necesario para la conversión de tipos
    }
    
    return null;
  } catch (error) {
    console.error('Error al obtener elemento de vocabulario:', error);
    throw error;
  }
};

// Actualizar el progreso y nivel de proficiencia de un elemento de vocabulario
export const updateVocabularyItemProgress = async (
  userId: string,
  itemId: string,
  wasCorrect: boolean
): Promise<void> => {
  try {
    // Obtener el elemento actual
    const item = await getVocabularyItem(userId, itemId);
    
    if (!item) {
      throw new Error(`Elemento de vocabulario no encontrado: ${itemId}`);
    }
    
    // Calcular el nuevo nivel de proficiencia
    let newProficiencyLevel = item.proficiencyLevel || 1;
    
    if (wasCorrect) {
      // Si la respuesta fue correcta, aumentar nivel hasta máximo 5
      newProficiencyLevel = Math.min(5, newProficiencyLevel + 1);
    } else {
      // Si la respuesta fue incorrecta, reducir nivel hasta mínimo 1
      newProficiencyLevel = Math.max(1, newProficiencyLevel - 1);
    }
    
    // Calcular la próxima fecha de revisión
    const nextReviewDate = calculateNextReviewDate(newProficiencyLevel, wasCorrect);
    
    // Actualizar el elemento
    await updateVocabularyItem(userId, itemId, {
      proficiencyLevel: newProficiencyLevel,
      nextReviewDate,
      lastReviewed: new Date(),
    });
  } catch (error) {
    console.error('Error al actualizar progreso del elemento:', error);
    throw error;
  }
};

// Obtener elementos de vocabulario para revisar hoy
export const getVocabularyItemsDueForReview = async (
  userId: string,
  folderId?: string
): Promise<VocabularyItem[]> => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    const now = new Date();
    const items = await getVocabularyItems(userId);
    
    return items.filter(item => {
      // Filtrar por carpeta si se especifica
      if (folderId && item.folderId !== folderId) {
        return false;
      }
      
      // Incluir elementos que nunca se han revisado
      if (!item.nextReviewDate) {
        return true;
      }
      
      // Incluir elementos cuya fecha de revisión es hoy o anterior
      return item.nextReviewDate <= now;
    });
  } catch (error) {
    console.error('Error al obtener elementos para revisar:', error);
    throw error;
  }
};
