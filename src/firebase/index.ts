// Re-exportar desde archivos individuales para mantener la API pública
import { db } from './config';

// Exportar utilidades
export {
  dateToTimestamp,
  timestampToDate,
  convertDatesToTimestamps,
  convertTimestampsToDates,
  DEFAULT_SRS_CONFIG,
  calculateNextReviewDate
} from './utils';

// Exportar funciones de vocabulario
export {
  vocabularyCollection,
  addVocabularyItem,
  updateVocabularyItem,
  deleteVocabularyItem,
  getVocabularyItems,
  getVocabularyItem,
  updateVocabularyItemProgress,
  getVocabularyItemsDueForReview
} from './vocabulary';

// Exportar funciones de carpetas
export {
  foldersCollection,
  addFolder,
  getFolders,
  getFolderById
} from './folders';

// Exportar funciones de sesiones de estudio
export {
  studySessionsCollection,
  createStudySession,
  getStudySession,
  recordFlashcardResult,
  completeStudySession,
  getStudySessions
} from './study-sessions';

// Exportar funciones de progreso del usuario
export {
  updateUserProgress,
  getUserProgress
} from './user-progress';

// Exportar funciones de quizzes
export {
  quizzesCollection,
  addQuiz,
  getQuizzes,
  getQuizById
} from './quizzes';

// Exportar la configuración de Firebase
export { db };
