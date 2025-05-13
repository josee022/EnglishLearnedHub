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

interface QuizQuestion {
  id: number;
  questionType: 'en_to_es' | 'es_to_en' | 'select_translation' | 'choose_word'; // Tipo de pregunta
  questionText: string;    // Texto de la pregunta
  correctAnswer: string;   // Respuesta correcta
  options: string[];       // Opciones de respuesta (incluye la correcta)
  selectedOption: string | null; // Opción seleccionada por el usuario
  isCorrect: boolean | null; // Si la respuesta es correcta, incorrecta o no respondida
}

// Niveles de dificultad
const DIFFICULTY_LEVELS = {
  EASY: { questions: 5, options: 3, name: 'Fácil' },
  MEDIUM: { questions: 10, options: 4, name: 'Medio' },
  HARD: { questions: 15, options: 5, name: 'Difícil' }
};

const QuizPage: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // Estados del juego
  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'loading' | 'ready' | 'playing' | 'results'>('loading');
  const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTY_LEVELS>('EASY');
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
  
  // Pasar a la siguiente pregunta (definido con useCallback antes de ser usado en useEffect)
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex >= questions.length - 1) {
      // Si es la última pregunta, mostrar resultados
      setGameStatus('results');
    } else {
      // Pasar a la siguiente pregunta
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(30); // Reiniciar el temporizador
    }
  }, [currentQuestionIndex, questions.length]);

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
          console.log('No hay palabras válidas para el quiz');
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
  
  // Temporizador para el quiz
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    if (gameStatus === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Si se acaba el tiempo, pasar a la siguiente pregunta
            handleNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameStatus, timeLeft, handleNextQuestion]);
  
  // Generar preguntas para el quiz
  const generateQuestions = useCallback(() => {
    if (vocabularyWords.length < DIFFICULTY_LEVELS[difficulty].options) {
      console.log('No hay suficientes palabras para generar opciones');
      return [];
    }
    
    const numQuestions = Math.min(
      DIFFICULTY_LEVELS[difficulty].questions,
      vocabularyWords.length
    );
    
    // Mezclar las palabras para seleccionar aleatoriamente
    const shuffledWords = [...vocabularyWords].sort(() => Math.random() - 0.5);
    
    // Generar preguntas
    const newQuestions: QuizQuestion[] = [];
    
    for (let i = 0; i < numQuestions; i++) {
      const targetWord = shuffledWords[i];
      
      // Determinar aleatoriamente el tipo de pregunta (4 tipos diferentes)
      const questionTypes = ['en_to_es', 'es_to_en', 'select_translation', 'choose_word'];
      const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)] as QuizQuestion['questionType'];
      
      // Generar opciones incorrectas
      const numOptions = DIFFICULTY_LEVELS[difficulty].options;
      const incorrectOptions: string[] = [];
      
      // Asegurarse de que tenemos suficientes opciones incorrectas
      while (incorrectOptions.length < numOptions - 1) {
        const randomIndex = Math.floor(Math.random() * vocabularyWords.length);
        const randomWord = vocabularyWords[randomIndex];
        
        // Evitar duplicados y la respuesta correcta
        const optionValue = questionType === 'en_to_es' ? randomWord.translation : randomWord.word;
        const correctValue = questionType === 'en_to_es' ? targetWord.translation : targetWord.word;
        
        if (optionValue !== correctValue && !incorrectOptions.includes(optionValue)) {
          incorrectOptions.push(optionValue);
        }
      }
      
      // Crear la pregunta según el tipo
      let correctAnswer = '';
      let questionText = '';
      
      switch (questionType) {
        case 'en_to_es':
          correctAnswer = targetWord.translation;
          questionText = `¿Qué significa "${targetWord.word}"?`;
          break;
          
        case 'es_to_en':
          correctAnswer = targetWord.word;
          questionText = `¿Cómo se dice "${targetWord.translation}" en inglés?`;
          break;
          
        case 'select_translation':
          correctAnswer = targetWord.translation;
          questionText = `Selecciona la traducción correcta para: "${targetWord.word}"`;
          break;
          
        case 'choose_word':
          correctAnswer = targetWord.word;
          questionText = `Elige la palabra en inglés que significa: "${targetWord.translation}"`;
          break;
      }
      
      // Mezclar las opciones (correcta + incorrectas)
      const options = [...incorrectOptions, correctAnswer].sort(() => Math.random() - 0.5);
      
      newQuestions.push({
        id: i,
        questionType,
        questionText,
        correctAnswer,
        options,
        selectedOption: null,
        isCorrect: null
      });
    }
    
    return newQuestions;
  }, [vocabularyWords, difficulty]);
  
  // Iniciar quiz
  const startQuiz = useCallback(() => {
    const newQuestions = generateQuestions();
    
    if (newQuestions.length === 0) {
      console.log('No se pudieron generar preguntas');
      return;
    }
    
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setTimeLeft(30); // 30 segundos por pregunta
    setGameStatus('playing');
  }, [generateQuestions]);
  
  // Seleccionar una respuesta
  const selectAnswer = (option: string) => {
    if (currentQuestionIndex >= questions.length) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.correctAnswer;
    
    // Actualizar la pregunta actual
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex] = {
      ...currentQuestion,
      selectedOption: option,
      isCorrect
    };
    
    setQuestions(updatedQuestions);
    
    // Actualizar puntuación
    if (isCorrect) {
      // Puntos base + bonus por tiempo restante
      const timeBonus = Math.floor(timeLeft / 3);
      const questionPoints = 50 + timeBonus;
      setScore(prev => prev + questionPoints);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setIncorrectAnswers(prev => prev + 1);
    }
    
    // Pasar a la siguiente pregunta después de un breve retraso
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };
  
  // La función handleNextQuestion ya está definida arriba con useCallback
  
  // Cambiar dificultad
  const handleDifficultyChange = (newDifficulty: keyof typeof DIFFICULTY_LEVELS) => {
    if (gameStatus === 'playing') {
      // Confirmar cambio durante el juego
      if (!window.confirm('¿Estás seguro de cambiar la dificultad? Se reiniciará el quiz.')) {
        return;
      }
    }
    
    setDifficulty(newDifficulty);
    setGameStatus('ready');
  };
  
  // Renderizar opciones de respuesta
  const renderOptions = (question: QuizQuestion) => {
    return question.options.map((option, index) => {
      // Determinar el estilo de la opción
      let optionClass = 'border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600';
      
      if (question.selectedOption !== null) {
        if (option === question.correctAnswer) {
          // Respuesta correcta
          optionClass = 'border border-green-500 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
        } else if (option === question.selectedOption) {
          // Respuesta incorrecta seleccionada
          optionClass = 'border border-red-500 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
        }
      }
      
      return (
        <button
          key={index}
          onClick={() => question.selectedOption === null && selectAnswer(option)}
          disabled={question.selectedOption !== null}
          className={`
            w-full p-3 rounded-md mb-2 text-left
            transition-colors duration-150
            ${optionClass}
          `}
        >
          <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
        </button>
      );
    });
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
            Quiz de Vocabulario
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
                Preguntas: <span className="font-medium">{DIFFICULTY_LEVELS[difficulty].questions}</span>
              </div>
            </div>
            
            {/* Puntuación */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {score} puntos
              </div>
              {gameStatus === 'playing' && (
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Tiempo: <span className="font-medium">{timeLeft}s</span>
                </div>
              )}
            </div>
            
            {/* Botones de acción */}
            <div className="flex gap-2">
              {gameStatus === 'ready' || gameStatus === 'results' ? (
                <button 
                  onClick={startQuiz} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
                >
                  {gameStatus === 'results' ? 'Jugar de nuevo' : 'Iniciar quiz'}
                </button>
              ) : gameStatus === 'playing' ? (
                <button 
                  onClick={() => setGameStatus('results')} 
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-md shadow-sm"
                >
                  Finalizar
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
              ¡Quiz de Vocabulario!
            </h2>
            <p className="text-blue-600 dark:text-blue-400 mb-4">
              Pon a prueba tu conocimiento con preguntas de opción múltiple sobre tu vocabulario.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Se han cargado {vocabularyWords.length} palabras de tu vocabulario.
            </p>
            <button 
              onClick={startQuiz} 
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md shadow-sm"
            >
              Iniciar quiz
            </button>
          </div>
        ) : gameStatus === 'results' ? (
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">
              Resultados del Quiz
            </h2>
            
            {/* Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{score}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Puntuación total</div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{correctAnswers}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Respuestas correctas</div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">{incorrectAnswers}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Respuestas incorrectas</div>
              </div>
            </div>
            
            {/* Detalles de las preguntas */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Detalle de preguntas
              </h3>
              
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div 
                    key={index}
                    className={`
                      p-3 rounded-md border
                      ${question.isCorrect === true 
                        ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                        : question.isCorrect === false
                          ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
                          : 'border-slate-200 dark:border-slate-700'}
                    `}
                  >
                    <div className="font-medium mb-2">{index + 1}. {question.questionText}</div>
                    
                    <div className="text-sm">
                      <div className="mb-1">
                        <span className="text-slate-500 dark:text-slate-400">Tu respuesta: </span>
                        <span className={`font-medium ${
                          question.isCorrect === true 
                            ? 'text-green-600 dark:text-green-400' 
                            : question.isCorrect === false
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-slate-600 dark:text-slate-400'
                        }`}>
                          {question.selectedOption || 'Sin respuesta'}
                        </span>
                      </div>
                      
                      {question.isCorrect === false && (
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">Respuesta correcta: </span>
                          <span className="font-medium text-green-600 dark:text-green-400">
                            {question.correctAnswer}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={startQuiz} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
              >
                Jugar de nuevo
              </button>
            </div>
          </div>
        ) : null}
        
        {/* Pregunta actual */}
        {gameStatus === 'playing' && questions.length > 0 && currentQuestionIndex < questions.length && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              {/* Progreso */}
              <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
                <span>Pregunta {currentQuestionIndex + 1} de {questions.length}</span>
                <span>Tiempo: {timeLeft}s</span>
              </div>
              
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-6">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                ></div>
              </div>
              
              {/* Pregunta */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  {questions[currentQuestionIndex].questionText}
                </h3>
                
                {/* No hay contexto adicional en este enfoque */}
                
                {/* Opciones */}
                <div className="space-y-2">
                  {renderOptions(questions[currentQuestionIndex])}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default QuizPage;
