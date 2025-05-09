import { GrammarContent } from '../../../types/grammar';

export const mayMightContent: GrammarContent = {
  id: 'may-might',
  title: 'May / Might',
  introduction: {
    text: 'Los modales "may" y "might" se utilizan principalmente para expresar posibilidad, probabilidad y permiso. "May" tiende a sugerir una posibilidad más fuerte que "might", aunque en muchos contextos son prácticamente intercambiables. Son verbos modales muy útiles para expresar incertidumbre y para hacer peticiones educadas.',
    emoji: '🤔'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + may/might + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">May (posibilidad/permiso)</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">may go</span> to the party tonight.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">may be</span> at home now.</p>
            <p>The weather <span class="text-green-600 dark:text-green-400 font-bold">may improve</span> later.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">may take</span> my book if you need it.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Might (posibilidad menor)</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">might visit</span> you next weekend.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">might know</span> the answer.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">might come</span> to the meeting.</p>
            <p>This <span class="text-green-600 dark:text-green-400 font-bold">might be</span> the solution we need.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Características importantes:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>El verbo después de <strong>may/might</strong> siempre va en forma base (sin to, sin -s, etc.)</li>
            <li>En contextos de posibilidad, <strong>may</strong> sugiere generalmente una probabilidad más alta que <strong>might</strong>, pero la diferencia es a menudo muy sutil</li>
            <li>Para expresar permiso formal, se usa <strong>may</strong>, no <strong>might</strong></li>
            <li>No tienen forma de infinitivo, gerundio ni participio</li>
            <li>La forma no cambia con la persona: "I may", "she may", "they may", etc.</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + may not/might not + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">May not</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">may not attend</span> the conference.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">may not know</span> about the changes.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">may not rain</span> after all.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">may not enter</span> this area. (prohibición)</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Might not</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">might not have</span> enough time.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">might not be</span> able to help us.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">might not recognize</span> you.</p>
            <p>This <span class="text-red-600 dark:text-red-400 font-bold">might not work</span> as expected.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Ten en cuenta:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La forma negativa <strong>may not</strong> se puede contraer como <strong>mayn't</strong>, pero esta contracción es muy poco común</li>
            <li>La forma negativa <strong>might not</strong> se puede contraer como <strong>mightn't</strong>, pero igualmente es poco frecuente</li>
            <li>Cuando <strong>may not</strong> se usa para prohibiciones formales, tiene un significado similar a "must not" (no debes)</li>
            <li>En contextos de posibilidad, <strong>may not/might not</strong> indican que algo es posible que no ocurra</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">May/Might + sujeto + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con May (menos comunes)</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">May I come</span> in?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">May I use</span> your phone?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">May we leave</span> early today?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">May I ask</span> you a question?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Might (muy poco comunes)</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Might I suggest</span> an alternative?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Might I borrow</span> your pen?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Might we consider</span> a different approach?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Might that be</span> the solution?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Nota importante:</p>
          <div class="grid grid-cols-1 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400">Las preguntas con <strong>may</strong> se usan principalmente para pedir permiso formal.</p>
              <p class="text-amber-800 dark:text-amber-400">Las preguntas con <strong>might</strong> son extremadamente formales y poco comunes en inglés conversacional.</p>
              <p class="text-amber-800 dark:text-amber-400">Para hablar de posibilidad, generalmente no se usan preguntas directas con may/might, sino que se prefieren estructuras como "Do you think it might rain?" o "Is it possible that...?"</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "It may rain tomorrow.", spanish: "Puede que llueva mañana." },
      { english: "May I use your computer?", spanish: "¿Puedo usar tu ordenador?" },
      { english: "She might not come to the party.", spanish: "Puede que ella no venga a la fiesta." },
      { english: "You might want to check your answers again.", spanish: "Tal vez quieras revisar tus respuestas otra vez." }
    ]
  },
  uses: {
    description: "Los modales 'may' y 'might' tienen varios usos clave en inglés, principalmente para expresar diferentes grados de posibilidad y probabilidad, así como para pedir o dar permiso en contextos formales.",
    useCases: [
      {
        title: "Posibilidad y probabilidad 🎲",
        description: "Expresar que algo es posible, pero no seguro.",
        examples: [
          { english: "It may rain later today.", spanish: "Puede que llueva más tarde hoy." },
          { english: "She might be at home now.", spanish: "Puede que ella esté en casa ahora." },
          { english: "This might be the solution to our problem.", spanish: "Esto podría ser la solución a nuestro problema." }
        ]
      },
      {
        title: "Permiso formal 🚦",
        description: "Solicitar o conceder permiso, generalmente en contextos formales (principalmente con 'may').",
        examples: [
          { english: "May I come in?", spanish: "¿Puedo entrar?" },
          { english: "You may begin the test now.", spanish: "Pueden comenzar el examen ahora." },
          { english: "May I use the restroom?", spanish: "¿Puedo usar el baño?" }
        ]
      },
      {
        title: "Sugerencias y consejos educados 💭",
        description: "Ofrecer sugerencias de manera suave, especialmente con 'might'.",
        examples: [
          { english: "You might want to try a different approach.", spanish: "Quizás querrías probar un enfoque diferente." },
          { english: "I might suggest speaking to the manager first.", spanish: "Tal vez sugeriría hablar primero con el gerente." },
          { english: "You may find it helpful to make a list.", spanish: "Puede que te resulte útil hacer una lista." }
        ]
      },
      {
        title: "Expresar incertidumbre o duda 🤷",
        description: "Indicar que no estamos seguros sobre algo.",
        examples: [
          { english: "I'm not sure what happened. She may have missed the bus.", spanish: "No estoy seguro de qué pasó. Puede que haya perdido el autobús." },
          { english: "He might not understand the instructions.", spanish: "Puede que él no entienda las instrucciones." },
          { english: "There might be a better way to solve this.", spanish: "Podría haber una mejor manera de resolver esto." }
        ]
      },
      {
        title: "Posibilidades futuras o hipotéticas 🔮",
        description: "Hablar sobre lo que podría ocurrir en el futuro o en situaciones hipotéticas.",
        examples: [
          { english: "We may travel to Europe next summer.", spanish: "Puede que viajemos a Europa el próximo verano." },
          { english: "Things might change in the coming months.", spanish: "Las cosas podrían cambiar en los próximos meses." },
          { english: "If we invest now, we might make a good profit.", spanish: "Si invertimos ahora, podríamos obtener un buen beneficio." }
        ]
      }
    ]
  },
  examples: [
    { english: "It may be too late to call her.", spanish: "Puede ser demasiado tarde para llamarla." },
    { english: "May I borrow your pen?", spanish: "¿Puedo tomar prestado tu bolígrafo?" },
    { english: "She might arrive late because of the traffic.", spanish: "Ella podría llegar tarde debido al tráfico." },
    { english: "You may take only one piece of luggage on the plane.", spanish: "Puede llevar solo una pieza de equipaje en el avión." },
    { english: "We might not have enough time to finish this project.", spanish: "Puede que no tengamos suficiente tiempo para terminar este proyecto." },
    { english: "The weather forecast says it may rain tomorrow.", spanish: "El pronóstico del tiempo dice que puede llover mañana." },
    { english: "You might want to reconsider your decision.", spanish: "Tal vez quieras reconsiderar tu decisión." },
    { english: "May I have your attention, please?", spanish: "¿Puedo tener su atención, por favor?" }
  ],
  timeExpressions: [
    { word: "tomorrow/next week/soon", description: "mañana/la próxima semana/pronto (para posibilidades futuras)" },
    { word: "now/at the moment", description: "ahora/en este momento (para posibilidades presentes)" },
    { word: "later/after lunch", description: "más tarde/después del almuerzo (para posibilidades en un futuro cercano)" },
    { word: "if + present, may/might + infinitive", description: "para expresar posibilidades condicionales" },
    { word: "may/might have + past participle", description: "para posibilidades relacionadas con el pasado" },
    { word: "already", description: "ya (para especular sobre lo que ya ha ocurrido)" },
    { word: "possibly/perhaps/maybe", description: "posiblemente/quizás/tal vez (se usan a menudo con may/might)" },
    { word: "eventually/in the long run", description: "eventualmente/a largo plazo (para posibilidades distantes)" },
    { word: "at any time", description: "en cualquier momento (para posibilidades no específicas)" },
    { word: "under certain circumstances", description: "bajo ciertas circunstancias (para posibilidades condicionales)" }
  ],
  tips: [
    {
      title: "May vs. Might para posibilidad",
      content: "Aunque muchas veces son intercambiables, 'may' generalmente indica una posibilidad algo mayor que 'might'. Compare: 'It may rain' (bastante posible) vs. 'It might rain' (menos probable).",
      emoji: "☂️"
    },
    {
      title: "May para permiso formal",
      content: "Para pedir o dar permiso en contextos formales, usa 'may'. En situaciones informales, 'can' es más común: 'May I speak to the manager?' (formal) vs. 'Can I speak to the manager?' (informal).",
      emoji: "🎭"
    },
    {
      title: "Pasado con may/might have + participio",
      content: "Para expresar posibilidad en el pasado, usa 'may have' o 'might have' seguido del participio: 'She might have missed the train' (Puede que haya perdido el tren).",
      emoji: "⏮️"
    },
    {
      title: "May/might + well",
      content: "La estructura 'may/might well' sugiere que algo es bastante probable: 'He might well be the best candidate' (Bien podría ser el mejor candidato).",
      emoji: "✅"
    }
  ],
  commonMistakes: [
    {
      incorrect: "It may to rain tomorrow.",
      correct: "It may rain tomorrow.",
      explanation: "Después de 'may/might', el verbo va en forma base, sin 'to'."
    },
    {
      incorrect: "She mays come to the party.",
      correct: "She may come to the party.",
      explanation: "La forma de 'may' no cambia con las diferentes personas gramaticales."
    },
    {
      incorrect: "I might to be able to help you.",
      correct: "I might be able to help you.",
      explanation: "No se usa 'to' después de 'might'."
    },
    {
      incorrect: "Can I borrow your pen? (en contexto formal)",
      correct: "May I borrow your pen? (en contexto formal)",
      explanation: "En situaciones formales, 'may' es más apropiado que 'can' para pedir permiso."
    },
    {
      incorrect: "She might went to the store.",
      correct: "She might have gone to the store.",
      explanation: "Para hablar de posibilidades en el pasado, se usa 'might have' + participio, no pasado simple."
    }
  ]
};
