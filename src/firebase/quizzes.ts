import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  getDoc, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';
import { Quiz } from '../types';
import { convertTimestampsToDates } from './utils';

// Colección de quizzes
export const quizzesCollection = (userId: string) => {
  return collection(db, 'users', userId, 'quizzes');
};

// Añadir un nuevo quiz
export const addQuiz = async (userId: string, quiz: Omit<Quiz, 'id'>) => {
  try {
    if (!userId || !quiz) throw new Error('userId y quiz son requeridos');
    
    const newDocRef = doc(quizzesCollection(userId));
    
    // Crear objeto compatible con Firestore
    const quizForFirestore: Record<string, unknown> = {};
    
    // Copiar propiedades no relacionadas con fechas
    Object.entries(quiz).forEach(([key, value]) => {
      if (key !== 'createdAt') {
        quizForFirestore[key] = value;
      }
    });
    
    // Convertir fecha de creación a Timestamp
    if (quiz.createdAt) {
      quizForFirestore.createdAt = Timestamp.fromDate(quiz.createdAt);
    } else {
      quizForFirestore.createdAt = Timestamp.fromDate(new Date());
    }
    
    await setDoc(newDocRef, quizForFirestore as Record<string, unknown>);
    return newDocRef.id;
  } catch (error) {
    console.error('Error al añadir quiz:', error);
    throw error;
  }
};

// Obtener todos los quizzes
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
      } as unknown as Quiz;
    });
  } catch (error) {
    console.error('Error al obtener quizzes:', error);
    throw error;
  }
};

// Obtener un quiz específico
export const getQuizById = async (userId: string, quizId: string) => {
  try {
    if (!userId || !quizId) throw new Error('userId y quizId son requeridos');
    
    const docRef = doc(quizzesCollection(userId), quizId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Convertir los campos Timestamp a Date
      const quizWithDates = convertTimestampsToDates(data, ['createdAt']);
      
      return {
        id: docSnap.id,
        ...quizWithDates
      } as unknown as Quiz;
    }
    
    return null;
  } catch (error) {
    console.error('Error al obtener quiz:', error);
    throw error;
  }
};
