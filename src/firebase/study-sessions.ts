import { 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  getDoc, 
  getDocs, 
  Timestamp,
  query,
  orderBy,
  limitToLast
} from 'firebase/firestore';
import { db } from './config';
import { StudySession, VocabularyItem } from '../types';
import { convertTimestampsToDates } from './utils';
import { getVocabularyItems, getVocabularyItemsDueForReview, updateVocabularyItemProgress } from './vocabulary';

// Colección para las sesiones de estudio
export const studySessionsCollection = (userId: string) => {
  return collection(db, 'users', userId, 'studySessions');
};

// Crear una nueva sesión de estudio
export const createStudySession = async (
  userId: string,
  mode: 'word-to-translation' | 'translation-to-word' | 'mixed',
  folderId?: string,
  itemLimit?: number
): Promise<StudySession> => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    // Obtener elementos de vocabulario para esta sesión
    let vocabularyItems: VocabularyItem[] = [];
    
    if (folderId) {
      // Si se especifica una carpeta, obtener elementos de esa carpeta
      const allItems = await getVocabularyItems(userId);
      vocabularyItems = allItems.filter(item => item.folderId === folderId);
    } else {
      // Si no se especifica carpeta, obtener elementos para revisar hoy
      vocabularyItems = await getVocabularyItemsDueForReview(userId);
    }
    
    // Si no hay elementos suficientes, obtener elementos aleatorios
    if (vocabularyItems.length === 0) {
      const allItems = await getVocabularyItems(userId);
      
      // Filtrar por carpeta si se especifica
      if (folderId) {
        vocabularyItems = allItems.filter(item => item.folderId === folderId);
      } else {
        vocabularyItems = allItems;
      }
    }
    
    // Limitar el número de elementos si se especifica
    if (itemLimit && itemLimit > 0 && vocabularyItems.length > itemLimit) {
      // Ordenar: primero los no revisados, luego por fecha de revisión
      vocabularyItems.sort((a, b) => {
        // Priorizar elementos nunca revisados
        if (!a.lastReviewed && b.lastReviewed) return -1;
        if (a.lastReviewed && !b.lastReviewed) return 1;
        
        // Si ambos tienen fecha de revisión, ordenar por fecha más antigua
        if (a.lastReviewed && b.lastReviewed) {
          return a.lastReviewed.getTime() - b.lastReviewed.getTime();
        }
        
        return 0;
      });
      
      // Limitar al número especificado
      vocabularyItems = vocabularyItems.slice(0, itemLimit);
    }
    
    // Crear el objeto de sesión
    const now = new Date();
    // Convertir los items a formato de StudySessionResult
    const itemsToReview = vocabularyItems.map(item => item.id);
    
    const newSession: Omit<StudySession, 'id'> = {
      userId,
      createdAt: now,
      mode,
      folderId: folderId,
      itemsToReview: itemsToReview,
      itemsReviewed: [],
      currentIndex: 0,
      completed: false
    };
    
    // Guardar en Firestore
    const newDocRef = doc(studySessionsCollection(userId));
    
    // Convertir fechas a Timestamp
    const sessionForFirestore = {
      ...newSession,
      createdAt: Timestamp.fromDate(now)
    };
    
    await setDoc(newDocRef, sessionForFirestore);
    
    // Devolver la sesión con el ID
    return {
      id: newDocRef.id,
      ...newSession
    };
  } catch (error) {
    console.error('Error al crear sesión de estudio:', error);
    throw error;
  }
};

// Obtener una sesión de estudio por ID
export const getStudySession = async (userId: string, sessionId: string): Promise<StudySession | null> => {
  try {
    if (!userId || !sessionId) throw new Error('userId y sessionId son requeridos');
    
    const docRef = doc(studySessionsCollection(userId), sessionId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Convertir los campos Timestamp a Date
      const sessionWithDates = convertTimestampsToDates(data, ['createdAt', 'completedAt']);
      
      return {
        id: docSnap.id,
        ...sessionWithDates
      } as unknown as StudySession;
    }
    
    return null;
  } catch (error) {
    console.error('Error al obtener sesión de estudio:', error);
    throw error;
  }
};

// Registrar el resultado de una tarjeta en una sesión de estudio
export const recordFlashcardResult = async (
  userId: string,
  sessionId: string,
  itemId: string,
  wasCorrect: boolean,
  timeTaken: number
): Promise<void> => {
  try {
    if (!userId || !sessionId || !itemId) {
      throw new Error('userId, sessionId e itemId son requeridos');
    }
    
    // Obtener la sesión actual
    const session = await getStudySession(userId, sessionId);
    
    if (!session) {
      throw new Error(`Sesión no encontrada: ${sessionId}`);
    }
    
    // Actualizar la sesión
    const docRef = doc(studySessionsCollection(userId), sessionId);
    
    // Crear un nuevo resultado
    const newResult = {
      itemId,
      wasCorrect,
      timeTaken,
      answeredAt: new Date()
    };
    
    // Actualizar la sesión en Firestore
    await updateDoc(docRef, {
      itemsReviewed: [...(session.itemsReviewed || []), newResult],
      currentIndex: (session.currentIndex || 0) + 1
    });
    
    // Actualizar el progreso del elemento de vocabulario
    await updateVocabularyItemProgress(userId, itemId, wasCorrect);
  } catch (error) {
    console.error('Error al registrar resultado de flashcard:', error);
    throw error;
  }
};

// Finalizar una sesión de estudio
export const completeStudySession = async (userId: string, sessionId: string): Promise<void> => {
  try {
    if (!userId || !sessionId) {
      throw new Error('userId y sessionId son requeridos');
    }
    
    // Obtener la sesión
    const session = await getStudySession(userId, sessionId);
    
    if (!session) {
      throw new Error(`Sesión no encontrada: ${sessionId}`);
    }
    
    // Actualizar la fecha de finalización
    const endedAt = new Date();
    const docRef = doc(studySessionsCollection(userId), sessionId);
    
    await updateDoc(docRef, {
      endedAt: Timestamp.fromDate(endedAt),
      completed: true
    });
    
    // Actualizar estadísticas del usuario
    // Esto se manejará desde otro módulo
  } catch (error) {
    console.error('Error al completar sesión de estudio:', error);
    throw error;
  }
};

// Obtener las sesiones de estudio de un usuario
export const getStudySessions = async (userId: string, limit?: number): Promise<StudySession[]> => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    // Crear query con ordenamiento por fecha de creación (descendente)
    let q = query(
      studySessionsCollection(userId),
      orderBy('createdAt', 'desc')
    );
    
    // Aplicar límite si se especifica
    if (limit && limit > 0) {
      q = query(q, limitToLast(limit));
    }
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Convertir los campos Timestamp a Date
      const sessionWithDates = convertTimestampsToDates(data, ['createdAt', 'completedAt']);
      
      return {
        id: doc.id,
        ...sessionWithDates
      } as unknown as StudySession;
    });
  } catch (error) {
    console.error('Error al obtener sesiones de estudio:', error);
    throw error;
  }
};
