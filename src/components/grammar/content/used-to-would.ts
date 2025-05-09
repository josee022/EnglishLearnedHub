import { GrammarContent } from '../../../types/grammar';

export const usedToWouldContent: GrammarContent = {
  id: 'used-to-would',
  title: 'Used to / Would',
  introduction: {
    text: 'Las estructuras "used to" y "would" se utilizan para hablar de acciones y situaciones habituales en el pasado que ya no ocurren en el presente. Aunque comparten usos similares, tienen algunas diferencias importantes. "Used to" puede referirse tanto a acciones habituales como a estados pasados, mientras que "would" generalmente solo se usa para acciones repetidas.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Used to: Sujeto + used to + verbo en forma base</p>
        <p class="font-medium">Would: Sujeto + would + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Used to</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">used to live</span> in New York.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">used to play</span> tennis every weekend.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">used to visit</span> our grandparents often.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">used to be</span> good friends.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Would</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">would go</span> to the beach every summer.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">would play</span> football after school.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">would have</span> dinner together every night.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">would spend</span> hours talking on the phone.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Diferencias clave:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Used to</strong> puede expresar tanto acciones habituales como estados pasados: "I used to play" (acción) / "I used to be" (estado)</li>
            <li><strong>Would</strong> principalmente expresa acciones habituales, no estados: "I would play" (correcto) / "I would be tall" (incorrecto)</li>
            <li><strong>Used to</strong> enfatiza el contraste entre el pasado y el presente, sugiriendo claramente que algo ha cambiado</li>
            <li><strong>Would</strong> se utiliza más en narraciones o al recordar el pasado con un tono nostálgico</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Used to: Sujeto + didn't use to + verbo en forma base</p>
        <p class="font-medium">Would: Sujeto + wouldn't + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Didn't use to</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">didn't use to like</span> coffee.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">didn't use to wear</span> glasses.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">didn't use to eat</span> out much.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">didn't use to have</span> a car.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Wouldn't</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">wouldn't eat</span> vegetables as a child.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">wouldn't talk</span> to strangers.</p>
            <p>The dog <span class="text-red-600 dark:text-red-400 font-bold">wouldn't sleep</span> in its bed.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">wouldn't go</span> out when it was raining.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Ten en cuenta:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La forma negativa de <strong>used to</strong> es <strong>didn't use to</strong> (notar que "used" cambia a "use" en la negativa)</li>
            <li>También es posible encontrar la forma <strong>used not to</strong>, pero es menos común</li>
            <li>Con <strong>wouldn't</strong>, a veces se añade un matiz de negativa o resistencia: "He wouldn't eat vegetables" puede sugerir que se negaba a comerlas</li>
            <li>Las formas negativas de ambas estructuras contrastan un comportamiento o estado pasado con el presente, donde la situación ha cambiado</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Used to: Did + sujeto + use to + verbo en forma base</p>
        <p class="font-medium">Would: Would + sujeto + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Used to</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did you use to live</span> in Paris?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did she use to work</span> at that company?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did they use to visit</span> you often?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Where did you use to go</span> on vacation?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Would</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Would you swim</span> in the lake as a child?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Would he visit</span> his grandmother every Sunday?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What would you do</span> after school?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">How often would they travel</span> abroad?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Para Used to:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/he/she/it/we/they did.</p>
              <p class="text-amber-800 dark:text-amber-400">No, I/he/she/it/we/they didn't.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Para Would:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/he/she/it/we/they would.</p>
              <p class="text-amber-800 dark:text-amber-400">No, I/he/she/it/we/they wouldn't.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2">Nota: La forma interrogativa de <strong>used to</strong> utiliza el auxiliar <strong>did</strong> y la forma base <strong>use to</strong> (sin -d).</p>
        </div>
      </div>
    `,
    examples: [
      { english: "I used to play football when I was younger.", spanish: "Solía jugar al fútbol cuando era más joven." },
      { english: "She didn't use to like spicy food.", spanish: "Ella no solía comer comida picante." },
      { english: "Did you use to live in Madrid?", spanish: "¿Solías vivir en Madrid?" },
      { english: "We would go to the beach every summer.", spanish: "Íbamos a la playa todos los veranos." }
    ]
  },
  uses: {
    description: "Las estructuras 'used to' y 'would' son herramientas gramaticales importantes para hablar del pasado, especialmente para describir hábitos, rutinas y situaciones que eran regulares pero que ya no ocurren o han cambiado.",
    useCases: [
      {
        title: "Hábitos o rutinas pasadas 🔄",
        description: "Describir acciones que se repetían regularmente en el pasado pero que ya no se realizan.",
        examples: [
          { english: "I used to walk to school every day.", spanish: "Solía caminar a la escuela todos los días." },
          { english: "She would visit her grandmother every Sunday.", spanish: "Ella visitaba a su abuela todos los domingos." },
          { english: "They used to play cards after dinner.", spanish: "Solían jugar a las cartas después de cenar." }
        ]
      },
      {
        title: "Estados o situaciones pasadas (solo used to) 📊",
        description: "Describir cómo eran las cosas en el pasado, enfatizando el contraste con el presente.",
        examples: [
          { english: "I used to be afraid of dogs.", spanish: "Solía tener miedo a los perros." },
          { english: "This building used to be a factory.", spanish: "Este edificio solía ser una fábrica." },
          { english: "They used to have a big house in the countryside.", spanish: "Solían tener una casa grande en el campo." }
        ]
      },
      {
        title: "Narraciones y recuerdos nostálgicos 📚",
        description: "Relatar historias del pasado o recordar con nostalgia épocas anteriores, especialmente con 'would'.",
        examples: [
          { english: "When I was a child, I would spend hours reading books.", spanish: "Cuando era niño, pasaba horas leyendo libros." },
          { english: "During summer, we would swim in the lake and have picnics.", spanish: "Durante el verano, nadábamos en el lago y hacíamos picnics." },
          { english: "My grandfather would tell us stories by the fireplace.", spanish: "Mi abuelo nos contaba historias junto a la chimenea." }
        ]
      },
      {
        title: "Cambios significativos entre pasado y presente 🔄",
        description: "Enfatizar cómo algo ha cambiado con el tiempo.",
        examples: [
          { english: "I used to smoke, but I quit five years ago.", spanish: "Solía fumar, pero lo dejé hace cinco años." },
          { english: "She used to have long hair, but now it's very short.", spanish: "Ella solía tener el pelo largo, pero ahora lo tiene muy corto." },
          { english: "We didn't use to have a car, but now we have two.", spanish: "No solíamos tener coche, pero ahora tenemos dos." }
        ]
      },
      {
        title: "Características típicas en el pasado 🖼️",
        description: "Describir comportamientos o características típicas de una persona o cosa en el pasado.",
        examples: [
          { english: "My father would always check all the doors before going to bed.", spanish: "Mi padre siempre revisaba todas las puertas antes de irse a dormir." },
          { english: "The old car would break down on cold mornings.", spanish: "El viejo coche se averiaba en las mañanas frías." },
          { english: "She would always bring flowers when she visited.", spanish: "Siempre traía flores cuando visitaba." }
        ]
      }
    ]
  },
  examples: [
    { english: "I used to be very shy when I was a child.", spanish: "Solía ser muy tímido cuando era niño." },
    { english: "We used to live in a small apartment before we bought our house.", spanish: "Solíamos vivir en un pequeño apartamento antes de comprar nuestra casa." },
    { english: "Did you use to play any musical instruments?", spanish: "¿Solías tocar algún instrumento musical?" },
    { english: "She didn't use to like fish, but now she loves it.", spanish: "Ella no solía comer pescado, pero ahora le encanta." },
    { english: "Every Sunday, we would go to my grandmother's house for lunch.", spanish: "Todos los domingos, íbamos a casa de mi abuela a comer." },
    { english: "He would always forget his keys when he left for work.", spanish: "Siempre olvidaba sus llaves cuando salía para el trabajo." },
    { english: "Would you often go to the cinema when you were younger?", spanish: "¿Ibas a menudo al cine cuando eras más joven?" },
    { english: "The children wouldn't go to bed until they heard a story.", spanish: "Los niños no se iban a la cama hasta que escuchaban un cuento." }
  ],
  timeExpressions: [
    { word: "when I was young/a child", description: "cuando era joven/un niño (para contextualizar hábitos pasados)" },
    { word: "in those days", description: "en aquellos días (para referirse a una época pasada)" },
    { word: "back then", description: "en aquel entonces (para contrastar con el presente)" },
    { word: "years ago", description: "hace años (para situar estados o hábitos en un pasado distante)" },
    { word: "every day/week/month/year", description: "todos los días/semanas/meses/años (para describir la frecuencia de hábitos pasados)" },
    { word: "always", description: "siempre (para enfatizar la regularidad de un hábito)" },
    { word: "never", description: "nunca (para enfatizar la ausencia constante de una acción)" },
    { word: "as a child/teenager", description: "de niño/adolescente (para indicar la etapa de vida)" },
    { word: "before I moved/got married/etc.", description: "antes de mudarme/casarme/etc. (para marcar un punto de cambio)" },
    { word: "during my school/college days", description: "durante mis días de escuela/universidad (para situar en un período específico)" }
  ],
  tips: [
    {
      title: "Used to vs. Be used to",
      content: "No confundas 'used to do' (solía hacer - hábito pasado) con 'be used to doing' (estar acostumbrado a hacer - algo a lo que estás habituado). Por ejemplo: 'I used to smoke' (solía fumar, pero ya no) vs. 'I am used to smoking' (estoy acostumbrado a fumar, probablemente aún lo hago).",
      emoji: "⚠️"
    },
    {
      title: "Would vs. Used to para estados",
      content: "Recuerda que 'would' generalmente no se utiliza para estados o situaciones permanentes. Por ejemplo, 'I used to live in Paris' es correcto, pero 'I would live in Paris' para expresar un estado pasado no es adecuado.",
      emoji: "🏠"
    },
    {
      title: "Forma interrogativa de Used to",
      content: "En preguntas, 'used to' cambia a 'use to' y requiere el auxiliar 'did': 'Did you use to play tennis?' (no 'Did you used to play tennis?'). Es un error común mantener la 'd' en la forma interrogativa.",
      emoji: "❓"
    },
    {
      title: "Would y el contexto narrativo",
      content: "Para usar 'would' al hablar de hábitos pasados, generalmente necesitas establecer primero un contexto temporal: 'When I was a child, I would play in the park' es mejor que simplemente 'I would play in the park'.",
      emoji: "📚"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I use to play tennis.",
      correct: "I used to play tennis.",
      explanation: "En afirmaciones, la forma correcta es 'used to', no 'use to'."
    },
    {
      incorrect: "Did you used to live in London?",
      correct: "Did you use to live in London?",
      explanation: "En preguntas con 'did', la forma correcta es 'use to' (sin -d)."
    },
    {
      incorrect: "I would be very tall when I was young.",
      correct: "I used to be very tall when I was young.",
      explanation: "'Would' no se usa para estados o situaciones permanentes, solo para acciones habituales."
    },
    {
      incorrect: "I didn't used to like coffee.",
      correct: "I didn't use to like coffee.",
      explanation: "En negaciones con 'didn't', la forma correcta es 'use to' (sin -d)."
    },
    {
      incorrect: "She would living in Spain for five years.",
      correct: "She used to live in Spain for five years.",
      explanation: "'Would' debe ir seguido del verbo en infinitivo sin 'to', no con -ing. Además, para un estado como 'living', es mejor usar 'used to'."
    }
  ]
};
