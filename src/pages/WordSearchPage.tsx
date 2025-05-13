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

interface WordPlacement {
  word: string;
  translation: string;
  row: number;
  col: number;
  direction: 'horizontal' | 'vertical' | 'diagonal' | 'horizontalReverse' | 'verticalReverse' | 'diagonalReverse';
  found: boolean;
}

interface CellPosition {
  row: number;
  col: number;
}

interface Selection {
  start: CellPosition | null;
  end: CellPosition | null;
  cells: CellPosition[];
  word: string;
}

// Niveles de dificultad
const DIFFICULTY_LEVELS = {
  EASY: { gridSize: 8, words: 5, name: 'Fácil' },
  MEDIUM: { gridSize: 10, words: 8, name: 'Medio' },
  HARD: { gridSize: 12, words: 10, name: 'Difícil' }
};

// Direcciones posibles para colocar palabras
const DIRECTIONS = [
  'horizontal',
  'vertical',
  'diagonal',
  'horizontalReverse',
  'verticalReverse',
  'diagonalReverse'
];

const WordSearchPage: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estados del juego
  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [grid, setGrid] = useState<string[][]>([]);
  const [wordPlacements, setWordPlacements] = useState<WordPlacement[]>([]);
  const [currentSelection, setCurrentSelection] = useState<Selection>({
    start: null,
    end: null,
    cells: [],
    word: ''
  });
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'loading' | 'ready' | 'playing' | 'won'>('loading');
  const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTY_LEVELS>('EASY');
  const [foundWords, setFoundWords] = useState<string[]>([]);
  
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
        
        // Filtrar palabras válidas (que tengan tanto word como translation y sean de longitud adecuada)
        const validWords = words.filter(word => 
          word.word && 
          word.translation && 
          word.word.length > 2 && 
          word.word.length <= DIFFICULTY_LEVELS[difficulty].gridSize
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
  }, [user, navigate, difficulty]);
  
  // Generar la sopa de letras
  const generateWordSearch = useCallback(() => {
    if (vocabularyWords.length === 0) return;
    
    // Reiniciar estados
    setFoundWords([]);
    setScore(0);
    
    // Determinar tamaño de la cuadrícula y número de palabras según dificultad
    const gridSize = DIFFICULTY_LEVELS[difficulty].gridSize;
    const numWords = Math.min(DIFFICULTY_LEVELS[difficulty].words, vocabularyWords.length);
    
    // Seleccionar palabras aleatorias
    const shuffledWords = [...vocabularyWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, numWords);
    
    // Inicializar cuadrícula vacía
    const emptyGrid: string[][] = Array(gridSize).fill(null).map(() => 
      Array(gridSize).fill('')
    );
    
    // Inicializar colocaciones de palabras
    const placements: WordPlacement[] = [];
    
    // Colocar palabras en la cuadrícula
    selectedWords.forEach(wordObj => {
      const word = wordObj.word.toUpperCase();
      
      // Intentar colocar la palabra varias veces
      let placed = false;
      let attempts = 0;
      const maxAttempts = 50;
      
      while (!placed && attempts < maxAttempts) {
        attempts++;
        
        // Elegir dirección aleatoria
        const directionIndex = Math.floor(Math.random() * DIRECTIONS.length);
        const direction = DIRECTIONS[directionIndex] as WordPlacement['direction'];
        
        // Calcular límites para la posición inicial según la dirección
        let rowLimit = gridSize;
        let colLimit = gridSize;
        
        switch (direction) {
          case 'horizontal':
            colLimit = gridSize - word.length + 1;
            break;
          case 'vertical':
            rowLimit = gridSize - word.length + 1;
            break;
          case 'diagonal':
            rowLimit = gridSize - word.length + 1;
            colLimit = gridSize - word.length + 1;
            break;
          case 'horizontalReverse':
            colLimit = gridSize - word.length + 1;
            break;
          case 'verticalReverse':
            rowLimit = gridSize - word.length + 1;
            break;
          case 'diagonalReverse':
            rowLimit = gridSize - word.length + 1;
            colLimit = gridSize - word.length + 1;
            break;
        }
        
        if (rowLimit <= 0 || colLimit <= 0) continue;
        
        // Elegir posición inicial aleatoria
        const row = Math.floor(Math.random() * rowLimit);
        const col = Math.floor(Math.random() * colLimit);
        
        // Verificar si la palabra cabe en la posición y dirección elegidas
        let canPlace = true;
        const positions: { row: number; col: number; letter: string }[] = [];
        
        for (let i = 0; i < word.length; i++) {
          let r = row;
          let c = col;
          
          switch (direction) {
            case 'horizontal':
              c = col + i;
              break;
            case 'vertical':
              r = row + i;
              break;
            case 'diagonal':
              r = row + i;
              c = col + i;
              break;
            case 'horizontalReverse':
              c = col + word.length - 1 - i;
              break;
            case 'verticalReverse':
              r = row + word.length - 1 - i;
              break;
            case 'diagonalReverse':
              r = row + word.length - 1 - i;
              c = col + word.length - 1 - i;
              break;
          }
          
          // Verificar si la celda está vacía o tiene la misma letra
          if (emptyGrid[r][c] !== '' && emptyGrid[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
          
          positions.push({ row: r, col: c, letter: word[i] });
        }
        
        // Si se puede colocar, añadir la palabra a la cuadrícula
        if (canPlace) {
          positions.forEach(pos => {
            emptyGrid[pos.row][pos.col] = pos.letter;
          });
          
          placements.push({
            word: word,
            translation: wordObj.translation,
            row,
            col,
            direction,
            found: false
          });
          
          placed = true;
        }
      }
    });
    
    // Rellenar celdas vacías con letras aleatorias
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (emptyGrid[r][c] === '') {
          const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
          emptyGrid[r][c] = randomLetter;
        }
      }
    }
    
    setGrid(emptyGrid);
    setWordPlacements(placements);
    setGameStatus('playing');
  }, [vocabularyWords, difficulty]);
  
  // Manejar inicio de selección
  const handleCellMouseDown = (row: number, col: number) => {
    if (gameStatus !== 'playing') return;
    
    setIsSelecting(true);
    setCurrentSelection({
      start: { row, col },
      end: null,
      cells: [{ row, col }],
      word: grid[row][col]
    });
  };
  
  // Manejar movimiento durante la selección
  const handleCellMouseEnter = (row: number, col: number) => {
    if (!isSelecting || !currentSelection.start) return;
    
    // Determinar la dirección de la selección
    const startRow = currentSelection.start.row;
    const startCol = currentSelection.start.col;
    
    let direction: WordPlacement['direction'] | null = null;
    let cells: CellPosition[] = [];
    let word = '';
    
    // Horizontal
    if (row === startRow) {
      if (col > startCol) {
        direction = 'horizontal';
        for (let c = startCol; c <= col; c++) {
          cells.push({ row, col: c });
          word += grid[row][c];
        }
      } else if (col < startCol) {
        direction = 'horizontalReverse';
        for (let c = startCol; c >= col; c--) {
          cells.push({ row, col: c });
          word += grid[row][c];
        }
      }
    }
    // Vertical
    else if (col === startCol) {
      if (row > startRow) {
        direction = 'vertical';
        for (let r = startRow; r <= row; r++) {
          cells.push({ row: r, col });
          word += grid[r][col];
        }
      } else if (row < startRow) {
        direction = 'verticalReverse';
        for (let r = startRow; r >= row; r--) {
          cells.push({ row: r, col });
          word += grid[r][col];
        }
      }
    }
    // Diagonal
    else if (Math.abs(row - startRow) === Math.abs(col - startCol)) {
      if (row > startRow && col > startCol) {
        direction = 'diagonal';
        for (let i = 0; i <= row - startRow; i++) {
          cells.push({ row: startRow + i, col: startCol + i });
          word += grid[startRow + i][startCol + i];
        }
      } else if (row < startRow && col < startCol) {
        direction = 'diagonalReverse';
        for (let i = 0; i <= startRow - row; i++) {
          cells.push({ row: startRow - i, col: startCol - i });
          word += grid[startRow - i][startCol - i];
        }
      } else if (row > startRow && col < startCol) {
        direction = 'diagonalReverse';
        for (let i = 0; i <= row - startRow; i++) {
          cells.push({ row: startRow + i, col: startCol - i });
          word += grid[startRow + i][startCol - i];
        }
      } else if (row < startRow && col > startCol) {
        direction = 'diagonal';
        for (let i = 0; i <= startRow - row; i++) {
          cells.push({ row: startRow - i, col: startCol + i });
          word += grid[startRow - i][startCol + i];
        }
      }
    }
    
    if (direction) {
      setCurrentSelection({
        start: currentSelection.start,
        end: { row, col },
        cells,
        word
      });
    }
  };
  
  // Manejar fin de selección
  const handleCellMouseUp = () => {
    if (!isSelecting) return;
    
    setIsSelecting(false);
    
    // Verificar si la palabra seleccionada está en la lista
    const selectedWord = currentSelection.word;
    const foundPlacement = wordPlacements.find(placement => 
      placement.word === selectedWord && !placement.found
    );
    
    if (foundPlacement) {
      // Marcar la palabra como encontrada
      const updatedPlacements = wordPlacements.map(placement => 
        placement.word === selectedWord ? { ...placement, found: true } : placement
      );
      setWordPlacements(updatedPlacements);
      setFoundWords([...foundWords, selectedWord]);
      
      // Añadir puntos
      setScore(prev => prev + selectedWord.length * 10);
      
      // Verificar si se han encontrado todas las palabras
      if (foundWords.length + 1 === wordPlacements.length) {
        setGameStatus('won');
        // Bonus por completar el juego
        setScore(prev => prev + 100);
      }
    }
    
    // Reiniciar selección después de un breve retraso
    setTimeout(() => {
      setCurrentSelection({
        start: null,
        end: null,
        cells: [],
        word: ''
      });
    }, 500);
  };
  
  // Verificar si una celda está seleccionada
  const isCellSelected = (row: number, col: number) => {
    return currentSelection.cells.some(cell => cell.row === row && cell.col === col);
  };
  
  // Verificar si una celda es parte de una palabra encontrada
  const isCellFound = (row: number, col: number) => {
    return wordPlacements.some(placement => {
      if (!placement.found) return false;
      
      const positions: CellPosition[] = [];
      for (let i = 0; i < placement.word.length; i++) {
        let r = placement.row;
        let c = placement.col;
        
        switch (placement.direction) {
          case 'horizontal':
            c = placement.col + i;
            break;
          case 'vertical':
            r = placement.row + i;
            break;
          case 'diagonal':
            r = placement.row + i;
            c = placement.col + i;
            break;
          case 'horizontalReverse':
            c = placement.col + placement.word.length - 1 - i;
            break;
          case 'verticalReverse':
            r = placement.row + placement.word.length - 1 - i;
            break;
          case 'diagonalReverse':
            r = placement.row + placement.word.length - 1 - i;
            c = placement.col + placement.word.length - 1 - i;
            break;
        }
        
        positions.push({ row: r, col: c });
      }
      
      return positions.some(pos => pos.row === row && pos.col === col);
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
  
  // Renderizar celda
  const renderCell = (letter: string, row: number, col: number) => {
    const isSelected = isCellSelected(row, col);
    const isFound = isCellFound(row, col);
    
    return (
      <div 
        key={`${row}-${col}`}
        className={`
          w-full h-full flex items-center justify-center
          text-sm sm:text-base font-bold
          select-none cursor-pointer
          ${isSelected ? 'bg-blue-500 text-white scale-110 z-10 shadow-md ring-1 ring-blue-300' : ''}
          ${isFound ? 'bg-green-500 text-white' : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200'}
          ${!isSelected && !isFound ? 'hover:bg-slate-100 dark:hover:bg-slate-600' : ''}
          transition-all duration-100
        `}
        onMouseDown={() => handleCellMouseDown(row, col)}
        onMouseEnter={() => handleCellMouseEnter(row, col)}
        onMouseUp={handleCellMouseUp}
      >
        {letter}
      </div>
    );
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
            Sopa de Letras
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
                Palabras: <span className="font-medium">{foundWords.length}/{wordPlacements.length}</span>
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
                  onClick={generateWordSearch} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
                >
                  {gameStatus === 'won' ? 'Jugar de nuevo' : 'Iniciar juego'}
                </button>
              ) : gameStatus === 'playing' ? (
                <button 
                  onClick={generateWordSearch} 
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
              ¡Sopa de Letras!
            </h2>
            <p className="text-blue-600 dark:text-blue-400 mb-4">
              Encuentra las palabras ocultas en la cuadrícula usando las traducciones como pistas.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Se han cargado {vocabularyWords.length} palabras de tu vocabulario.
            </p>
            <button 
              onClick={generateWordSearch} 
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md shadow-sm"
            >
              Iniciar juego
            </button>
          </div>
        ) : gameStatus === 'won' ? (
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center mb-6">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
              ¡Felicidades! Has completado la sopa de letras
            </h2>
            <p className="text-green-600 dark:text-green-400 mb-2">
              Has encontrado todas las palabras.
            </p>
            <p className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">
              Puntuación final: {score} puntos
            </p>
            <button 
              onClick={generateWordSearch} 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
            >
              Jugar de nuevo
            </button>
          </div>
        ) : null}
        
        {/* Tablero de juego y lista de palabras */}
        {gameStatus === 'playing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tablero de sopa de letras */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg shadow-inner">
              <div 
                className="grid gap-0"
                style={{ 
                  gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
                  touchAction: 'none', // Prevenir scroll en dispositivos táctiles
                  width: '400px',       // Ancho fijo para todos los niveles
                  height: '400px',      // Alto fijo para todos los niveles
                  margin: '0 auto'      // Centrar el tablero
                }}
              >
                {grid.map((row, rowIndex) => 
                  row.map((letter, colIndex) => 
                    renderCell(letter, rowIndex, colIndex)
                  )
                )}
              </div>
            </div>
            
            {/* Lista de palabras a encontrar */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg shadow-inner">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Palabras a encontrar
              </h3>
              <div className="space-y-2">
                {wordPlacements.map((placement, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-2 rounded-md 
                      ${placement.found 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200'}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {placement.found ? placement.word : '???'}
                      </span>
                      {placement.found && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {placement.translation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WordSearchPage;
