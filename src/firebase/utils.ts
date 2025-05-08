import { Timestamp } from 'firebase/firestore';

// Tipo para compatibilidad con Firestore
export type FirestoreCompatible = Record<string, unknown>;

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

// Configuración predeterminada del sistema de repetición espaciada
export const DEFAULT_SRS_CONFIG = {
  intervals: {
    1: 1,   // 1 día para nivel 1
    2: 3,   // 3 días para nivel 2
    3: 7,   // 7 días para nivel 3
    4: 14,  // 14 días para nivel 4
    5: 30,  // 30 días para nivel 5
  }
};

// Calcular la fecha de próxima revisión basada en el nivel de proficiencia
export const calculateNextReviewDate = (proficiencyLevel: number, wasCorrect: boolean): Date => {
  const now = new Date();
  let daysToAdd = 1; // valor predeterminado
  
  if (wasCorrect) {
    daysToAdd = DEFAULT_SRS_CONFIG.intervals[proficiencyLevel as keyof typeof DEFAULT_SRS_CONFIG.intervals] || 1;
  } else {
    // Si la respuesta fue incorrecta, revisión al día siguiente
    daysToAdd = 1;
  }
  
  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + daysToAdd);
  return nextDate;
};
