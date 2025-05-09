import { GrammarContent } from '../../../types/grammar';
import { presentSimpleContent } from './presentSimple';
import { presentContinuousContent } from './presentContinuous';
import { presentPerfectContent } from './presentPerfect';
import { presentPerfectContinuousContent } from './presentPerfectContinuous';

// Objeto que contiene todos los contenidos gramaticales indexados por ID
export const grammarContents: { [key: string]: GrammarContent } = {
  [presentSimpleContent.id]: presentSimpleContent,
  [presentContinuousContent.id]: presentContinuousContent,
  [presentPerfectContent.id]: presentPerfectContent,
  [presentPerfectContinuousContent.id]: presentPerfectContinuousContent,
  // Aquí se pueden añadir más tiempos verbales a medida que se vayan creando
};

// Función para obtener el contenido gramatical por ID
export const getGrammarContent = (id: string): GrammarContent | undefined => {
  return grammarContents[id];
};

// Funcion para verificar si un ID de contenido existe
export const hasGrammarContent = (id: string): boolean => {
  return !!grammarContents[id];
};
