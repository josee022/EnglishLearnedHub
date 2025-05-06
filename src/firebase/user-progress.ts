import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';
import { convertTimestampsToDates } from './utils';

// Actualizar el progreso del usuario
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
    
    // Referencia al documento de progreso
    const docRef = doc(db, 'users', userId, 'stats', 'progress');
    
    // Verificar si el documento existe
    const docSnap = await getDoc(docRef);
    
    // Objeto para actualizar
    const updateData: Record<string, unknown> = {};
    
    // Copiar propiedades no relacionadas con fechas
    Object.entries(progress).forEach(([key, value]) => {
      if (key !== 'lastActivity') {
        updateData[key] = value;
      }
    });
    
    // Convertir fecha de actividad a Timestamp
    if (progress.lastActivity) {
      updateData.lastActivity = Timestamp.fromDate(progress.lastActivity);
    }
    
    if (docSnap.exists()) {
      // Actualizar documento existente
      await updateDoc(docRef, updateData);
    } else {
      // Crear nuevo documento
      await setDoc(docRef, updateData);
    }
  } catch (error) {
    console.error('Error al actualizar progreso del usuario:', error);
    throw error;
  }
};

// Obtener el progreso del usuario
export const getUserProgress = async (userId: string) => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    // Referencia al documento de progreso
    const docRef = doc(db, 'users', userId, 'stats', 'progress');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Convertir los campos Timestamp a Date
      const progressWithDates = convertTimestampsToDates(data, ['lastActivity']);
      
      return progressWithDates;
    }
    
    // Si no existe, devolver objeto con valores por defecto
    return {
      wordsLearned: 0,
      quizzesCompleted: 0,
      dailyStreak: 0,
      lastActivity: null,
      levelProgress: {}
    };
  } catch (error) {
    console.error('Error al obtener progreso del usuario:', error);
    throw error;
  }
};
