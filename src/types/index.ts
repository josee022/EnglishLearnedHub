// Tipos para el usuario
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  englishLevel?: string; // Principiante, Intermedio, Avanzado
  learningGoals?: string[];
  createdAt: Date | null;
}

// Tipos para el vocabulario
export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  examples: string[];
  notes?: string;
  tags: string[];
  folderId?: string;
  createdAt: Date;
  lastReviewed?: Date;
  proficiencyLevel: number; // 0-5 (0: No aprendido, 5: Dominado)
  reviewCount: number; // Número de veces que se ha revisado la palabra
  nextReviewDate?: Date; // Fecha calculada para la próxima revisión según SRS
}

// Tipos para carpetas/temas
export interface Folder {
  id: string;
  name: string;
  description?: string;
  userId: string;
  createdAt: Date;
}

// Tipos para quizzes/flashcards
export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  folderId?: string;
  userId: string;
  createdAt: Date;
}

// Tipos para las sesiones de estudio con flashcards
export interface StudySession {
  id: string;
  userId: string;
  createdAt: Date;
  endedAt?: Date;
  folderId?: string; // Opcional, si la sesión es específica para una carpeta
  mode: 'word-to-translation' | 'translation-to-word' | 'mixed';
  itemsToReview: string[]; // IDs de los elementos a revisar
  itemsReviewed: StudySessionResult[];
  currentIndex: number; // Posición actual en la sesión
  completed: boolean;
}

export interface StudySessionResult {
  itemId: string;
  wasCorrect: boolean;
  timeTaken: number; // en milisegundos
  answeredAt: Date;
}

// Tipos para algoritmo de repetición espaciada
export interface SRSConfig {
  // Intervalos en días para cada nivel de proficiencia (1-5)
  intervals: {
    [key: number]: number;
  };
  // Factores de penalización/bonificación
  correctFactor: number; // Multiplicador si la respuesta es correcta
  incorrectFactor: number; // Multiplicador si la respuesta es incorrecta
}

export interface QuizQuestion {
  id: string;
  type: 'multiple' | 'complete' | 'order';
  word: string;
  options?: string[];
  correctAnswer: string;
}

// Tipos para estadísticas y progreso
export interface Progress {
  userId: string;
  wordsLearned: number;
  quizzesCompleted: number;
  dailyStreak: number;
  lastActivity: Date;
  levelProgress: {
    [key: string]: number; // Por cada tema o categoría
  };
}
