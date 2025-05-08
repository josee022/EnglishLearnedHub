import { GrammarContent } from '../../../types/grammar';
import { presentSimpleContent } from './presentSimple';

// Objeto que contiene todos los contenidos gramaticales indexados por ID
export const grammarContents: { [key: string]: GrammarContent } = {
  [presentSimpleContent.id]: presentSimpleContent,
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
