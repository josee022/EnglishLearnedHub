import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Layout } from '../components/layout/Layout';
import GrammarContent from '../components/grammar/GrammarContent';
import { getGrammarContent, hasGrammarContent } from '../components/grammar/content';

// Tipo para nuestros datos de gramática
type GrammarCategory = {
  id: string;
  title: string;
  sections: GrammarSection[];
};

type GrammarSection = {
  id: string;
  title: string;
  content: string; // Esto contendrá el título por ahora, luego lo expandiremos
};

// Añadimos keyframes para animaciones
const Grammar: React.FC = () => {
  // Estado para almacenar la categoría y sección seleccionadas
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Función para restablecer selecciones
  const resetSelections = () => {
    setSelectedCategory(null);
    setSelectedSection(null);
  };

  // Nuestras categorías de gramática (bloques principales)
  const grammarCategories: GrammarCategory[] = [
    {
      id: 'present',
      title: 'Tiempos Presentes',
      sections: [
        { id: 'simple-present', title: 'Present Simple', content: 'Contenido del Present Simple' },
        { id: 'present-continuous', title: 'Present Continuous', content: 'Contenido del Present Continuous' },
        { id: 'present-perfect', title: 'Present Perfect', content: 'Contenido del Present Perfect' },
        { id: 'present-perfect-continuous', title: 'Present Perfect Continuous', content: 'Contenido del Present Perfect Continuous' },
      ]
    },
    {
      id: 'past',
      title: 'Tiempos Pasados',
      sections: [
        { id: 'simple-past', title: 'Past Simple', content: 'Contenido del Past Simple' },
        { id: 'past-continuous', title: 'Past Continuous', content: 'Contenido del Past Continuous' },
        { id: 'past-perfect', title: 'Past Perfect', content: 'Contenido del Past Perfect' },
        { id: 'past-perfect-continuous', title: 'Past Perfect Continuous', content: 'Contenido del Past Perfect Continuous' },
      ]
    },
    {
      id: 'future',
      title: 'Tiempos Futuros',
      sections: [
        { id: 'future-simple', title: 'Future Simple (will)', content: 'Contenido del Future Simple' },
        { id: 'going-to', title: 'Going To', content: 'Contenido del Going To' },
        { id: 'future-continuous', title: 'Future Continuous', content: 'Contenido del Future Continuous' },
        { id: 'future-perfect', title: 'Future Perfect', content: 'Contenido del Future Perfect' },
        { id: 'future-perfect-continuous', title: 'Future Perfect Continuous', content: 'Contenido del Future Perfect Continuous' },
      ]
    },
    {
      id: 'conditionals',
      title: 'Condicionales',
      sections: [
        { id: 'zero-conditional', title: 'Zero Conditional', content: 'Contenido del Zero Conditional' },
        { id: 'first-conditional', title: 'First Conditional', content: 'Contenido del First Conditional' },
        { id: 'second-conditional', title: 'Second Conditional', content: 'Contenido del Second Conditional' },
        { id: 'third-conditional', title: 'Third Conditional', content: 'Contenido del Third Conditional' },
        { id: 'mixed-conditionals', title: 'Mixed Conditionals', content: 'Contenido de los Mixed Conditionals' },
      ]
    },
    {
      id: 'passive',
      title: 'Voz Pasiva',
      sections: [
        { id: 'passive-present', title: 'Voz Pasiva en Presente', content: 'Contenido de la Voz Pasiva en Presente' },
        { id: 'passive-past', title: 'Voz Pasiva en Pasado', content: 'Contenido de la Voz Pasiva en Pasado' },
        { id: 'passive-future', title: 'Voz Pasiva en Futuro', content: 'Contenido de la Voz Pasiva en Futuro' },
        { id: 'passive-modals', title: 'Voz Pasiva con Modales', content: 'Contenido de la Voz Pasiva con Modales' },
      ]
    },
    {
      id: 'reported-speech',
      title: 'Reported Speech',
      sections: [
        { id: 'statements', title: 'Afirmaciones', content: 'Contenido de Afirmaciones en Reported Speech' },
        { id: 'questions', title: 'Preguntas', content: 'Contenido de Preguntas en Reported Speech' },
        { id: 'commands', title: 'Órdenes', content: 'Contenido de Órdenes en Reported Speech' },
        { id: 'time-changes', title: 'Cambios Temporales', content: 'Contenido sobre Cambios Temporales en Reported Speech' },
      ]
    },
    {
      id: 'modals',
      title: 'Verbos Modales',
      sections: [
        { id: 'can-could', title: 'Can / Could', content: 'Contenido de Can / Could' },
        { id: 'may-might', title: 'May / Might', content: 'Contenido de May / Might' },
        { id: 'must-have-to', title: 'Must / Have to', content: 'Contenido de Must / Have to' },
        { id: 'should-ought-to', title: 'Should / Ought to', content: 'Contenido de Should / Ought to' },
      ]
    },
    {
      id: 'advanced',
      title: 'Estructuras Avanzadas',
      sections: [
        { id: 'wish-if-only', title: 'Wish / If only', content: 'Contenido de Wish / If only' },
        { id: 'used-to-would', title: 'Used to / Would', content: 'Contenido de Used to / Would' },
        { id: 'gerunds-infinitives', title: 'Gerundios e Infinitivos', content: 'Contenido de Gerundios e Infinitivos' },
        { id: 'relative-clauses', title: 'Cláusulas Relativas', content: 'Contenido de Cláusulas Relativas' },
      ]
    },
  ];

  // Encontrar la sección seleccionada para mostrar su contenido
  const getSelectedSectionContent = () => {
    if (!selectedCategory || !selectedSection) return null;

    const category = grammarCategories.find(cat => cat.id === selectedCategory);
    if (!category) return null;

    const section = category.sections.find(sec => sec.id === selectedSection);
    return section ? section.content : null;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="relative mb-12 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 shadow-xl">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Guía de Gramática <span className="text-amber-300">Inglesa</span>
            </h1>
            <p className="text-white text-opacity-90 text-lg md:text-xl max-w-3xl">
              Esta sección te ofrece un recorrido completo por la gramática inglesa, con explicaciones claras, 
              ejemplos prácticos, trucos útiles y consejos para dominar cada estructura.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Conceptos claros
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Ejemplos prácticos
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Guía completa
              </div>
            </div>
          </div>
        </div>

      {/* Navegación y filtros */}
      <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Explora la gramática</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Selecciona una categoría para comenzar tu aprendizaje</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {selectedSection ? (
              <Button 
                onClick={resetSelections}
                variant="outline"
                className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-300 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-700 inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a categorías
              </Button>
            ) : (
              <Button 
                onClick={resetSelections}
                variant="primary"
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Todas las categorías
              </Button>
            )}
          </div>
        </div>
      </div>

      {!selectedSection ? (
        <>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Categorías gramaticales</h2>
          {/* Grid de categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {grammarCategories.map(category => (
              <div 
                key={category.id}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
                className={`group relative p-6 rounded-xl shadow-lg border overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id 
                    ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-500 ring-opacity-50 dark:bg-slate-700 dark:border-blue-500' 
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-800'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {category.title}
                    </h3>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${selectedCategory === category.id ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'}`}>
                      {selectedCategory === category.id ? 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" /></svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                      }
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {category.sections.length} temas disponibles
                  </p>
                
                  {/* Mostrar secciones si la categoría está seleccionada */}
                  {selectedCategory === category.id && (
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-inner border border-slate-200 dark:border-slate-600">
                      <ul className="divide-y divide-slate-200 dark:divide-slate-700">
                        {category.sections.map(section => (
                          <li key={section.id}>
                            <button
                              className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                                selectedSection === section.id
                                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-blue-400'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSection(section.id);
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {section.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* Contenido de la sección seleccionada */}
      {selectedSection && (
        <div className="max-w-7xl mx-auto">
          {hasGrammarContent(selectedSection) ? (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {grammarCategories.find(cat => cat.id === selectedCategory)?.title || ""}
                  </span>
                </div>
                <Button 
                  onClick={resetSelections}
                  variant="outline"
                  className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a categorías
                </Button>
              </div>
              
              {/* Componente de contenido gramatical */}
              <GrammarContent content={getGrammarContent(selectedSection)!} />
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
              {/* Encabezado de la sección */}
              <div className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {grammarCategories
                      .find(cat => cat.id === selectedCategory)
                      ?.sections.find(sec => sec.id === selectedSection)?.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {grammarCategories.find(cat => cat.id === selectedCategory)?.title || ""}
                  </span>
                </div>
                
                {/* Indicadores de navegación y aprendizaje */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="bg-slate-100 px-3 py-1 rounded-md text-slate-700 text-sm inline-flex items-center dark:bg-slate-700 dark:text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Teoría y Ejemplos
                  </div>
                  <div className="bg-green-100 px-3 py-1 rounded-md text-green-700 text-sm inline-flex items-center dark:bg-green-900 dark:text-green-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Trucos y Consejos
                  </div>
                </div>
              </div>
              
              {/* Contenido de la sección */}
              <div className="prose prose-slate prose-lg dark:prose-invert max-w-none">
                <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-md mb-8 dark:bg-slate-700 dark:border-blue-400">
                  <p className="font-medium text-blue-600 dark:text-blue-300">
                    Esta sección incluirá explicaciones detalladas, ejemplos prácticos y trucos útiles para dominar:
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300 mt-2">
                    {getSelectedSectionContent()}
                  </p>
                </div>
                
                {/* Mensaje de contenido en desarrollo */}
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full text-amber-600 text-xl mr-4 dark:bg-amber-800 dark:text-amber-300">
                      🚧
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-2">Contenido en desarrollo</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        El contenido detallado de esta sección se está desarrollando para ofrecerte la mejor experiencia de aprendizaje posible. Puedes explorar el Present Simple que ya está disponible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Botones de navegación */}
              <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between">
                <Button 
                  onClick={resetSelections}
                  variant="outline"
                  className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a categorías
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      </div>
    </Layout>
  );
};

export default Grammar;
