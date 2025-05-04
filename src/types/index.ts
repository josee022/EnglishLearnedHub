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
