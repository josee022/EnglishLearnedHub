import { 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  Timestamp,
  query,
  orderBy,
  limitToLast,
} from 'firebase/firestore';
import { db } from './config';
import { VocabularyItem, Folder, Quiz, StudySession, StudySessionResult, SRSConfig } from '../types';

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
// Utilizamos unknown como tipo para compatibilidad con Firestore
type FirestoreCompatible = Record<string, unknown>;

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

// Configuración predeterminada del sistema de repetición espaciada
export const DEFAULT_SRS_CONFIG: SRSConfig = {
  intervals: {
    1: 1,   // 1 día para nivel 1
    2: 3,   // 3 días para nivel 2
    3: 7,   // 1 semana para nivel 3
    4: 14,  // 2 semanas para nivel 4
    5: 30   // 1 mes para nivel 5
  },
  correctFactor: 1.5,    // Si es correcto, aumenta el intervalo
  incorrectFactor: 0.5   // Si es incorrecto, disminuye el intervalo
};

// Colección para las sesiones de estudio
export const studySessionsCollection = (userId: string) => {
  return collection(db, 'users', userId, 'studySessions');
};

/**
 * Crear una nueva sesión de estudio
 * @param userId ID del usuario
 * @param mode Modo de estudio (word-to-translation, translation-to-word, mixed)
 * @param folderId ID de la carpeta (opcional)
 * @param limit Número máximo de elementos a estudiar (opcional)
 */
export const createStudySession = async (
  userId: string,
  mode: 'word-to-translation' | 'translation-to-word' | 'mixed',
  folderId?: string,
  itemLimit?: number
): Promise<StudySession> => {
  try {
    // Obtener elementos de vocabulario para la sesión
    const vocabularyItems = await getVocabularyItems(userId);
    
    // Filtrar por carpeta si se especifica
    let filteredItems = vocabularyItems;
    if (folderId) {
      filteredItems = vocabularyItems.filter(item => item.folderId === folderId);
    }
    
    // Ordenar según el algoritmo SRS (priorizar elementos con menor nivel de proficiencia
    // y aquellos que están programados para revisión)
    const now = new Date();
    const sortedItems = filteredItems
      .sort((a, b) => {
        // Priorizar por nivel de proficiencia
        const levelDiff = a.proficiencyLevel - b.proficiencyLevel;
        if (levelDiff !== 0) return levelDiff;
        
        // Si tienen el mismo nivel, priorizar por fecha de próxima revisión
        const aDate = a.nextReviewDate || now;
        const bDate = b.nextReviewDate || now;
        return aDate.getTime() - bDate.getTime();
      });
    
    // Limitar la cantidad de elementos si se especifica
    const selectedItems = itemLimit && itemLimit > 0
      ? sortedItems.slice(0, itemLimit)
      : sortedItems;
    
    // Crear la sesión de estudio
    const sessionId = doc(studySessionsCollection(userId)).id;
    const session: StudySession = {
      id: sessionId,
      userId,
      createdAt: new Date(),
      mode,
      folderId,
      itemsToReview: selectedItems.map(item => item.id),
      itemsReviewed: [],
      currentIndex: 0,
      completed: false
    };
    
    // Guardar en Firestore
    const sessionDoc = doc(studySessionsCollection(userId), sessionId);
    await setDoc(sessionDoc, convertDatesToTimestamps(session as Record<string, unknown>, ['createdAt']));
    
    return session;
  } catch (error) {
    console.error('Error creating study session:', error);
    throw error;
  }
};

/**
 * Obtener una sesión de estudio por ID
 * @param userId ID del usuario
 * @param sessionId ID de la sesión
 */
export const getStudySession = async (userId: string, sessionId: string): Promise<StudySession | null> => {
  try {
    const sessionDoc = doc(studySessionsCollection(userId), sessionId);
    const sessionSnapshot = await getDoc(sessionDoc);
    
    if (!sessionSnapshot.exists()) return null;
    
    const sessionData = sessionSnapshot.data();
    return {
      ...(sessionData as StudySession),
      createdAt: timestampToDate(sessionData.createdAt as Timestamp) || new Date(),
      endedAt: timestampToDate(sessionData.endedAt as Timestamp)
    };
  } catch (error) {
    console.error('Error getting study session:', error);
    throw error;
  }
};

/**
 * Registrar el resultado de una tarjeta en una sesión de estudio
 * @param userId ID del usuario
 * @param sessionId ID de la sesión
 * @param itemId ID del elemento de vocabulario
 * @param wasCorrect Si la respuesta fue correcta
 * @param timeTaken Tiempo que tomó responder (en ms)
 */
export const recordFlashcardResult = async (
  userId: string,
  sessionId: string,
  itemId: string,
  wasCorrect: boolean,
  timeTaken: number
): Promise<void> => {
  try {
    // Obtener la sesión actual
    const session = await getStudySession(userId, sessionId);
    if (!session) throw new Error('Session not found');
    
    // Registrar el resultado
    const result: StudySessionResult = {
      itemId,
      wasCorrect,
      timeTaken,
      answeredAt: new Date()
    };
    
    // Actualizar la sesión
    const sessionDoc = doc(studySessionsCollection(userId), sessionId);
    await updateDoc(sessionDoc, {
      itemsReviewed: [...session.itemsReviewed, convertDatesToTimestamps(result as Record<string, unknown>, ['answeredAt'])],
      currentIndex: session.currentIndex + 1,
      completed: session.currentIndex + 1 >= session.itemsToReview.length
    });
    
    // Actualizar el elemento de vocabulario
    await updateVocabularyItemProgress(userId, itemId, wasCorrect);
  } catch (error) {
    console.error('Error recording flashcard result:', error);
    throw error;
  }
};

/**
 * Finalizar una sesión de estudio
 * @param userId ID del usuario
 * @param sessionId ID de la sesión
 */
export const completeStudySession = async (userId: string, sessionId: string): Promise<void> => {
  try {
    const sessionDoc = doc(studySessionsCollection(userId), sessionId);
    await updateDoc(sessionDoc, {
      completed: true,
      endedAt: Timestamp.fromDate(new Date())
    });
    
    // Actualizar estadísticas del usuario
    const session = await getStudySession(userId, sessionId);
    if (session) {
      await updateUserProgress(userId, {
        lastActivity: new Date()
      });
    }
  } catch (error) {
    console.error('Error completing study session:', error);
    throw error;
  }
};

/**
 * Obtener las sesiones de estudio de un usuario
 * @param userId ID del usuario
 * @param limit Número máximo de sesiones a obtener
 */
export const getStudySessions = async (userId: string, limit?: number): Promise<StudySession[]> => {
  try {
    let sessionsQuery = query(
      studySessionsCollection(userId),
      orderBy('createdAt', 'desc')
    );
    
    if (limit) {
      sessionsQuery = query(sessionsQuery, limitToLast(limit));
    }
    
    const sessionsSnapshot = await getDocs(sessionsQuery);
    const sessions: StudySession[] = [];
    
    sessionsSnapshot.forEach(doc => {
      const data = doc.data();
      sessions.push({
        ...data,
        id: doc.id,
        createdAt: timestampToDate(data.createdAt as Timestamp) || new Date(),
        endedAt: timestampToDate(data.endedAt as Timestamp)
      } as StudySession);
    });
    
    return sessions;
  } catch (error) {
    console.error('Error getting study sessions:', error);
    throw error;
  }
};

/**
 * Actualizar el progreso y nivel de proficiencia de un elemento de vocabulario
 * @param userId ID del usuario
 * @param itemId ID del elemento de vocabulario
 * @param wasCorrect Si la respuesta fue correcta
 */
export const updateVocabularyItemProgress = async (
  userId: string,
  itemId: string,
  wasCorrect: boolean
): Promise<void> => {
  try {
    // Obtener el elemento actual
    const item = await getVocabularyItem(userId, itemId);
    if (!item) throw new Error('Vocabulary item not found');
    
    // Calcular el nuevo nivel de proficiencia
    let newProficiencyLevel = item.proficiencyLevel;
    if (wasCorrect && newProficiencyLevel < 5) {
      newProficiencyLevel += 1;
    } else if (!wasCorrect && newProficiencyLevel > 1) {
      newProficiencyLevel -= 1;
    }
    
    // Calcular la próxima fecha de revisión
    const nextReviewDate = calculateNextReviewDate(newProficiencyLevel, wasCorrect);
    
    // Actualizar el elemento
    const itemDoc = doc(vocabularyCollection(userId), itemId);
    await updateDoc(itemDoc, {
      proficiencyLevel: newProficiencyLevel,
      lastReviewed: Timestamp.fromDate(new Date()),
      nextReviewDate: Timestamp.fromDate(nextReviewDate),
      reviewCount: (item.reviewCount || 0) + 1
    });
  } catch (error) {
    console.error('Error updating vocabulary item progress:', error);
    throw error;
  }
};

/**
 * Calcular la fecha de próxima revisión basada en el nivel de proficiencia
 * @param proficiencyLevel Nivel de proficiencia (1-5)
 * @param wasCorrect Si la última respuesta fue correcta
 */
export const calculateNextReviewDate = (proficiencyLevel: number, wasCorrect: boolean): Date => {
  const now = new Date();
  let intervalDays = DEFAULT_SRS_CONFIG.intervals[proficiencyLevel] || 1;
  
  // Aplicar factor según el resultado
  intervalDays = wasCorrect
    ? intervalDays * DEFAULT_SRS_CONFIG.correctFactor
    : intervalDays * DEFAULT_SRS_CONFIG.incorrectFactor;
  
  // Agregar el intervalo a la fecha actual
  now.setDate(now.getDate() + Math.round(intervalDays));
  return now;
};

/**
 * Obtener elementos de vocabulario para revisar hoy
 * @param userId ID del usuario
 * @param folderId ID de la carpeta (opcional)
 */
export const getVocabularyItemsDueForReview = async (
  userId: string,
  folderId?: string
): Promise<VocabularyItem[]> => {
  try {
    const today = new Date();
    const items = await getVocabularyItems(userId);
    
    return items.filter(item => {
      // Filtrar por carpeta si se especifica
      const inFolder = folderId ? item.folderId === folderId : true;
      
      // Comprobar si está pendiente de revisión
      const isDue = !item.nextReviewDate || item.nextReviewDate <= today;
      
      return inFolder && isDue;
    });
  } catch (error) {
    console.error('Error getting vocabulary items due for review:', error);
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
