import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Aprende inglés de forma <span className="text-blue-600 dark:text-blue-400">eficiente y personalizada</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              English Learner Hub te ayuda a mejorar tu inglés con flashcards, quizzes y seguimiento de progreso adaptados a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg">Comenzar Gratis</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">Saber más</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/hero-image.svg" 
              alt="English Learning Illustration" 
              className="rounded-lg shadow-xl"
              onError={(e) => {
                // Fallback si la imagen no existe
                e.currentTarget.src = "https://source.unsplash.com/random/800x600/?study";
              }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir English Learner Hub?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vocabulario Personalizado</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Crea y organiza tu propio vocabulario con notas, ejemplos y etiquetas para un aprendizaje más efectivo.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flashcards Inteligentes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sistema de repaso espaciado que se adapta a tu ritmo de aprendizaje para ayudarte a recordar palabras a largo plazo.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguimiento de Progreso</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Visualiza tu aprendizaje con estadísticas claras y motivadoras que te ayudarán a mantenerte constante.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 my-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¡Comienza tu viaje de aprendizaje hoy!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            English Learner Hub es completamente gratuito. Crea tu cuenta y empieza a mejorar tu inglés de forma efectiva.
          </p>
          <Link to="/register">
            <Button size="lg">Crear cuenta gratis</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
