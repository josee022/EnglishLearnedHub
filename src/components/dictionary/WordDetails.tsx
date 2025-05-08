import React, { useState } from 'react';

interface WordDefinition {
  definition: string;
  partOfSpeech: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface WordData {
  word: string;
  phonetic?: string;
  phonetics?: {
    text?: string;
    audio?: string;
  }[];
  definitions: WordDefinition[];
  sourceUrls?: string[];
}

interface WordDetailsProps {
  wordData: WordData;
}

// Función para traducir las categorías gramaticales
const translatePartOfSpeech = (pos: string): string => {
  const translations: {[key: string]: string} = {
    'noun': 'Sustantivo',
    'verb': 'Verbo',
    'adjective': 'Adjetivo',
    'adverb': 'Adverbio',
    'pronoun': 'Pronombre',
    'preposition': 'Preposición',
    'conjunction': 'Conjunción',
    'interjection': 'Interjección',
    'determiner': 'Determinante',
    'article': 'Artículo'
  };
  
  return translations[pos.toLowerCase()] || pos;
};

// Traductor simple para palabras comunes
const translateWord = (word: string): string | null => {
  // Base de datos simplificada de traducciones
  const commonTranslations: {[key: string]: string} = {
    // Sustantivos comunes
    'house': 'casa',
    'car': 'coche',
    'dog': 'perro',
    'cat': 'gato',
    'book': 'libro',
    'time': 'tiempo',
    'person': 'persona',
    'year': 'año',
    'day': 'dia',
    'world': 'mundo',
    'life': 'vida',
    'hand': 'mano',
    'work': 'trabajo/trabajar', // Puede ser sustantivo o verbo
    'night': 'noche',

    // Verbos comunes
    'go': 'ir',
    'come': 'venir',
    'take': 'tomar',
    'make': 'hacer',
    'see': 'ver',
    'know': 'saber/conocer',
    'get': 'obtener',
    'find': 'encontrar',
    'give': 'dar',
    'tell': 'decir',
    'call': 'llamar',
    'ask': 'preguntar',

    // Adjetivos comunes
    'good': 'bueno',
    'new': 'nuevo',
    'first': 'primero',
    'last': 'último',
    'long': 'largo',
    'great': 'gran/grandioso',
    'little': 'pequeño',
    'own': 'propio',
    'big': 'grande',
    'high': 'alto',
    'different': 'diferente',
    'small': 'pequeño',
    'large': 'grande',
    'important': 'importante',
    
    // Otras palabras
    'example': 'ejemplo',
    'synonym': 'sinónimo',
    'antonym': 'antónimo',
    'definition': 'definición',
    'pronunciation': 'pronunciación',
  };
  
  return commonTranslations[word.toLowerCase()] || null;
};

const WordDetails: React.FC<WordDetailsProps> = ({ wordData }) => {
  const [showTranslations, setShowTranslations] = useState(true);

  // Obtener la posible traducción de la palabra principal
  const mainWordTranslation = translateWord(wordData.word);

  if (!wordData || !wordData.definitions || wordData.definitions.length === 0) {
    return (
      <div className="p-4 bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-md">
        No se encontraron resultados para esta palabra.
      </div>
    );
  }

  // Agrupamos las definiciones por tipo gramatical para mejor organización
  const definitionsByType: {[key: string]: WordDefinition[]} = {};
  
  wordData.definitions.forEach(def => {
    if (!definitionsByType[def.partOfSpeech]) {
      definitionsByType[def.partOfSpeech] = [];
    }
    definitionsByType[def.partOfSpeech].push(def);
  });

  // Función para obtener traducciones de ejemplos, sinónimos y antónimos
  const getTranslatedWordTag = (word: string) => {
    const translation = translateWord(word);
    if (translation && showTranslations) {
      return (
        <span className="text-xs italic ml-1 text-slate-500 dark:text-slate-400">({translation})</span>
      );
    }
    return null;
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
      {/* CONTROL DE TRADUCCIONES */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setShowTranslations(!showTranslations)}
          className={`px-3 py-1 text-xs rounded-full transition-colors ${showTranslations ? 'bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}
        >
          {showTranslations ? 'Traducciones: ON' : 'Traducciones: OFF'}
        </button>
      </div>
      
      {/* SECCIÓN DE ENCABEZADO */}
      <div className="mb-6 pb-4 border-b dark:border-slate-700">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{wordData.word}</h2>
          {mainWordTranslation && showTranslations && (
            <span className="ml-2 text-lg text-slate-500 dark:text-slate-400 italic">({mainWordTranslation})</span>
          )}
          
          {/* Pronunciación fonética */}
          {wordData.phonetic && (
            <span className="text-slate-500 dark:text-slate-400 italic text-lg">
              {wordData.phonetic}
            </span>
          )}
        </div>
        
        {/* Audio de pronunciación si está disponible */}
        {wordData.phonetics && wordData.phonetics.some(p => p.audio) && (
          <div className="mt-3 flex items-center">
            <button 
              onClick={() => {
                const audioUrl = wordData.phonetics?.find(p => p.audio)?.audio;
                if (audioUrl) {
                  const audio = new Audio(audioUrl);
                  audio.play();
                }
              }}
              className="flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-800 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
              title="Escuchar pronunciación"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-300">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            </button>
            <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">Escuchar pronunciación</span>
          </div>
        )}
      </div>

      {/* SECCIÓN DE DEFINICIONES POR TIPO GRAMATICAL */}
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/20">
          <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-1">Definiciones</h3>
          <p className="text-sm text-blue-600/70 dark:text-blue-400/70">Significados y usos de la palabra <span className="font-semibold">"{wordData.word}"</span></p>
        </div>
        
        {Object.entries(definitionsByType).map(([partOfSpeech, definitions], typeIndex) => (
          <div key={typeIndex} className="bg-white dark:bg-slate-800/90 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="flex flex-wrap items-center text-md font-semibold text-blue-600 dark:text-blue-400 mb-3 pb-2 border-b dark:border-slate-700">
              <span className="inline-block px-3 py-1 mr-2 mb-1 bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-300 rounded-md">
                {translatePartOfSpeech(partOfSpeech)}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">({partOfSpeech})</span>
            </h4>
            
            <div className="space-y-5">
              {definitions.map((def, defIndex) => (
                <div key={defIndex} className="pl-1 relative">
                  <div className="flex">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400 rounded-full font-medium text-sm">{defIndex + 1}</span>
                    <p className="text-slate-700 dark:text-slate-300">{def.definition}</p>
                  </div>
                  
                  {/* Ejemplo de uso */}
                  {def.example && (
                    <div className="mt-3 ml-8 bg-amber-50 dark:bg-amber-900/10 p-3 rounded-md border-l-4 border-amber-300 dark:border-amber-700">
                      <h5 className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-1">Ejemplo:</h5>
                      <p className="text-slate-600 dark:text-slate-400 italic">
                        "{def.example}"
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-3 ml-8 flex flex-wrap gap-4">
                    {/* Sinónimos */}
                    {def.synonyms && def.synonyms.length > 0 && (
                      <div className="flex-1 min-w-[200px]">
                        <h5 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 pb-1 border-b border-slate-100 dark:border-slate-700">Sinónimos:</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {def.synonyms.map((syn, i) => (
                            <div key={i} className="flex items-center">
                              <span className="inline-block px-2 py-1 text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md">
                                {syn}
                              </span>
                              {getTranslatedWordTag(syn)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Antónimos */}
                    {def.antonyms && def.antonyms.length > 0 && (
                      <div className="flex-1 min-w-[200px]">
                        <h5 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 pb-1 border-b border-slate-100 dark:border-slate-700">Antónimos:</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {def.antonyms.map((ant, i) => (
                            <div key={i} className="flex items-center">
                              <span className="inline-block px-2 py-1 text-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md">
                                {ant}
                              </span>
                              {getTranslatedWordTag(ant)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* SECCIÓN DE FUENTES */}
      {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
        <div className="mt-6 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-md font-bold text-slate-700 dark:text-slate-200 mb-2">Fuentes de referencia</h3>
          <ul className="mt-1 space-y-1 pl-4">
            {wordData.sourceUrls.map((url, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-blue-400">•</span>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-blue-500 hover:underline break-all"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordDetails;
