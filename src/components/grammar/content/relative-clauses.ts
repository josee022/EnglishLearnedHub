import { GrammarContent } from '../../../types/grammar';

export const relativeClausesContent: GrammarContent = {
  id: 'relative-clauses',
  title: 'Cláusulas Relativas',
  introduction: {
    text: 'Las cláusulas relativas son oraciones subordinadas que proporcionan información adicional sobre un sustantivo o pronombre (el antecedente). Se introducen mediante pronombres relativos (who, which, that, whose, whom) o adverbios relativos (where, when, why). Hay dos tipos principales: cláusulas relativas especificativas (defining) y explicativas (non-defining), cada una con reglas específicas de uso y puntuación.',
    emoji: '🔄'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Cláusulas relativas especificativas (defining relative clauses)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Para referirse a personas</p>
            <p>The woman <span class="text-green-600 dark:text-green-400 font-bold">who/that lives</span> next door is a doctor.</p>
            <p>The man <span class="text-green-600 dark:text-green-400 font-bold">who/that I met</span> yesterday is from Spain.</p>
            <p>The people <span class="text-green-600 dark:text-green-400 font-bold">who/that work</span> here are very friendly.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Para referirse a cosas/animales</p>
            <p>The book <span class="text-green-600 dark:text-green-400 font-bold">which/that I'm reading</span> is very interesting.</p>
            <p>The car <span class="text-green-600 dark:text-green-400 font-bold">which/that was stolen</span> has been found.</p>
            <p>The house <span class="text-green-600 dark:text-green-400 font-bold">which/that they bought</span> last year is beautiful.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Características de las cláusulas especificativas:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>No llevan comas que las separen del resto de la oración</li>
            <li>Proporcionan información esencial para identificar al antecedente</li>
            <li>El pronombre relativo <strong>that</strong> puede usarse tanto para personas como para cosas</li>
            <li>El pronombre relativo puede omitirse cuando es el objeto de la cláusula: "The book (that) I'm reading"</li>
            <li>No se puede omitir el pronombre relativo cuando es el sujeto: "The book that/which is on the table"</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Cláusulas relativas explicativas (non-defining relative clauses)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Para referirse a personas</p>
            <p>My brother, <span class="text-red-600 dark:text-red-400 font-bold">who lives in London</span>, is coming to visit.</p>
            <p>Dr. Smith, <span class="text-red-600 dark:text-red-400 font-bold">whom I consulted yesterday</span>, recommended this treatment.</p>
            <p>John, <span class="text-red-600 dark:text-red-400 font-bold">whose car was stolen</span>, has reported it to the police.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Para referirse a cosas/lugares</p>
            <p>Paris, <span class="text-red-600 dark:text-red-400 font-bold">which is the capital of France</span>, is famous for its architecture.</p>
            <p>His new book, <span class="text-red-600 dark:text-red-400 font-bold">which I haven't read yet</span>, has received great reviews.</p>
            <p>My house, <span class="text-red-600 dark:text-red-400 font-bold">which was built in 1980</span>, needs some repairs.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Características de las cláusulas explicativas:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Siempre van entre comas, ya que proporcionan información adicional no esencial</li>
            <li>El pronombre relativo <strong>never</strong> puede omitirse</li>
            <li>No se puede usar <strong>that</strong> en lugar de <strong>which</strong> o <strong>who</strong></li>
            <li>Proporcionan información extra sobre un antecedente ya identificado</li>
            <li>Si se eliminaran, la oración principal seguiría teniendo sentido completo</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Casos especiales y otros pronombres/adverbios relativos</p>
        <div class="grid grid-cols-1 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Otros pronombres y adverbios relativos</p>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Whose (posesión):</p>
              <p>The woman <span class="text-purple-600 dark:text-purple-400 font-bold">whose car was stolen</span> called the police. (especificativa)</p>
              <p>Dr. Johnson, <span class="text-purple-600 dark:text-purple-400 font-bold">whose research is revolutionary</span>, won the Nobel Prize. (explicativa)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Where (lugar):</p>
              <p>The house <span class="text-purple-600 dark:text-purple-400 font-bold">where I grew up</span> has been demolished. (especificativa)</p>
              <p>Paris, <span class="text-purple-600 dark:text-purple-400 font-bold">where the Eiffel Tower is located</span>, is a beautiful city. (explicativa)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">When (tiempo):</p>
              <p>I'll never forget the day <span class="text-purple-600 dark:text-purple-400 font-bold">when we first met</span>. (especificativa)</p>
              <p>Last summer, <span class="text-purple-600 dark:text-purple-400 font-bold">when we visited Italy</span>, was the best vacation ever. (explicativa)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Why (razón):</p>
              <p>That's the reason <span class="text-purple-600 dark:text-purple-400 font-bold">why I didn't come</span> to the party. (especificativa)</p>
              <p>His resignation, <span class="text-purple-600 dark:text-purple-400 font-bold">why the company is in trouble</span>, was unexpected. (explicativa - menos común)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Whom (objeto - formal):</p>
              <p>The person <span class="text-purple-600 dark:text-purple-400 font-bold">whom you're looking for</span> left an hour ago. (especificativa)</p>
              <p>Professor Wilson, <span class="text-purple-600 dark:text-purple-400 font-bold">whom I respect greatly</span>, will give a lecture tomorrow. (explicativa)</p>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Resumen de usos principales:</p>
          <div class="grid grid-cols-1 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Who/That</strong>: para personas (sujeto u objeto)</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Whom</strong>: para personas (solo como objeto, uso formal)</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Which/That</strong>: para cosas, animales, conceptos</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Whose</strong>: para expresar posesión (personas o cosas)</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Where</strong>: para lugares (equivale a "en/en el que/donde")</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>When</strong>: para tiempo (equivale a "cuando/en el que")</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Why</strong>: para razones (equivale a "por lo que/por eso")</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "The woman who works with my father is very nice.", spanish: "La mujer que trabaja con mi padre es muy agradable." },
      { english: "The movie which won the Oscar was fantastic.", spanish: "La película que ganó el Óscar fue fantástica." },
      { english: "My brother, who lives in Australia, is visiting next month.", spanish: "Mi hermano, que vive en Australia, nos visitará el próximo mes." },
      { english: "This is the house where I grew up.", spanish: "Esta es la casa donde crecí." }
    ]
  },
  uses: {
    description: "Las cláusulas relativas son herramientas fundamentales para construir oraciones más complejas y proporcionar información adicional sobre sustantivos. Entender la diferencia entre cláusulas especificativas y explicativas es clave para usarlas correctamente.",
    useCases: [
      {
        title: "Definir o identificar personas/cosas (especificativas) 🎯",
        description: "Las cláusulas relativas especificativas ayudan a identificar exactamente de qué o quién estamos hablando.",
        examples: [
          { english: "The woman who called yesterday wanted to speak to you.", spanish: "La mujer que llamó ayer quería hablar contigo." },
          { english: "I don't like books that have sad endings.", spanish: "No me gustan los libros que tienen finales tristes." },
          { english: "This is the house where I was born.", spanish: "Esta es la casa donde nací." }
        ]
      },
      {
        title: "Añadir información extra (explicativas) 📝",
        description: "Las cláusulas explicativas proporcionan información adicional no esencial para identificar al antecedente.",
        examples: [
          { english: "My father, who is 65, still goes jogging every morning.", spanish: "Mi padre, que tiene 65 años, todavía sale a correr todas las mañanas." },
          { english: "Paris, which is the capital of France, attracts millions of tourists.", spanish: "París, que es la capital de Francia, atrae a millones de turistas." },
          { english: "Her latest book, which I just finished reading, is a masterpiece.", spanish: "Su último libro, que acabo de terminar de leer, es una obra maestra." }
        ]
      },
      {
        title: "Combinar oraciones para mayor fluidez 🔄",
        description: "Las cláusulas relativas permiten combinar información en una sola oración de manera elegante.",
        examples: [
          { english: "She lives in a house. The house was built in 1920. → She lives in a house which was built in 1920.", spanish: "Ella vive en una casa. La casa fue construida en 1920. → Ella vive en una casa que fue construida en 1920." },
          { english: "I met a woman. She works for NASA. → I met a woman who works for NASA.", spanish: "Conocí a una mujer. Ella trabaja para la NASA. → Conocí a una mujer que trabaja para la NASA." },
          { english: "We visited Rome. Rome is the capital of Italy. → We visited Rome, which is the capital of Italy.", spanish: "Visitamos Roma. Roma es la capital de Italia. → Visitamos Roma, que es la capital de Italia." }
        ]
      },
      {
        title: "Expresar posesión con 'whose' 🔑",
        description: "El pronombre relativo 'whose' permite expresar relaciones de posesión de manera elegante.",
        examples: [
          { english: "I know the girl whose brother won the competition.", spanish: "Conozco a la chica cuyo hermano ganó la competición." },
          { english: "The company whose products we use has gone bankrupt.", spanish: "La empresa cuyos productos usamos ha quebrado." },
          { english: "The writer whose book you recommended is giving a talk next week.", spanish: "El escritor cuyo libro recomendaste dará una charla la próxima semana." }
        ]
      },
      {
        title: "Referirse a lugares, momentos y razones 📍",
        description: "Los adverbios relativos permiten relacionar sustantivos con lugares, tiempos o razones.",
        examples: [
          { english: "The restaurant where we had dinner was excellent.", spanish: "El restaurante donde cenamos era excelente." },
          { english: "I'll never forget the day when I first met you.", spanish: "Nunca olvidaré el día cuando/en que te conocí." },
          { english: "That's the reason why I didn't attend the meeting.", spanish: "Esa es la razón por la que no asistí a la reunión." }
        ]
      }
    ]
  },
  examples: [
    { english: "The man who lives next door is a doctor.", spanish: "El hombre que vive al lado es médico." },
    { english: "I bought a car which had been previously owned by an elderly lady.", spanish: "Compré un coche que había pertenecido anteriormente a una señora mayor." },
    { english: "My sister, who lives in Barcelona, is coming to visit next week.", spanish: "Mi hermana, que vive en Barcelona, vendrá de visita la próxima semana." },
    { english: "The book that I'm reading is very interesting.", spanish: "El libro que estoy leyendo es muy interesante." },
    { english: "The students whose projects were selected will receive a prize.", spanish: "Los estudiantes cuyos proyectos fueron seleccionados recibirán un premio." },
    { english: "This is the town where I grew up.", spanish: "Este es el pueblo donde crecí." },
    { english: "I remember the day when we first met.", spanish: "Recuerdo el día en que nos conocimos." },
    { english: "That's the reason why I called you.", spanish: "Esa es la razón por la que te llamé." }
  ],
  timeExpressions: [
    { word: "... the time when ...", description: "... el momento cuando/en que ..." },
    { word: "... the day when ...", description: "... el día cuando/en que ..." },
    { word: "... the year when ...", description: "... el año cuando/en que ..." },
    { word: "... the period when ...", description: "... el período cuando/en que ..." },
    { word: "... the moment when ...", description: "... el momento cuando/en que ..." },
    { word: "... the century when/in which ...", description: "... el siglo cuando/en el que ..." },
    { word: "... the decade when/in which ...", description: "... la década cuando/en la que ..." },
    { word: "... the era when/in which ...", description: "... la era cuando/en la que ..." },
    { word: "... the occasion when ...", description: "... la ocasión cuando/en que ..." },
    { word: "... the last time when ...", description: "... la última vez cuando/en que ..." }
  ],
  tips: [
    {
      title: "Distinguir entre especificativas y explicativas",
      content: "La clave está en las comas: si la información es esencial para identificar al antecedente, no uses comas (especificativa). Si es información adicional sobre un antecedente ya identificado, usa comas (explicativa).",
      emoji: "✂️"
    },
    {
      title: "Elección entre who, which y that",
      content: "'Who' se usa para personas, 'which' para cosas, y 'that' puede usarse para ambos. Sin embargo, 'that' no debe usarse en cláusulas explicativas y 'which' es preferible en el inglés británico.",
      emoji: "👥"
    },
    {
      title: "Cuándo omitir el pronombre relativo",
      content: "El pronombre relativo puede omitirse cuando funciona como objeto en cláusulas especificativas: 'The book (that) I bought'. Nunca puede omitirse cuando es sujeto: 'The book that is on the table'.",
      emoji: "❌"
    },
    {
      title: "Uso de preposiciones",
      content: "Cuando la cláusula incluye una preposición, ésta puede ir antes del pronombre relativo o al final de la cláusula: 'The man to whom I spoke...' (formal) o 'The man who I spoke to...' (informal).",
      emoji: "⚓"
    }
  ],
  commonMistakes: [
    {
      incorrect: "The man which lives next door is friendly.",
      correct: "The man who lives next door is friendly.",
      explanation: "Para personas, se usa 'who' o 'that', no 'which'."
    },
    {
      incorrect: "My sister who lives in London is a doctor.",
      correct: "My sister, who lives in London, is a doctor.",
      explanation: "Si solo tienes una hermana, la información es explicativa y debe ir entre comas."
    },
    {
      incorrect: "The book, that I read last week, was interesting.",
      correct: "The book that I read last week was interesting. / The book, which I read last week, was interesting.",
      explanation: "En cláusulas explicativas (con comas), no se puede usar 'that'."
    },
    {
      incorrect: "This is the house which I born.",
      correct: "This is the house where I was born.",
      explanation: "Para lugares, es mejor usar el adverbio relativo 'where'."
    },
    {
      incorrect: "The man who I gave the book is my teacher.",
      correct: "The man to whom I gave the book is my teacher. / The man who I gave the book to is my teacher.",
      explanation: "Falta la preposición 'to', que puede ir antes del pronombre relativo o al final de la cláusula."
    }
  ]
};
