// Tipos para la estructura de contenido gramatical
export interface Example {
  english: string;
  spanish: string;
}

export interface TimeIndicator {
  word: string;
  description?: string;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface GrammarContent {
  id: string;
  title: string;
  introduction: {
    text: string;
    emoji: string;
  };
  formation: {
    affirmative: string;
    negative: string;
    question: string;
    examples?: Example[];
  };
  uses: {
    description: string;
    useCases: {
      title: string;
      description: string;
      examples: Example[];
    }[];
  };
  examples: Example[];
  timeExpressions: TimeIndicator[];
  tips: {
    title: string;
    content: string;
    emoji?: string;
  }[];
  commonMistakes: CommonMistake[];
}
