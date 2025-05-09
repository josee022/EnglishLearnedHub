import { GrammarContent } from '../../../types/grammar';
import { presentSimpleContent } from './presentSimple';
import { presentContinuousContent } from './presentContinuous';
import { presentPerfectContent } from './presentPerfect';
import { presentPerfectContinuousContent } from './presentPerfectContinuous';
import { pastSimpleContent } from './pastSimple';
import { pastContinuousContent } from './pastContinuous';
import { pastPerfectContent } from './pastPerfect';
import { pastPerfectContinuousContent } from './pastPerfectContinuous';
import { futureSimpleContent } from './futureSimple';
import { goingToContent } from './goingTo';
import { futureContinuousContent } from './futureContinuous';
import { futurePerfectContent } from './futurePerfect';
import { futurePerfectContinuousContent } from './futurePerfectContinuous';
import { zeroConditionalContent } from './zeroConditional';
import { firstConditionalContent } from './firstConditional';
import { secondConditionalContent } from './secondConditional';
import { thirdConditionalContent } from './thirdConditional';
import { mixedConditionalContent } from './mixedConditional';
import { passivePresentContent } from './passivePresent';
import { passivePastContent } from './passivePast';
import { passiveFutureContent } from './passiveFuture';
import { passiveModalsContent } from './passiveModals';
import { statementsContent } from './statements';
import { questionsContent } from './questions';
import { commandsContent } from './commands';
import { timeChangesContent } from './time-changes';

// Objeto que contiene todos los contenidos gramaticales indexados por ID
export const grammarContents: { [key: string]: GrammarContent } = {
  // Tiempos verbales
  [presentSimpleContent.id]: presentSimpleContent,
  [presentContinuousContent.id]: presentContinuousContent,
  [presentPerfectContent.id]: presentPerfectContent,
  [presentPerfectContinuousContent.id]: presentPerfectContinuousContent,
  [pastSimpleContent.id]: pastSimpleContent,
  [pastContinuousContent.id]: pastContinuousContent,
  [pastPerfectContent.id]: pastPerfectContent,
  [pastPerfectContinuousContent.id]: pastPerfectContinuousContent,
  [futureSimpleContent.id]: futureSimpleContent,
  [goingToContent.id]: goingToContent,
  [futureContinuousContent.id]: futureContinuousContent,
  [futurePerfectContent.id]: futurePerfectContent,
  [futurePerfectContinuousContent.id]: futurePerfectContinuousContent,
  
  // Condicionales
  [zeroConditionalContent.id]: zeroConditionalContent,
  [firstConditionalContent.id]: firstConditionalContent,
  [secondConditionalContent.id]: secondConditionalContent,
  [thirdConditionalContent.id]: thirdConditionalContent,
  [mixedConditionalContent.id]: mixedConditionalContent,
  
  // Voz Pasiva
  [passivePresentContent.id]: passivePresentContent,
  [passivePastContent.id]: passivePastContent,
  [passiveFutureContent.id]: passiveFutureContent,
  [passiveModalsContent.id]: passiveModalsContent,
  
  // Reported Speech
  [statementsContent.id]: statementsContent,
  [questionsContent.id]: questionsContent,
  [commandsContent.id]: commandsContent,
  [timeChangesContent.id]: timeChangesContent,
  // Aquí se pueden añadir más estructuras gramaticales a medida que se vayan creando
};

// Función para obtener el contenido gramatical por ID
export const getGrammarContent = (id: string): GrammarContent | undefined => {
  return grammarContents[id];
};

// Funcion para verificar si un ID de contenido existe
export const hasGrammarContent = (id: string): boolean => {
  return !!grammarContents[id];
};
