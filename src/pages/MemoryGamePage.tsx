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

interface MemoryCard {
  id: number;
  content: string;
  type: 'word' | 'translation';
  matchId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

// Niveles de dificultad
const DIFFICULTY_LEVELS = {
  EASY: { pairs: 6, name: 'Fácil' },
  MEDIUM: { pairs: 8, name: 'Medio' },
  HARD: { pairs: 10, name: 'Difícil' }
};

const MemoryGamePage: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estados del juego
  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'loading' | 'ready' | 'playing' | 'won'>('loading');
  const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTY_LEVELS>('EASY');
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [gameStartTime, setGameStartTime] = useState<number | null>(null);
  
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
  
  // Iniciar juego con el nivel de dificultad seleccionado
  const startGame = useCallback(() => {
    if (vocabularyWords.length === 0) return;
    
    // Reiniciar estados
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setScore(0);
    setTimeElapsed(0);
    setGameStartTime(Date.now());
    
    // Determinar cuántas parejas necesitamos según la dificultad
    const pairsNeeded = DIFFICULTY_LEVELS[difficulty].pairs;
    
    // Si no hay suficientes palabras, usar todas las disponibles
    const pairsToUse = Math.min(pairsNeeded, vocabularyWords.length);
    
    // Seleccionar palabras aleatorias
    const shuffledWords = [...vocabularyWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, pairsToUse);
    
    // Crear cartas para el juego
    let newCards: MemoryCard[] = [];
    selectedWords.forEach((word, index) => {
      // Carta con palabra en inglés
      newCards.push({
        id: index * 2,
        content: word.word,
        type: 'word',
        matchId: index,
        isFlipped: false,
        isMatched: false
      });
      
      // Carta con traducción en español
      newCards.push({
        id: index * 2 + 1,
        content: word.translation,
        type: 'translation',
        matchId: index,
        isFlipped: false,
        isMatched: false
      });
    });
    
    // Mezclar las cartas
    newCards = newCards.sort(() => Math.random() - 0.5);
    
    setCards(newCards);
    setGameStatus('playing');
  }, [vocabularyWords, difficulty]);
  
  // Manejar el clic en una carta
  const handleCardClick = (id: number) => {
    // No hacer nada si el juego no está en curso
    if (gameStatus !== 'playing') return;
    
    // No hacer nada si la carta ya está volteada o emparejada
    const clickedCard = cards.find(card => card.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;
    
    // No permitir voltear más de 2 cartas a la vez
    if (flippedCards.length >= 2) return;
    
    // Voltear la carta
    const newCards = cards.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    
    // Añadir la carta a las volteadas
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    
    // Si hay dos cartas volteadas, verificar si son pareja
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const firstCard = cards.find(card => card.id === newFlippedCards[0]);
      const secondCard = cards.find(card => card.id === newFlippedCards[1]);
      
      if (firstCard && secondCard && firstCard.matchId === secondCard.matchId) {
        // ¡Es una pareja!
        setTimeout(() => {
          // Marcar las cartas como emparejadas
          const matchedCards = cards.map(card => 
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true }
              : card
          );
          setCards(matchedCards);
          setFlippedCards([]);
          setMatchedPairs(prev => prev + 1);
          
          // Añadir puntos (más puntos por menos movimientos)
          const basePoints = 100;
          const movesMultiplier = Math.max(0.5, 1 - (moves / 20)); // Penalización por movimientos
          const points = Math.round(basePoints * movesMultiplier);
          setScore(prev => prev + points);
          
          // Verificar si se ha ganado el juego
          if (matchedPairs + 1 === DIFFICULTY_LEVELS[difficulty].pairs) {
            setGameStatus('won');
            // Bonus por completar el juego
            const timeBonus = Math.max(0, 1000 - timeElapsed);
            setScore(prev => prev + timeBonus);
          }
        }, 500);
      } else {
        // No es una pareja, voltear las cartas de nuevo
        setTimeout(() => {
          const unflippedCards = cards.map(card => 
            newFlippedCards.includes(card.id)
              ? { ...card, isFlipped: false }
              : card
          );
          setCards(unflippedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };
  
  // Actualizar el tiempo transcurrido
  useEffect(() => {
    if (gameStatus !== 'playing' || !gameStartTime) return;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - gameStartTime) / 1000);
      setTimeElapsed(elapsed);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameStatus, gameStartTime]);
  
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
  
  // Renderizar carta
  const renderCard = (card: MemoryCard) => {
    return (
      <div 
        key={card.id}
        className={`
          relative h-24 w-full sm:h-28 md:h-32 
          cursor-pointer rounded-lg shadow-md 
          transition-all duration-300 transform 
          ${card.isMatched ? 'opacity-70' : ''}
        `}
        onClick={() => handleCardClick(card.id)}
      >
        {/* Parte frontal (oculta) */}
        <div 
          className={`
            absolute inset-0 bg-blue-600 dark:bg-blue-800 
            rounded-lg flex items-center justify-center
            ${(card.isFlipped || card.isMatched) ? 'opacity-0' : 'opacity-100'}
            transition-opacity duration-300
          `}
        >
          <span className="text-2xl text-white">?</span>
        </div>
        
        {/* Parte trasera (contenido) */}
        <div 
          className={`
            absolute inset-0 bg-white dark:bg-slate-700 
            rounded-lg flex items-center justify-center p-2
            ${(card.isFlipped || card.isMatched) ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300
            border-2 ${card.type === 'word' ? 'border-green-500' : 'border-amber-500'}
          `}
        >
          <span className="text-center font-medium text-sm sm:text-base break-words">
            {card.content}
          </span>
        </div>
      </div>
    );
  };

  // Formatear tiempo
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
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
            Juego de Memoria
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
              Movimientos: <span className="font-medium">{moves}</span>
            </div>
          </div>
          
          {/* Puntuación y tiempo */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {score} puntos
            </div>
            {gameStatus === 'playing' && (
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Tiempo: {formatTime(timeElapsed)}
              </div>
            )}
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
                onClick={() => startGame()} 
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
            ¡Juego de Memoria!
          </h2>
          <p className="text-blue-600 dark:text-blue-400 mb-4">
            Encuentra las parejas de palabras en inglés y sus traducciones en español.
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
            ¡Felicidades! Has completado el juego
          </h2>
          <p className="text-green-600 dark:text-green-400 mb-2">
            Has encontrado todas las parejas en {moves} movimientos.
          </p>
          <p className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">
            Puntuación final: {score} puntos
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Tiempo: {formatTime(timeElapsed)}
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
      {gameStatus === 'playing' && (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {cards.map(card => renderCard(card))}
        </div>
      )}
      </div>
    </Layout>
  );
};

export default MemoryGamePage;
