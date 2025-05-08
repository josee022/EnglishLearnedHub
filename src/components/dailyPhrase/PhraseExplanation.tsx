import React from 'react';

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags?: string[];
}

interface PhraseExplanationProps {
  quote: Quote;
}

const PhraseExplanation: React.FC<PhraseExplanationProps> = ({ quote }) => {
  // En una implementación real, esta información vendría de una API o análisis
  // Aquí simulamos un análisis básico de la frase
  const getKeyWords = (content: string): string[] => {
    // Este es un análisis simple que extrae palabras de más de 5 letras
    // En una versión real, usaríamos NLP o un diccionario para identificar palabras clave
    const words = content.match(/\b\w{5,}\b/g) || [];
    return [...new Set(words)].slice(0, 5);
  };

  const keyWords = getKeyWords(quote.content);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">Explicación y aprendizaje</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Análisis gramatical</h4>
          <p className="text-slate-600 dark:text-slate-400">
            La frase está estructurada usando {quote.content.split(' ').length} palabras y presenta 
            construcciones típicas del inglés {quote.tags && quote.tags.length > 0 ? `relacionadas con ${quote.tags.join(', ')}` : ''}.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Vocabulario destacado</h4>
          <div className="space-y-2">
            {keyWords.length > 0 ? (
              keyWords.map((word, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-700 rounded-md p-3">
                  <p className="font-medium text-slate-800 dark:text-slate-200">{word}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    • Definición: Esta palabra se utiliza para expresar... (en una implementación real, obtendríamos esta información de una API de diccionario)
                  </p>
                </div>
              ))
            ) : (
              <p className="text-slate-600 dark:text-slate-400">
                No se identificaron palabras clave específicas en esta frase.
              </p>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Contexto cultural</h4>
          <p className="text-slate-600 dark:text-slate-400">
            {quote.author} es conocido por sus contribuciones en el ámbito de 
            {quote.tags && quote.tags.length > 0 ? ` ${quote.tags.join(', ')}` : ' la literatura y filosofía'}.
            Esta frase refleja su pensamiento sobre la vida y la sociedad.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">¿Cómo aplicar esta frase?</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Puedes utilizar esta expresión en conversaciones sobre 
            {quote.tags && quote.tags.length > 0 ? ` ${quote.tags.join(', ')}` : ' temas filosóficos o reflexivos'}.
            Es especialmente útil cuando quieres expresar una idea profunda de manera concisa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhraseExplanation;
