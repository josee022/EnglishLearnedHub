import React, { useState } from 'react';
import { GrammarContent as GrammarContentType } from '../../types/grammar';

interface GrammarContentProps {
  content: GrammarContentType;
}

type TabType = 'formation' | 'uses' | 'examples' | 'time-expressions' | 'tips' | 'mistakes';

const GrammarContent: React.FC<GrammarContentProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<TabType>('formation');
  const [activeFormation, setActiveFormation] = useState<'affirmative' | 'negative' | 'question'>('affirmative');

  // Función para renderizar HTML desde string
  const renderHTML = (html: string) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const tabs = [
    { id: 'formation', label: '🔨 Formación', emoji: '🔨' },
    { id: 'uses', label: '🎯 Usos', emoji: '🎯' },
    { id: 'examples', label: '💬 Ejemplos', emoji: '💬' },
    { id: 'time-expressions', label: '⏰ Expresiones de tiempo', emoji: '⏰' },
    { id: 'tips', label: '💡 Consejos', emoji: '💡' },
    { id: 'mistakes', label: '❌ Errores comunes', emoji: '❌' }
  ];

  const formationTabs = [
    { id: 'affirmative', label: 'Afirmativa ✓' },
    { id: 'negative', label: 'Negativa ✗' },
    { id: 'question', label: 'Pregunta ?' }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
      {/* Cabecera con título e introducción */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-t-xl">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center bg-blue-500 text-white text-3xl rounded-full shadow-md">
            {content.introduction.emoji}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{content.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">{content.introduction.text}</p>
          </div>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="border-b border-slate-200 dark:border-slate-700 px-4 overflow-x-auto">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
              }`}
              onClick={() => setActiveTab(tab.id as TabType)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="p-6">
        {activeTab === 'formation' && (
          <div>
            <div className="mb-6 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg inline-flex">
              {formationTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeFormation === tab.id
                      ? 'bg-white dark:bg-slate-700 shadow text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setActiveFormation(tab.id as 'affirmative' | 'negative' | 'question')}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeFormation === 'affirmative' && renderHTML(content.formation.affirmative)}
            {activeFormation === 'negative' && renderHTML(content.formation.negative)}
            {activeFormation === 'question' && renderHTML(content.formation.question)}
          </div>
        )}

        {activeTab === 'uses' && (
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-300">{content.uses.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.uses.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <div className="bg-blue-50 dark:bg-blue-900/30 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-blue-700 dark:text-blue-300">{useCase.title}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-600 dark:text-slate-400 mb-3">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.examples.map((example, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-md">
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{example.english}</p>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{example.spanish}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.examples.map((example, index) => (
              <div 
                key={index}
                className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600"
              >
                <p className="text-slate-800 dark:text-slate-100 font-medium mb-1">{example.english}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{example.spanish}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'time-expressions' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.timeExpressions.map((expression, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm"
              >
                <p className="text-blue-600 dark:text-blue-400 font-bold mb-1">
                  {expression.word}
                </p>
                {expression.description && (
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {expression.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800/50"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center text-2xl text-amber-600 dark:text-amber-300 mr-4">
                    {tip.emoji || '💡'}
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">{tip.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'mistakes' && (
          <div className="space-y-4">
            {content.commonMistakes.map((mistake, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Incorrecto:</p>
                    <p className="text-red-600 dark:text-red-400 font-medium">{mistake.incorrect}</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Correcto:</p>
                    <p className="text-green-600 dark:text-green-400 font-medium">{mistake.correct}</p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-md">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Explicación:</p>
                    <p className="text-slate-700 dark:text-slate-300">{mistake.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GrammarContent;
