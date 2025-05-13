import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

// Componente principal del juego del Ahorcado
const HangmanPage: React.FC = () => {
  const { user } = useAuthContext();
  // Definir una interfaz para las palabras de vocabulario
  interface VocabularyWord {
    id?: string;
    word: string;           // Palabra en inglés
    translation: string;    // Traducción en español
    examples?: string[];
    notes?: string;
    tags?: string[];
    proficiencyLevel?: number;
    reviewCount?: number;
    createdAt?: Date;
    lastReviewed?: Date;
    userId: string;
    folderId?: string;
  }

  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState('');
  const [currentClue, setCurrentClue] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState(0);
  
  // Máximo número de errores permitidos
  const MAX_INCORRECT = 6;
  
  // Seleccionar palabra aleatoria
  const selectRandomWord = React.useCallback((words: VocabularyWord[]) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    
    // Depurar la palabra seleccionada
    console.log('Palabra seleccionada:', selectedWord);
    
    // En la estructura correcta:
    // - word: contiene la palabra en inglés
    // - translation: contiene la traducción en español
    const englishWord = selectedWord.word || '';
    const spanishTranslation = selectedWord.translation || '';
    
    console.log(`Jugando con: ${englishWord} (${spanishTranslation})`);
    
    // Usar la palabra en inglés para el juego y la traducción como pista
    setCurrentWord(englishWord.toUpperCase());
    setCurrentClue(spanishTranslation);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('playing');
  }, []);
  
  // Cargar vocabulario del usuario
  useEffect(() => {
    const loadVocabulary = async () => {
      setLoading(true);
      try {
        // Usar la ruta correcta para acceder a la colección de vocabulario del usuario
        const vocabularyRef = collection(db, 'users', user?.uid || '', 'vocabulary');
        const querySnapshot = await getDocs(vocabularyRef);
        
        const words = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            word: data.word || '',
            translation: data.translation || '',
            userId: user?.uid || ''
          } as VocabularyWord;
        });
        
        console.log('Palabras encontradas:', words.length);
        console.log('Estructura completa de palabras:', words);
        console.log('Palabras originales:', words.map(w => ({ word: w.word, translation: w.translation })));
        
        // Filtro menos restrictivo
        const filteredWords = words.filter(word => {
          // Verificar si tiene palabra en inglés
          if (!word.word) {
            console.log('Entrada sin palabra en inglés:', word);
            return false;
          }
          
          // Verificar si tiene traducción
          if (!word.translation) {
            console.log('Entrada sin traducción:', word);
            return false;
          }
          
          // Verificar longitud mínima
          if (word.word.length < 2) {
            console.log('Palabra demasiado corta:', word.word);
            return false;
          }
          
          // Aceptar cualquier carácter alfanumérico
          return true;
        });
        
        console.log('Palabras filtradas:', filteredWords.length);
        
        // Si no hay palabras filtradas pero hay palabras originales, usar todas las palabras
        if (filteredWords.length === 0 && words.length > 0) {
          console.log('Usando todas las palabras sin filtrar');
          // Crear palabras de respaldo con valores predeterminados si faltan campos
          const backupWords = words.map(word => ({
            ...word,
            word: word.word || 'example',
            translation: word.translation || 'ejemplo'
          }));
          setVocabularyWords(backupWords);
          selectRandomWord(backupWords);
        } else {
          setVocabularyWords(filteredWords);
          if (filteredWords.length > 0) {
            selectRandomWord(filteredWords);
          }
        }
      } catch (error) {
        console.error('Error loading vocabulary:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      loadVocabulary();
    }
  }, [user, selectRandomWord]);
  
  // La función selectRandomWord ya está definida arriba usando useCallback
  
  // Función para verificar si se ganó el juego
  const checkForWin = (currentGuessedLetters: string[]) => {
    const wordLetters = currentWord.split('');
    const uniqueLetters = [...new Set(wordLetters.filter(letter => letter.match(/[A-Z]/)))];
    
    // Verificar si todas las letras únicas de la palabra han sido adivinadas
    const allLettersGuessed = uniqueLetters.every(letter => 
      currentGuessedLetters.includes(letter)
    );
    
    if (allLettersGuessed) {
      setGameStatus('won');
      // Bonus por ganar
      setScore(prev => prev + 50);
      
      // Reiniciar automáticamente después de 3 segundos si hay victoria
      setTimeout(() => {
        if (vocabularyWords.length > 0) {
          selectRandomWord(vocabularyWords);
        }
      }, 3000);
    }
  };
  
  // Manejar selección de letra
  const handleLetterGuess = (letter: string) => {
    if (gameStatus !== 'playing') return;
    
    // Si la letra ya fue seleccionada, no hacer nada
    if (guessedLetters.includes(letter)) return;
    
    // Añadir letra a las adivinadas
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    
    // Verificar si la letra está en la palabra
    if (!currentWord.includes(letter)) {
      const newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);
      
      // Verificar si se perdió el juego
      if (newIncorrectGuesses >= MAX_INCORRECT) {
        setGameStatus('lost');
      }
    } else {
      // Añadir puntos por letra correcta
      setScore(prev => prev + 10);
      
      // Verificar si se ganó el juego después de añadir la nueva letra
      checkForWin(newGuessedLetters);
    }
  };
  
  // Reiniciar juego
  const handleReset = () => {
    if (vocabularyWords.length > 0) {
      selectRandomWord(vocabularyWords);
    }
  };

  // Componente para el dibujo del ahorcado usando emojis y texto
  const HangmanDrawing = () => {
    // Definir los estados del juego con emojis y texto
    const hangmanStates = [
      // Estado inicial - solo la base
      <div key="state-0" className="text-center">
        <div className="text-6xl mb-4">🏗️</div>
        <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
          Base preparada
        </div>
      </div>,
      
      // Estado 1 - Primer error
      <div key="state-1" className="text-center">
        <div className="text-6xl mb-4">😀</div>
        <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
          ¡Primer error!
        </div>
      </div>,
      
      // Estado 2 - Segundo error
      <div key="state-2" className="text-center">
        <div className="text-6xl mb-4">🙂</div>
        <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
          ¡Segundo error!
        </div>
      </div>,
      
      // Estado 3 - Tercer error
      <div key="state-3" className="text-center">
        <div className="text-6xl mb-4">😐</div>
        <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
          ¡Tercer error!
        </div>
      </div>,
      
      // Estado 4 - Cuarto error
      <div key="state-4" className="text-center">
        <div className="text-6xl mb-4">😟</div>
        <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
          ¡Cuarto error!
        </div>
      </div>,
      
      // Estado 5 - Quinto error
      <div key="state-5" className="text-center">
        <div className="text-6xl mb-4">😨</div>
        <div className="text-xl font-bold text-slate-700 dark:text-slate-300">
          ¡Quinto error!
        </div>
      </div>,
      
      // Estado 6 - Sexto error (perdiste)
      <div key="state-6" className="text-center">
        <div className="text-6xl mb-4">😵</div>
        <div className="text-xl font-bold text-red-600 dark:text-red-400">
          ¡Último error!
        </div>
      </div>
    ];
    
    // Mostrar el estado actual basado en el número de errores
    return (
      <div className="py-6 px-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl shadow-inner mx-auto max-w-xs">
        {hangmanStates[incorrectGuesses]}
        <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
          {incorrectGuesses} de {MAX_INCORRECT} errores
        </div>
      </div>
    );
  };

  // Componente para mostrar la palabra con guiones
  const HangmanWord = () => {
    return (
      <div className="flex gap-2 text-4xl font-bold my-6 justify-center flex-wrap">
        {currentWord.split('').map((letter, index) => (
          <span key={index} className={`border-b-4 border-slate-800 dark:border-slate-200 w-8 text-center ${letter === ' ' ? 'border-none mx-2' : ''}`}>
            <span 
              className={`
                ${guessedLetters.includes(letter) || letter === ' ' || gameStatus === 'lost' ? 'visible' : 'invisible'}
                ${!guessedLetters.includes(letter) && letter !== ' ' && gameStatus === 'lost' ? 'text-red-600 dark:text-red-400' : 'text-slate-800 dark:text-slate-200'}
              `}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    );
  };

  // Componente para el teclado virtual
  const HangmanKeyboard = () => {
    const KEYS = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return (
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {KEYS.map(key => {
          const isGuessed = guessedLetters.includes(key);
          const isCorrect = currentWord.includes(key);
          
          return (
            <button
              key={key}
              className={`
                w-10 h-10 rounded-md font-bold text-lg transition-colors
                ${isGuessed 
                  ? isCorrect 
                    ? 'bg-green-500 text-white dark:bg-green-700' 
                    : 'bg-red-500 text-white dark:bg-red-700'
                  : 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                }
                ${gameStatus !== 'playing' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
              onClick={() => handleLetterGuess(key)}
              disabled={isGuessed || gameStatus !== 'playing'}
            >
              {key}
            </button>
          );
        })}
      </div>
    );
  };

  // Componente para mostrar la pista
  const HangmanClue = () => {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">Pista:</h3>
        <p className="text-blue-600 dark:text-blue-400 text-xl">{currentClue || "Sin pista disponible"}</p>
      </div>
    );
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto">
          <div className="text-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Cargando vocabulario...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (vocabularyWords.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto">
          <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">No hay palabras disponibles</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Añade algunas palabras a tu vocabulario para jugar al Ahorcado.</p>
            <Link 
              to="/vocabulary" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ir a Vocabulario
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="relative mb-12 overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 rounded-3xl p-8 shadow-xl">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Juego del <span className="text-amber-300">Ahorcado</span>
            </h1>
            <p className="text-white text-opacity-90 text-lg md:text-xl max-w-3xl">
              Adivina palabras de tu vocabulario letra por letra. Cada letra incorrecta añade una parte al dibujo del ahorcado.
              ¡Adivina la palabra antes de que se complete el dibujo!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Refuerza ortografía
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Tu vocabulario
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Divertido y educativo
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal del juego */}
        <div className="max-w-4xl mx-auto p-4">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Juego del Ahorcado</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Puntuación: <span className="font-bold">{score}</span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-md hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
              >
                Nueva Palabra
              </button>
              
              <Link
                to="/games"
                className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a Juegos
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-6">
            <HangmanClue />
            
            <div className="flex flex-col items-center my-8">
              <HangmanDrawing />
              <HangmanWord />
            </div>
            
            <HangmanKeyboard />
            
            {gameStatus !== 'playing' && (
              <div className="mt-6 text-center">
                {gameStatus === 'won' ? (
                  <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg text-center">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-3">
                      ¡Enhorabuena! ¡Has acertado!
                    </h3>
                    <p className="text-green-600 dark:text-green-400 text-lg mb-4">
                      Has adivinado correctamente: <span className="font-bold">{currentWord}</span>
                    </p>
                    <p className="text-sm text-green-500 dark:text-green-400 mb-2">
                      +50 puntos de bonificación por victoria
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Cargando nueva palabra en 3 segundos...
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg text-center">
                    <div className="text-5xl mb-4">😓</div>
                    <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-3">
                      ¡Oh no! Has perdido.
                    </h3>
                    <p className="text-red-600 dark:text-red-400 text-lg">
                      La palabra era: <span className="font-bold">{currentWord}</span>
                    </p>
                  </div>
                )}
                
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Jugar de nuevo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HangmanPage;
