import { useState, useEffect } from 'react';
import { VocabularyItem } from '../../types';
import { ArrowPathIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import './flashcards.css';

interface FlashcardProps {
  item: VocabularyItem;
  mode: 'word-to-translation' | 'translation-to-word' | 'mixed';
  isActive: boolean;
  onAnswer: (wasCorrect: boolean, timeTaken: number) => void;
  onSkip: () => void;
}

export default function Flashcard({ item, mode, isActive, onAnswer, onSkip }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [userGuessedCorrectly, setUserGuessedCorrectly] = useState<boolean | null>(null);
  
  // Determinar qué mostrar en la cara frontal y trasera según el modo
  const frontContent = mode === 'translation-to-word' ? item.translation : item.word;
  const backContent = mode === 'translation-to-word' ? item.word : item.translation;
  
  // Reiniciar el estado cuando cambia la tarjeta activa
  useEffect(() => {
    setFlipped(false);
    setUserGuessedCorrectly(null);
    
    // Establecer el tiempo de inicio cuando la tarjeta se activa
    if (isActive) {
      setStartTime(Date.now());
    } else {
      setStartTime(null);
    }
  }, [isActive, item.id]);
  
  // Manejar el volteo de la tarjeta
  const handleFlip = () => {
    if (!isActive || userGuessedCorrectly !== null) return;
    setFlipped(!flipped);
  };
  
  // Registrar una respuesta
  const recordAnswer = (wasCorrect: boolean) => {
    if (!isActive || userGuessedCorrectly !== null) return;
    
    const timeTaken = startTime ? Date.now() - startTime : 0;
    setUserGuessedCorrectly(wasCorrect);
    onAnswer(wasCorrect, timeTaken);
  };
  
  // Gradiente de color según el nivel de proficiencia
  const getProficiencyGradient = () => {
    const level = item.proficiencyLevel;
    if (level <= 1) return 'from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-900/10';
    if (level <= 3) return 'from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-900/10';
    return 'from-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-900/10';
  };
  
  // Obtener el borde según resultado
  const getCardBorder = () => {
    if (userGuessedCorrectly === true) return 'border-emerald-500';
    if (userGuessedCorrectly === false) return 'border-red-500';
    return 'border-slate-200 dark:border-slate-700';
  };
  
  return (
    <div className={`
      w-full max-w-md mx-auto h-64 perspective-1000
      ${isActive ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}
      transition-opacity duration-300
    `}>
      <div
        className={`
          relative w-full h-full transition-transform duration-500 transform-style-preserve-3d 
          ${flipped ? 'rotate-y-180' : ''}
          cursor-pointer
          rounded-xl shadow-lg hover:shadow-xl
          border-2 ${getCardBorder()}
          ${userGuessedCorrectly === true ? 'animate-correct' : ''}
          ${userGuessedCorrectly === false ? 'animate-incorrect' : ''}
        `}
        onClick={handleFlip}
      >
        {/* Cara frontal */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${getProficiencyGradient()}
          backface-hidden rounded-xl p-6 flex flex-col justify-center items-center
        `}>
          <span className="absolute top-2 right-3 text-xs font-medium text-slate-500 dark:text-slate-400">
            Nivel: {item.proficiencyLevel}/5
          </span>
          
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center mb-4">
            {frontContent}
          </h3>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1.5 mt-4">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 
                           text-blue-700 dark:text-blue-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="absolute bottom-3 text-xs text-slate-500 dark:text-slate-400">
            Haz clic para ver la respuesta
          </div>
        </div>
        
        {/* Cara trasera */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${getProficiencyGradient()}
          backface-hidden rounded-xl p-6 flex flex-col justify-center items-center
          rotate-y-180
        `}>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center mb-4">
            {backContent}
          </h3>
          
          {item.examples && item.examples.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Ejemplo:
              </p>
              <p className="text-sm italic text-slate-600 dark:text-slate-400">
                {item.examples[0]}
              </p>
            </div>
          )}
          
          {userGuessedCorrectly === null && (
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  recordAnswer(false);
                }}
                className="p-2 rounded-full bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50
                         text-red-700 dark:text-red-300 transition-colors"
                aria-label="Incorrecto"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSkip();
                }}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
                         text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Saltar"
              >
                <ArrowPathIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  recordAnswer(true);
                }}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50
                         text-emerald-700 dark:text-emerald-300 transition-colors"
                aria-label="Correcto"
              >
                <CheckIcon className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
