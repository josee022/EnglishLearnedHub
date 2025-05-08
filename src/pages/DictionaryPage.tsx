import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { useSearchWordsApi } from '../hooks/useSearchWordsApi';
import DictionarySearch from '../components/dictionary/DictionarySearch';
import WordDetails from '../components/dictionary/WordDetails';

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

const DictionaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [localData, setLocalData] = useState<WordData | null>(null);
  const { data, isLoading, error } = useSearchWordsApi(searchTerm);
  
  // Sincronizar datos externos con estado local
  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Función para limpiar los resultados y volver al estado inicial
  const handleClear = () => {
    setSearchTerm('');
    setLocalData(null);
  };

  return (
    <Layout>
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Explorador de inglés</h1>
            <br />
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              Explora términos para entender su significado, pronunciación, ejemplos de uso y encontrar sinónimos. <br /> Incluye traducciones para palabras comunes.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-4 md:w-1/3 lg:w-1/4">
            <DictionarySearch onSearch={handleSearch} searchTerm={searchTerm} />
          </div>
        </div>
        
        <div className="w-full">
          {localData && (
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClear}
                className="px-4 py-2 text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-md transition-colors flex items-center space-x-1 border border-slate-200 dark:border-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Limpiar resultados</span>
              </button>
            </div>
          )}
          
          {isLoading && (
            <div className="flex justify-center p-8">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {error && (
            <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md">
              {error}
            </div>
          )}
          
          {localData && <WordDetails wordData={localData} />}
        </div>
      </div>
    </Layout>
  );
};

export default DictionaryPage;
