import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  getDoc, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';
import { Folder } from '../types';
import { convertTimestampsToDates } from './utils';

// Colección de carpetas
export const foldersCollection = (userId: string) => {
  return collection(db, 'users', userId, 'folders');
};

// Añadir una nueva carpeta
export const addFolder = async (userId: string, folder: Omit<Folder, 'id'>) => {
  try {
    if (!userId || !folder) throw new Error('userId y folder son requeridos');
    
    const newDocRef = doc(foldersCollection(userId));
    
    // Crear objeto compatible con Firestore
    const folderForFirestore: Record<string, unknown> = {};
    
    // Copiar propiedades no relacionadas con fechas
    Object.entries(folder).forEach(([key, value]) => {
      if (key !== 'createdAt') {
        folderForFirestore[key] = value;
      }
    });
    
    // Convertir fecha de creación a Timestamp
    if (folder.createdAt) {
      folderForFirestore.createdAt = Timestamp.fromDate(folder.createdAt);
    } else {
      folderForFirestore.createdAt = Timestamp.fromDate(new Date());
    }
    
    await setDoc(newDocRef, folderForFirestore as Record<string, unknown>);
    return newDocRef.id;
  } catch (error) {
    console.error('Error al añadir carpeta:', error);
    throw error;
  }
};

// Obtener todas las carpetas
export const getFolders = async (userId: string) => {
  try {
    if (!userId) throw new Error('userId es requerido');
    
    const querySnapshot = await getDocs(foldersCollection(userId));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      // Convertir los campos Timestamp a Date
      const folderWithDates = convertTimestampsToDates(data, ['createdAt']);
      
      return {
        id: doc.id,
        ...folderWithDates
      } as unknown as Folder; // El as unknown es necesario para la conversión de tipos
    });
  } catch (error) {
    console.error('Error al obtener carpetas:', error);
    throw error;
  }
};

// Obtener una carpeta específica
export const getFolderById = async (userId: string, folderId: string) => {
  try {
    if (!userId || !folderId) throw new Error('userId y folderId son requeridos');
    
    const docRef = doc(foldersCollection(userId), folderId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Convertir los campos Timestamp a Date
      const folderWithDates = convertTimestampsToDates(data, ['createdAt']);
      
      return {
        id: docSnap.id,
        ...folderWithDates
      } as unknown as Folder; // El as unknown es necesario para la conversión de tipos
    }
    
    return null;
  } catch (error) {
    console.error('Error al obtener carpeta:', error);
    throw error;
  }
};
