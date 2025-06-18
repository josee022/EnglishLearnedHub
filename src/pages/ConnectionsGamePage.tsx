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

interface ConnectionItem {
  id: number;
  word: string;
  translation: string;
  isMatched: boolean;
}

interface Connection {
  sourceId: number | null;
  targetId: number | null;
  isActive: boolean;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

// Niveles de dificultad
const DIFFICULTY_LEVELS = {
  EASY: { pairs: 5, name: 'Fácil' },
  MEDIUM: { pairs: 8, name: 'Medio' },
  HARD: { pairs: 12, name: 'Difícil' }
};

const ConnectionsGamePage: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estados del juego
  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [words, setWords] = useState<ConnectionItem[]>([]);
  const [translations, setTranslations] = useState<ConnectionItem[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [activeConnection, setActiveConnection] = useState<Connection>({
    sourceId: null,
    targetId: null,
    isActive: false,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  });
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'loading' | 'ready' | 'playing' | 'won'>('loading');
  const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTY_LEVELS>('EASY');
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  
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
    setConnections([]);
    setActiveConnection({
      sourceId: null,
      targetId: null,
      isActive: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    });
    setScore(0);
    setMatchedPairs(0);
    
    // Determinar cuántas parejas necesitamos según la dificultad
    const pairsNeeded = DIFFICULTY_LEVELS[difficulty].pairs;
    
    // Si no hay suficientes palabras, usar todas las disponibles
    const pairsToUse = Math.min(pairsNeeded, vocabularyWords.length);
    
    // Seleccionar palabras aleatorias
    const shuffledWords = [...vocabularyWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, pairsToUse);
    
    // Crear listas de palabras y traducciones
    const wordItems: ConnectionItem[] = selectedWords.map((word, index) => ({
      id: index,
      word: word.word,
      translation: word.translation,
      isMatched: false
    }));
    
    const translationItems: ConnectionItem[] = [...wordItems]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        ...item,
        id: index + pairsToUse // IDs diferentes para evitar conflictos
      }));
    
    setWords(wordItems);
    setTranslations(translationItems);
    setGameStatus('playing');
  }, [vocabularyWords, difficulty]);
  
  // Manejar inicio de conexión
  const handleConnectionStart = (id: number, _isWord: boolean, event: React.MouseEvent) => {
    // Obtener la posición del elemento
    const rect = event.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width;
    const startY = rect.top + rect.height / 2;
    
    setActiveConnection({
      sourceId: id,
      targetId: null,
      isActive: true,
      startX,
      startY,
      endX: event.clientX,
      endY: event.clientY
    });
  };
  
  // Manejar movimiento durante la conexión
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!activeConnection.isActive) return;
    
    setActiveConnection({
      ...activeConnection,
      endX: event.clientX,
      endY: event.clientY
    });
  };
  
  // Manejar fin de conexión
  const handleConnectionEnd = (id: number, _isTranslation: boolean) => {
    if (!activeConnection.isActive || activeConnection.sourceId === null) return;
    
    // Verificar si la conexión es válida
    const sourceId = activeConnection.sourceId;
    const targetId = id;
    
    // Evitar conexiones dentro de la misma columna
    const sourceIsWord = sourceId < DIFFICULTY_LEVELS[difficulty].pairs;
    const targetIsWord = targetId < DIFFICULTY_LEVELS[difficulty].pairs;
    
    // Si ambos son palabras o ambos son traducciones, no permitir la conexión
    if (sourceIsWord === targetIsWord) {
      setActiveConnection({
        sourceId: null,
        targetId: null,
        isActive: false,
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
      });
      return;
    }
    
    // Encontrar los items correspondientes
    const sourceItem = words.find(w => w.id === sourceId) || translations.find(t => t.id === sourceId);
    const targetItem = words.find(w => w.id === targetId) || translations.find(t => t.id === targetId);
    
    if (sourceItem && targetItem) {
      // Verificar si la conexión es correcta
      const isCorrect = sourceItem.word === targetItem.word && sourceItem.translation === targetItem.translation;
      
      if (isCorrect) {
        // Marcar ambos items como emparejados
        const updatedWords = words.map(word => 
          word.id === sourceId || word.id === targetId 
            ? { ...word, isMatched: true } 
            : word
        );
        
        const updatedTranslations = translations.map(translation => 
          translation.id === sourceId || translation.id === targetId 
            ? { ...translation, isMatched: true } 
            : translation
        );
        
        setWords(updatedWords);
        setTranslations(updatedTranslations);
        
        // Guardar la conexión
        const newConnection = {
          sourceId,
          targetId,
          isActive: false,
          startX: activeConnection.startX,
          startY: activeConnection.startY,
          endX: activeConnection.endX,
          endY: activeConnection.endY
        };
        
        setConnections([...connections, newConnection]);
        setMatchedPairs(prev => prev + 1);
        
        // Añadir puntos
        setScore(prev => prev + 50);
        
        // Verificar si se han encontrado todas las parejas
        if (matchedPairs + 1 === DIFFICULTY_LEVELS[difficulty].pairs) {
          setGameStatus('won');
          // Bonus por completar el juego
          setScore(prev => prev + 100);
        }
      }
    }
    
    // Reiniciar conexión activa
    setActiveConnection({
      sourceId: null,
      targetId: null,
      isActive: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    });
  };
  
  // Cancelar conexión
  const handleMouseUp = () => {
    if (!activeConnection.isActive) return;
    
    setActiveConnection({
      sourceId: null,
      targetId: null,
      isActive: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    });
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
  
  // Renderizar palabra o traducción
  const renderItem = (item: ConnectionItem, isWord: boolean) => {
    return (
      <div 
        key={item.id}
        className={`
          relative p-3 rounded-md mb-2 shadow-sm select-none
          ${item.isMatched 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
            : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600'}
          ${isWord ? 'border-l-4 border-blue-500' : 'border-r-4 border-amber-500'}
          transition-colors duration-150
        `}
        onMouseDown={(e) => !item.isMatched && handleConnectionStart(item.id, isWord, e)}
        onMouseUp={() => !item.isMatched && handleConnectionEnd(item.id, !isWord)}
      >
        <div className="font-medium">
          {isWord ? item.word : item.translation}
        </div>
        
        {/* Punto de conexión */}
        <div 
          className={`
            absolute ${isWord ? 'right-0' : 'left-0'} top-1/2 transform -translate-y-1/2
            w-3 h-3 rounded-full
            ${item.isMatched 
              ? 'bg-green-500' 
              : 'bg-blue-500 dark:bg-blue-400'}
          `}
        />
      </div>
    );
  };
  
  // Renderizar línea de conexión
  const renderConnection = (connection: Connection, index: number) => {
    // Calcular la longitud de la línea
    const dx = connection.endX - connection.startX;
    const dy = connection.endY - connection.startY;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    // Calcular el ángulo
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    return (
      <div 
        key={index}
        className="absolute bg-green-500"
        style={{
          height: '3px',
          width: `${length}px`,
          left: `${connection.startX}px`,
          top: `${connection.startY}px`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: '0 0',
          zIndex: 10,
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)'
        }}
      />
    );
  };
  
  // Renderizar línea activa
  const renderActiveLine = () => {
    if (!activeConnection.isActive) return null;
    
    // Calcular la longitud de la línea
    const dx = activeConnection.endX - activeConnection.startX;
    const dy = activeConnection.endY - activeConnection.startY;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    // Calcular el ángulo
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    return (
      <>
        {/* Línea principal */}
        <div 
          className="absolute bg-blue-500"
          style={{
            height: '3px',
            width: `${length}px`,
            left: `${activeConnection.startX}px`,
            top: `${activeConnection.startY}px`,
            transform: `rotate(${angle}deg)`,
            transformOrigin: '0 0',
            zIndex: 20,
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.5)'
          }}
        />
        {/* Punta de flecha */}
        <div 
          className="absolute w-3 h-3 bg-blue-500 transform rotate-45"
          style={{
            left: `${activeConnection.endX - 6}px`,
            top: `${activeConnection.endY - 6}px`,
            zIndex: 21
          }}
        />
      </>
    );
  };
  // Renderizar el componente
  return (
    <Layout>
      <div 
        className="container mx-auto px-4 py-8 select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
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
            Conexiones
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
                Parejas: <span className="font-medium">{matchedPairs}/{DIFFICULTY_LEVELS[difficulty].pairs}</span>
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
              ¡Juego de Conexiones!
            </h2>
            <p className="text-blue-600 dark:text-blue-400 mb-4">
              Conecta cada palabra en inglés con su traducción en español arrastrando líneas entre ellas.
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
              ¡Felicidades! Has completado todas las conexiones
            </h2>
            <p className="text-green-600 dark:text-green-400 mb-2">
              Has conectado correctamente todas las palabras con sus traducciones.
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
        {gameStatus === 'playing' && (
          <div className="relative select-none">
            {/* Contenedor para las líneas de conexión */}
            <div className="fixed inset-0 pointer-events-none z-10">
              {connections.map((connection, index) => renderConnection(connection, index))}
              {renderActiveLine()}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {/* Columna de palabras en inglés */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 border-b pb-2">
                  Palabras en inglés
                </h3>
                <div className="space-y-4">
                  {words.map(word => renderItem(word, true))}
                </div>
              </div>
              
              {/* Columna de traducciones */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 border-b pb-2">
                  Traducciones en español
                </h3>
                <div className="space-y-4">
                  {translations.map(translation => renderItem(translation, false))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ConnectionsGamePage;
