import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuthContext } from '../context/AuthContext';
import { Layout } from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';

// Definir tipos
interface VocabularyWord {
  id?: string;
  word: string;           // Palabra en inglés
  translation: string;    // Traducción en español
  userId: string;
}

interface GameWord {
  id: number;
  word: string;
  translation: string;
  scrambled: string;
  isCorrect: boolean;
  userInput: string;
  status: 'none' | 'correct' | 'incorrect';
}

// Niveles de dificultad
const DIFFICULTY_LEVELS = {
  EASY: { words: 5, name: 'Fácil' },
  MEDIUM: { words: 8, name: 'Medio' },
  HARD: { words: 12, name: 'Difícil' }
};

const WordOrderingPage: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estados del juego
  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [gameWords, setGameWords] = useState<GameWord[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'loading' | 'ready' | 'playing' | 'won'>('loading');
  const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTY_LEVELS>('EASY');
  
  // Cargar vocabulario del usuario
  useEffect(() => {
    const loadVocabulary = async () => {
      if (!user) {
        navigate('/login');
        return;
      }
      
      try {
        setGameStatus('loading');
        
        // Referencia a la colección de vocabulario del usuario
        const vocabularyRef = collection(db, 'users', user.uid, 'vocabulary');
        const querySnapshot = await getDocs(vocabularyRef);
        
        if (querySnapshot.empty) {
          console.log('No se encontraron palabras en el vocabulario');
          return;
        }
        
        const words = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            word: data.word || '',
            translation: data.translation || '',
            userId: user.uid
          } as VocabularyWord;
        });
        
        console.log('Palabras encontradas:', words.length);
        
        // Filtrar palabras válidas (que tengan tanto word como translation)
        const validWords = words.filter(word => 
          word.word && 
          word.translation && 
          word.word.length > 0 && 
          word.translation.length > 0
        );
        
        if (validWords.length === 0) {
          console.log('No hay palabras válidas para el juego');
          return;
        }
        
        setVocabularyWords(validWords);
        setGameStatus('ready');
        
      } catch (error) {
        console.error('Error al cargar el vocabulario:', error);
      }
    };
    
    loadVocabulary();
  }, [user, navigate]);
  
  // Función para desordenar una palabra
  const scrambleWord = (word: string): string => {
    const letters = word.split('');
    
    // Asegurarse de que la palabra desordenada sea diferente a la original
    let scrambled;
    do {
      scrambled = [...letters].sort(() => Math.random() - 0.5).join('');
    } while (scrambled === word && word.length > 1);
    
    return scrambled;
  };
  
  // Iniciar juego con el nivel de dificultad seleccionado
  const startGame = useCallback(() => {
    if (vocabularyWords.length === 0) return;
    
    // Reiniciar estados
    setScore(0);
    
    // Determinar cuántas palabras necesitamos según la dificultad
    const wordsNeeded = DIFFICULTY_LEVELS[difficulty].words;
    
    // Si no hay suficientes palabras, usar todas las disponibles
    const wordsToUse = Math.min(wordsNeeded, vocabularyWords.length);
    
    // Seleccionar palabras aleatorias
    const shuffledWords = [...vocabularyWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, wordsToUse);
    
    // Crear lista de palabras para el juego
    const words: GameWord[] = selectedWords.map((word, index) => ({
      id: index,
      word: word.word,
      translation: word.translation,
      scrambled: scrambleWord(word.word),
      isCorrect: false,
      userInput: '',
      status: 'none'
    }));
    
    setGameWords(words);
    setGameStatus('playing');
  }, [vocabularyWords, difficulty]);
  
  // Manejar cambio en el input para una palabra específica
  const handleInputChange = (index: number, value: string) => {
    const updatedWords = [...gameWords];
    updatedWords[index] = {
      ...updatedWords[index],
      userInput: value,
      status: 'none'
    };
    setGameWords(updatedWords);
  };
  
  // Comprobar la respuesta para una palabra específica
  const checkAnswer = (index: number) => {
    const word = gameWords[index];
    
    if (word.isCorrect || word.userInput.trim() === '') return;
    
    const isCorrect = word.userInput.trim().toLowerCase() === word.word.trim().toLowerCase();
    
    // Actualizar el estado de la palabra
    const updatedWords = [...gameWords];
    updatedWords[index] = {
      ...word,
      isCorrect: isCorrect,
      status: isCorrect ? 'correct' : 'incorrect'
    };
    
    setGameWords(updatedWords);
    
    if (isCorrect) {
      // Añadir puntos
      setScore(prev => prev + 50);
      
      // Verificar si todas las palabras están correctas
      const allCorrect = updatedWords.every(w => w.isCorrect);
      if (allCorrect) {
        setGameStatus('won');
        // Bonus por completar el juego
        setScore(prev => prev + 100);
      }
    } else {
      // Si es incorrecto, limpiar el input después de un breve retraso
      setTimeout(() => {
        const resetWords = [...gameWords];
        resetWords[index] = {
          ...resetWords[index],
          userInput: '',
          status: 'none'
        };
        setGameWords(resetWords);
      }, 1000);
    }
  };
  
  // Manejar tecla Enter en un input específico
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' && gameWords[index].userInput.trim() !== '') {
      checkAnswer(index);
    }
  };
  
  // Cambiar dificultad
  const handleDifficultyChange = (newDifficulty: keyof typeof DIFFICULTY_LEVELS) => {
    if (gameStatus === 'playing') {
      // Confirmar cambio durante el juego
      if (!window.confirm('¿Estás seguro de cambiar la dificultad? Se reiniciará el juego.')) {
        return;
      }
    }
    
    setDifficulty(newDifficulty);
    setGameStatus('ready');
  };
  
  // Renderizar el componente
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate('/games')}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver a Juegos
          </button>
          
          <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">
            Ordenar Letras
          </h1>
          
          <div className="w-24"></div> {/* Espaciador para centrar el título */}
        </div>
        
        {/* Controles del juego */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-6 shadow-md">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Información del juego */}
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Dificultad: <span className="font-medium">{DIFFICULTY_LEVELS[difficulty].name}</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Palabras: <span className="font-medium">{DIFFICULTY_LEVELS[difficulty].words}</span>
              </div>
            </div>
            
            {/* Puntuación */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {score} puntos
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex gap-2">
              {gameStatus === 'ready' || gameStatus === 'won' ? (
                <button 
                  onClick={startGame} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
                >
                  {gameStatus === 'won' ? 'Jugar de nuevo' : 'Iniciar juego'}
                </button>
              ) : gameStatus === 'playing' ? (
                <button 
                  onClick={startGame} 
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-md shadow-sm"
                >
                  Reiniciar
                </button>
              ) : null}
            </div>
          </div>
          
          {/* Selector de dificultad */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(DIFFICULTY_LEVELS).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleDifficultyChange(key as keyof typeof DIFFICULTY_LEVELS)}
                className={`
                  px-3 py-1 text-sm rounded-full
                  ${difficulty === key 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}
                `}
              >
                {value.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Estado del juego */}
        {gameStatus === 'loading' ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Cargando tu vocabulario...
            </p>
          </div>
        ) : gameStatus === 'ready' ? (
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
              ¡Juego de Ordenar Letras!
            </h2>
            <p className="text-blue-600 dark:text-blue-400 mb-4">
              Ordena las letras para formar la palabra correcta en inglés a partir de su traducción.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Se han cargado {vocabularyWords.length} palabras de tu vocabulario.
            </p>
            <button 
              onClick={startGame} 
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md shadow-sm"
            >
              Iniciar juego
            </button>
          </div>
        ) : gameStatus === 'won' ? (
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center mb-6">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
              ¡Felicidades! Has completado todas las palabras
            </h2>
            <p className="text-green-600 dark:text-green-400 mb-2">
              Has ordenado correctamente todas las palabras.
            </p>
            <p className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">
              Puntuación final: {score} puntos
            </p>
            <button 
              onClick={startGame} 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
            >
              Jugar de nuevo
            </button>
          </div>
        ) : null}
        
        {/* Tablero de juego */}
        {gameStatus === 'playing' && gameWords.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
              {/* Lista de palabras */}
              <div className="grid gap-3">
                {gameWords.map((word, index) => (
                  <div 
                    key={index}
                    className={`
                      p-3 rounded-md border
                      ${word.isCorrect 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}
                    `}
                  >
                    <div className="grid grid-cols-12 gap-2 items-center">
                      {/* Número */}
                      <div className="col-span-1 text-center">
                        <div className={`
                          w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                          ${word.isCorrect 
                            ? 'bg-green-500 text-white' 
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}
                        `}>
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Traducción */}
                      <div className="col-span-3 md:col-span-3">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-0.5">Traducción:</div>
                        <div className="font-medium text-slate-800 dark:text-slate-200 truncate">
                          {word.translation}
                        </div>
                      </div>
                      
                      {/* Palabra desordenada */}
                      <div className="col-span-3 md:col-span-3 text-center">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-0.5">Letras:</div>
                        <div className="flex flex-wrap justify-center gap-1">
                          {word.scrambled.split('').map((letter, letterIndex) => (
                            <div 
                              key={letterIndex}
                              className="w-6 h-6 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded text-sm font-bold text-slate-800 dark:text-slate-200"
                            >
                              {letter}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Input del usuario */}
                      <div className="col-span-5 md:col-span-5 flex items-center space-x-2">
                        {word.isCorrect ? (
                          <div className="flex items-center space-x-2 w-full">
                            <div className="flex-1 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded font-medium">
                              {word.word}
                            </div>
                            <div className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 w-full">
                            <div className="relative flex-1">
                              <input
                                type="text"
                                value={word.userInput}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                placeholder="Escribe la palabra..."
                                className={`
                                  w-full px-3 py-1.5 border rounded
                                  text-sm focus:outline-none focus:ring-1
                                  ${word.status === 'correct' 
                                    ? 'border-green-500 focus:ring-green-500 bg-green-50' 
                                    : word.status === 'incorrect'
                                      ? 'border-red-500 focus:ring-red-500 bg-red-50'
                                      : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200'}
                                `}
                                disabled={word.status === 'correct'}
                              />
                              {word.status === 'incorrect' && (
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => checkAnswer(index)}
                              disabled={word.userInput.trim() === '' || word.isCorrect}
                              className={`
                                px-2 py-1.5 rounded text-sm font-medium
                                ${word.userInput.trim() === '' || word.isCorrect
                                  ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'}
                              `}
                            >
                              OK
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Progreso */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-1">
                  <span>Progreso:</span>
                  <span>{gameWords.filter(w => w.isCorrect).length}/{gameWords.length} palabras</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(gameWords.filter(w => w.isCorrect).length / gameWords.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WordOrderingPage;
