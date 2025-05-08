import { useState, useEffect } from 'react';

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

// Interfaces para la respuesta de Dictionary API
interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
  }[];
  synonyms?: string[];
  antonyms?: string[];
}

interface DictionaryApiResponse {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  meanings: Meaning[];
  sourceUrls?: string[];
}

export const useSearchWordsApi = (searchTerm: string) => {
  const [data, setData] = useState<WordData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) {
        setData(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // URL de la Dictionary API (completamente gratuita, sin API key)
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(searchTerm)}`;
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No se encontró la palabra. Verifica la ortografía o intenta con otra palabra.');
          }
          throw new Error('Error al buscar la palabra');
        }

        const result = await response.json();
        
        // La API devuelve un array, tomamos el primer resultado
        const apiResponse = result[0] as DictionaryApiResponse;
        
        // Transformamos la respuesta al formato que nuestra aplicación espera
        const allDefinitions: WordDefinition[] = [];
        
        // Extraemos todas las definiciones de todos los significados
        apiResponse.meanings.forEach(meaning => {
          meaning.definitions.forEach(def => {
            allDefinitions.push({
              definition: def.definition,
              partOfSpeech: meaning.partOfSpeech,
              example: def.example,
              synonyms: def.synonyms || meaning.synonyms,
              antonyms: def.antonyms || meaning.antonyms
            });
          });
        });
        
        // Construimos el objeto WordData
        const wordData: WordData = {
          word: apiResponse.word,
          phonetic: apiResponse.phonetic,
          phonetics: apiResponse.phonetics,
          definitions: allDefinitions,
          sourceUrls: apiResponse.sourceUrls
        };

        setData(wordData);
      } catch (error) {
        setError('No se pudo obtener información para esta palabra. Por favor, intenta con otra palabra o revisa tu conexión a internet.');
        console.error('Error fetching word data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Solo realizar la búsqueda si hay un término de búsqueda
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return { data, isLoading, error };
};
