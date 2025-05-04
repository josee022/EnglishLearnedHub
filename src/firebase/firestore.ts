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
import { VocabularyItem, Folder, Quiz } from '../types';

// Conversión de Date a Timestamp para Firestore
export const dateToTimestamp = (date: Date | null | undefined): Timestamp | undefined => {
  if (!date) return undefined;
  return Timestamp.fromDate(date);
};

// Conversión de Timestamp a Date desde Firestore
export const timestampToDate = (timestamp: Timestamp | null | undefined): Date | undefined => {
  if (!timestamp) return undefined;
  return timestamp.toDate();
};

// Convertir un objeto con posibles campos Date a un objeto con campos Timestamp para Firestore
// Utilizamos any como escape para compatibilidad con Firestore
type FirestoreCompatible = Record<string, any>;

export const convertDatesToTimestamps = <T extends Record<string, unknown>>(
  obj: T, 
  dateFields: string[]
): FirestoreCompatible => {
  const result: FirestoreCompatible = { ...obj };
  
  dateFields.forEach(field => {
    if (obj[field] instanceof Date) {
      result[field] = Timestamp.fromDate(obj[field] as Date);
    }
  });
  
  return result;
};

// Convertir un objeto con posibles campos Timestamp a un objeto con campos Date
export const convertTimestampsToDates = <T extends Record<string, unknown>>(
  obj: T, 
  timestampFields: string[]
): FirestoreCompatible => {
  const result: FirestoreCompatible = { ...obj };
  
  timestampFields.forEach(field => {
    if (obj[field] instanceof Timestamp) {
      result[field] = (obj[field] as Timestamp).toDate();
    }
  });
  
  return result;
};

// Funciones para gestionar el vocabulario
export const vocabularyCollection = (userId: string) => {
  return collection(db, 'users', userId, 'vocabulary');
};

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
    
    await setDoc(newDocRef, itemForFirestore as any);
    return newDocRef.id;
  } catch (error) {
    console.error('Error al añadir vocabulario:', error);
    throw error;
  }
};

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
    
    await updateDoc(docRef, updateDataForFirestore as any);
  } catch (error) {
    console.error('Error al actualizar vocabulario:', error);
    throw error;
  }
};

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

// Funciones para gestionar las carpetas (temas)
export const foldersCollection = (userId: string) => {
  return collection(db, 'users', userId, 'folders');
};

export const addFolder = async (userId: string, folder: Omit<Folder, 'id'>) => {
  try {
    if (!userId || !folder) throw new Error('userId y folder son requeridos');
    
    const newDocRef = doc(foldersCollection(userId));
    
    // Convertir los campos Date a Timestamp para Firestore
    const folderForFirestore = convertDatesToTimestamps(folder, ['createdAt']);
    
    await setDoc(newDocRef, folderForFirestore);
    return newDocRef.id;
  } catch (error) {
    console.error('Error al añadir carpeta:', error);
    throw error;
  }
};

export const getFolders = async (userId: string): Promise<Folder[]> => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    const folderCollectionRef = foldersCollection(userId);
    
    const snapshot = await getDocs(folderCollectionRef);
    
    const folders: Folder[] = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      folders.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        userId: data.userId,
        createdAt: timestampToDate(data.createdAt) || new Date(),
      });
    });
    
    return folders;
  } catch (error) {
    console.error('Error al obtener carpetas:', error);
    throw error;
  }
};

export const getFolderById = async (userId: string, folderId: string): Promise<Folder | null> => {
  try {
    if (!userId || !folderId) throw new Error('userId y folderId son requeridos');
    
    const folderDocRef = doc(foldersCollection(userId), folderId);
    const folderDoc = await getDoc(folderDocRef);
    
    if (!folderDoc.exists()) {
      return null;
    }
    
    const data = folderDoc.data();
    return {
      id: folderDoc.id,
      name: data.name,
      description: data.description,
      userId: data.userId,
      createdAt: timestampToDate(data.createdAt) || new Date(),
    };
  } catch (error) {
    console.error('Error al obtener la carpeta:', error);
    throw error;
  }
};

// Funciones para manejar los quizzes
export const quizzesCollection = (userId: string) => {
  return collection(db, 'users', userId, 'quizzes');
};

export const addQuiz = async (userId: string, quiz: Omit<Quiz, 'id'>) => {
  try {
    if (!userId || !quiz) throw new Error('userId y quiz son requeridos');
    
    const newDocRef = doc(quizzesCollection(userId));
    
    // Convertir los campos Date a Timestamp para Firestore
    const quizForFirestore = convertDatesToTimestamps(quiz, ['createdAt']);
    
    await setDoc(newDocRef, quizForFirestore);
    return newDocRef.id;
  } catch (error) {
    console.error('Error al añadir quiz:', error);
    throw error;
  }
};

export const getQuizzes = async (userId: string) => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    const querySnapshot = await getDocs(quizzesCollection(userId));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Convertir los campos Timestamp a Date
      const quizWithDates = convertTimestampsToDates(data, ['createdAt']);
      
      return {
        id: doc.id,
        ...quizWithDates
      } as unknown as Quiz; // El as unknown es necesario para la conversión de tipos
    });
  } catch (error) {
    console.error('Error al obtener quizzes:', error);
    throw error;
  }
};

// Función para manejar el progreso del usuario
export const updateUserProgress = async (
  userId: string, 
  progress: { 
    wordsLearned?: number, 
    quizzesCompleted?: number, 
    dailyStreak?: number,
    lastActivity?: Date,
    levelProgress?: Record<string, number>
  }
) => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    const userDocRef = doc(db, 'users', userId);
    
    // Crear objeto que cumpla con el tipo requerido por Firestore
    const updateData: { [key: string]: number | Record<string, number> | Timestamp | undefined } = {};
    
    if (progress.wordsLearned !== undefined) {
      updateData.wordsLearned = progress.wordsLearned;
    }
    
    if (progress.quizzesCompleted !== undefined) {
      updateData.quizzesCompleted = progress.quizzesCompleted;
    }
    
    if (progress.dailyStreak !== undefined) {
      updateData.dailyStreak = progress.dailyStreak;
    }
    
    if (progress.levelProgress) {
      updateData.levelProgress = progress.levelProgress;
    }
    
    // Convertir campos de fecha
    if (progress.lastActivity) {
      updateData.lastActivity = Timestamp.fromDate(progress.lastActivity);
    }
    
    await updateDoc(userDocRef, updateData);
  } catch (error) {
    console.error('Error al actualizar progreso del usuario:', error);
    throw error;
  }
};
