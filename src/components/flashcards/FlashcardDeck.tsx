import { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { 
  StudySession, 
  VocabularyItem 
} from '../../types';
import { 
  getVocabularyItem, 
  recordFlashcardResult, 
  completeStudySession,
  getStudySession
} from '../../firebase/firestore';
import Flashcard from './Flashcard';
import { ArrowLeftIcon, PauseIcon } from '@heroicons/react/24/outline';

interface FlashcardDeckProps {
  session: StudySession;
  onCompleteSession: (results: {
    totalItems: number;
    correctItems: number;
    averageTime: number;
  }) => void;
}

export default function FlashcardDeck({ session, onCompleteSession }: FlashcardDeckProps) {
  const { user } = useAuthContext();
  const [currentIndex, setCurrentIndex] = useState(session.currentIndex || 0);
  const [flashcards, setFlashcards] = useState<VocabularyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [results, setResults] = useState<{
    correct: number;
    incorrect: number;
    totalTime: number;
  }>({
    correct: 0,
    incorrect: 0,
    totalTime: 0,
  });

  // Cargar los elementos de vocabulario para las flashcards
  useEffect(() => {
    const loadFlashcards = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        
        const items: VocabularyItem[] = [];
        for (const itemId of session.itemsToReview) {
          const item = await getVocabularyItem(user.uid, itemId);
          if (item) {
            items.push(item);
          }
        }
        
        setFlashcards(items);
        setError(null);
      } catch (err) {
        console.error('Error loading flashcards:', err);
        setError('Error al cargar las tarjetas. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };
    
    loadFlashcards();
  }, [user, session]);

  // Manejar la respuesta de una flashcard
  const handleAnswer = async (wasCorrect: boolean, timeTaken: number) => {
    if (!user || currentIndex >= flashcards.length) return;
    
    try {
      const itemId = flashcards[currentIndex].id;
      
      // Registrar el resultado en Firebase
      await recordFlashcardResult(user.uid, session.id, itemId, wasCorrect, timeTaken);
      
      // Actualizar los resultados locales
      setResults(prev => ({
        correct: prev.correct + (wasCorrect ? 1 : 0),
        incorrect: prev.incorrect + (wasCorrect ? 0 : 1),
        totalTime: prev.totalTime + timeTaken,
      }));
      
      // Avanzar a la siguiente tarjeta después de un breve retraso
      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        
        // Si llegamos al final, completar la sesión
        if (nextIndex >= flashcards.length) {
          handleCompleteSession();
        }
      }, 1000);
    } catch (err) {
      console.error('Error recording answer:', err);
      setError('Error al guardar tu respuesta. Por favor, intenta de nuevo.');
    }
  };

  // Saltar una tarjeta (moverla al final del mazo)
  const handleSkip = () => {
    if (currentIndex >= flashcards.length) return;
    
    // Mover la tarjeta actual al final del array
    const newFlashcards = [...flashcards];
    const skippedCard = newFlashcards.splice(currentIndex, 1)[0];
    newFlashcards.push(skippedCard);
    
    setFlashcards(newFlashcards);
  };

  // Completar la sesión
  const handleCompleteSession = async () => {
    if (!user) return;
    
    try {
      // Obtener la sesión completa desde Firestore para tener datos actualizados
      const updatedSession = await getStudySession(user.uid, session.id);
      await completeStudySession(user.uid, session.id);
      
      // Contar el total real de elementos revisados desde la sesión en Firestore
      const itemsReviewed = updatedSession?.itemsReviewed || [];
      const correctCount = itemsReviewed.filter(result => result.wasCorrect === true).length;
      const incorrectItems = itemsReviewed.filter(result => result.wasCorrect === false).length;
      
      // Si no hay items revisados en Firestore, usar los resultados locales
      const totalItems = itemsReviewed.length > 0 ? 
        itemsReviewed.length : 
        Math.max(results.correct + results.incorrect, flashcards.length > 0 ? 1 : 0);
      
      const correctItems = itemsReviewed.length > 0 ? 
        correctCount : 
        results.correct > 0 ? results.correct : (flashcards.length > 0 ? 1 : 0);
      
      // Calcular el tiempo promedio
      let totalTime = 0;
      if (itemsReviewed.length > 0) {
        totalTime = itemsReviewed.reduce((sum: number, item: { timeTaken: number }) => sum + item.timeTaken, 0);
      } else {
        totalTime = results.totalTime;
      }
      
      const averageTime = totalItems > 0 ? Math.max(totalTime / totalItems, 1000) : 0;
      
      console.log('Resumen de la sesión:', { 
        totalItems, 
        correctItems, 
        incorrectItems,
        averageTime 
      });
      
      onCompleteSession({
        totalItems,
        correctItems,
        averageTime,
      });
    } catch (err) {
      console.error('Error completing session:', err);
      setError('Error al finalizar la sesión. Por favor, intenta de nuevo.');
    }
  };

  // Pausar o reanudar la sesión
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando tarjetas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-red-700 dark:text-red-300">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="text-center p-8">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Sin tarjetas disponibles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            No hay tarjetas disponibles para estudiar. Añade más palabras a tu vocabulario o selecciona otra carpeta.
          </p>
          <button
            onClick={() => onCompleteSession({ totalItems: 0, correctItems: 0, averageTime: 0 })}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Barra de progreso y controles */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePause}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 transition-colors"
            aria-label={isPaused ? "Reanudar" : "Pausar"}
          >
            {isPaused ? (
              <ArrowLeftIcon className="w-5 h-5" />
            ) : (
              <PauseIcon className="w-5 h-5" />
            )}
          </button>
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {currentIndex + 1} de {flashcards.length}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="inline-block px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-md">
              {results.correct} ✓
            </span>
          </div>
          <div className="text-xs font-medium text-red-600 dark:text-red-400">
            <span className="inline-block px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded-md">
              {results.incorrect} ✗
            </span>
          </div>
        </div>
      </div>

      {/* Contenedor de la tarjeta con modal de pausa */}
      <div className="relative w-full min-h-[400px] flex items-center justify-center">
        {/* Overlay de pausa */}
        {isPaused && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Sesión en pausa
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Puedes continuar con tu sesión de estudio o salir y guardar tu progreso.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => onCompleteSession({
                    totalItems: results.correct + results.incorrect,
                    correctItems: results.correct,
                    averageTime: (results.correct + results.incorrect) > 0 
                      ? results.totalTime / (results.correct + results.incorrect) 
                      : 0
                  })}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Salir
                </button>
                <button
                  onClick={togglePause}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tarjetas */}
        {flashcards.map((item, index) => (
          <Flashcard
            key={item.id}
            item={item}
            mode={session.mode}
            isActive={index === currentIndex && !isPaused}
            onAnswer={handleAnswer}
            onSkip={handleSkip}
          />
        ))}
      </div>
    </div>
  );
}
