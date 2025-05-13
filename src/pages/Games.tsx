import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

const Games: React.FC = () => {
  // Datos de los juegos disponibles
  const gamesList = [
    {
      id: 'connections',
      title: 'Conexiones',
      description: 'Conecta cada palabra en inglés con su traducción en español arrastrando líneas entre ellas.',
      icon: '🔗',
      color: 'from-blue-500 to-indigo-600',
      status: 'disponible', // 'disponible' o 'próximamente'
    },
    {
      id: 'hangman',
      title: 'Ahorcado',
      description: 'Adivina la palabra oculta letra por letra antes de que se complete el dibujo.',
      icon: '🎯',
      color: 'from-green-500 to-teal-600',
      status: 'disponible',
    },
    {
      id: 'memory',
      title: 'Memory',
      description: 'Encuentra las parejas de palabras y sus traducciones en este juego de memoria.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-600',
      status: 'disponible',
    },
    {
      id: 'wordordering',
      title: 'Ordenar Letras',
      description: 'Ordena las letras para formar la palabra correcta en inglés a partir de su traducción.',
      icon: '🔀',
      color: 'from-teal-500 to-cyan-600',
      status: 'disponible',
    },
    {
      id: 'wordsearch',
      title: 'Sopa de Letras',
      description: 'Busca palabras ocultas en todas direcciones en una cuadrícula de letras.',
      icon: '🔍',
      color: 'from-amber-500 to-orange-600',
      status: 'disponible',
    },
    {
      id: 'quiz',
      title: 'Quiz de Vocabulario',
      description: 'Pon a prueba tu conocimiento con preguntas de opción múltiple sobre tu vocabulario.',
      icon: '❓',
      color: 'from-cyan-500 to-blue-600',
      status: 'próximamente',
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="relative mb-12 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 shadow-xl">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Juegos <span className="text-amber-300">Educativos</span>
            </h1>
            <p className="text-white text-opacity-90 text-lg md:text-xl max-w-3xl">
              Aprende inglés de forma divertida con nuestra colección de juegos interactivos.
              Refuerza tu vocabulario y mejora tus habilidades mientras te diviertes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Aprendizaje divertido
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Basado en tu vocabulario
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                100% gratuito
              </div>
            </div>
          </div>
        </div>

        {/* Grid de juegos */}
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Juegos disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {gamesList.map(game => (
            <div 
              key={game.id}
              className={`group relative p-6 rounded-xl shadow-lg border overflow-hidden transition-all duration-300 cursor-pointer 
                ${game.status === 'disponible' 
                  ? 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-800' 
                  : 'bg-white/80 border-slate-200 dark:bg-slate-800/80 dark:border-slate-700'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10 group-hover:opacity-15 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {game.title}
                  </h3>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-500 text-xl dark:bg-slate-700 dark:text-slate-300">
                    {game.icon}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {game.description}
                </p>
                
                {game.status === 'disponible' ? (
                  <Link 
                    to={`/games/${game.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Jugar ahora
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                ) : (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Próximamente
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección informativa */}
        <div className="bg-blue-50 dark:bg-slate-700/30 rounded-xl p-6 mb-10 border border-blue-100 dark:border-slate-600">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 text-2xl dark:bg-blue-900/50 dark:text-blue-300">
              💡
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">¿Cómo funcionan los juegos?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Nuestros juegos utilizan el vocabulario que has guardado en la aplicación para crear experiencias personalizadas de aprendizaje.
                Cuantas más palabras añadas a tu colección, más variados serán los juegos.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/vocabulary"
                  className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-500 dark:hover:bg-slate-700"
                >
                  Ir a mi vocabulario
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Games;
