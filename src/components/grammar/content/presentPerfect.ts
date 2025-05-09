import { GrammarContent } from '../../../types/grammar';

export const presentPerfectContent: GrammarContent = {
  id: 'present-perfect',
  title: 'Present Perfect',
  introduction: {
    text: 'El Present Perfect conecta el pasado con el presente. Se utiliza para hablar de experiencias pasadas sin especificar cuándo ocurrieron, acciones del pasado que tienen relevancia en el presente, o situaciones que comenzaron en el pasado y continúan hasta ahora.',
    emoji: '🔄'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + have/has + participio pasado (3ª columna)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/You/We/They + have</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">have worked</span> here for three years.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">have visited</span> Paris twice.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">have seen</span> that movie already.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">have lived</span> in Madrid since 2020.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + has</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">has worked</span> here for three years.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">has visited</span> Paris twice.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">has rained</span> a lot this month.</p>
            <p>My sister <span class="text-green-600 dark:text-green-400 font-bold">has learned</span> three languages.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Participios pasados:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Verbos regulares</strong>: añadir <strong>-ed</strong> como en el Past Simple: work → work<strong>ed</strong>, play → play<strong>ed</strong></li>
            <li><strong>Verbos irregulares</strong>: tienen formas especiales que hay que memorizar:</li>
          </ul>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
            <div class="text-amber-800 dark:text-amber-400">go → gone</div>
            <div class="text-amber-800 dark:text-amber-400">see → seen</div>
            <div class="text-amber-800 dark:text-amber-400">do → done</div>
            <div class="text-amber-800 dark:text-amber-400">make → made</div>
            <div class="text-amber-800 dark:text-amber-400">eat → eaten</div>
            <div class="text-amber-800 dark:text-amber-400">drink → drunk</div>
            <div class="text-amber-800 dark:text-amber-400">write → written</div>
            <div class="text-amber-800 dark:text-amber-400">speak → spoken</div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I/You/We/They <strong>have</strong> → I/You/We/They<strong>'ve</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>has</strong> → He/She/It<strong>'s</strong></p>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + have/has + not + participio pasado</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/You/We/They + have not</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">have not finished</span> my work yet.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">have not seen</span> this movie before.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">have not been</span> to Japan.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">have not studied</span> English for long.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + has not</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">has not eaten</span> anything today.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">has not arrived</span> yet.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">has not changed</span> much.</p>
            <p>My brother <span class="text-red-600 dark:text-red-400 font-bold">has not called</span> me this week.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas negativas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I/You/We/They <strong>have not</strong> → I/You/We/They <strong>haven't</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>has not</strong> → He/She/It <strong>hasn't</strong></p>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Have/Has + sujeto + participio pasado</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Have + I/you/we/they</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have I met</span> her before?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have you finished</span> your homework yet?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have we received</span> all the documents?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have they traveled</span> to London?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Has + he/she/it</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has he been</span> to Paris?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has she seen</span> this movie?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has it stopped</span> raining?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has your sister called</span> you?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/we/they <strong>have</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, he/she/it <strong>has</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/we/they <strong>haven't</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, he/she/it <strong>hasn't</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "I have visited Paris twice.", spanish: "He visitado París dos veces." },
      { english: "She hasn't finished her homework yet.", spanish: "Ella no ha terminado su tarea todavía." },
      { english: "Have they arrived yet?", spanish: "¿Han llegado ya?" },
      { english: "We've known each other for ten years.", spanish: "Nos conocemos desde hace diez años." }
    ]
  },
  uses: {
    description: "El Present Perfect tiene varios usos específicos que lo distinguen de otros tiempos verbales:",
    useCases: [
      {
        title: "Experiencias en la vida 🌟",
        description: "Para hablar de experiencias que has tenido alguna vez (o nunca) en tu vida, sin especificar cuándo ocurrieron exactamente.",
        examples: [
          { english: "I have been to Japan twice.", spanish: "He estado en Japón dos veces." },
          { english: "She has never eaten sushi.", spanish: "Ella nunca ha comido sushi." },
          { english: "Have you ever ridden a horse?", spanish: "¿Has montado a caballo alguna vez?" }
        ]
      },
      {
        title: "Acciones recientes con resultado en el presente 🔄",
        description: "Para acciones completadas recientemente que tienen un resultado o efecto visible en el presente.",
        examples: [
          { english: "I've lost my keys (so I can't open the door now).", spanish: "He perdido mis llaves (así que no puedo abrir la puerta ahora)." },
          { english: "She has broken her leg (so she can't walk now).", spanish: "Se ha roto la pierna (así que no puede caminar ahora)." },
          { english: "They have missed the train (so they will be late).", spanish: "Han perdido el tren (así que llegarán tarde)." }
        ]
      },
      {
        title: "Situaciones que comenzaron en el pasado y continúan ⏳",
        description: "Para situaciones que comenzaron en el pasado y continúan hasta el presente (a menudo con 'for' o 'since').",
        examples: [
          { english: "I have lived in Madrid for three years.", spanish: "He vivido en Madrid durante tres años. / Vivo en Madrid desde hace tres años." },
          { english: "She has worked in this company since 2018.", spanish: "Ella ha trabajado en esta empresa desde 2018. / Ella trabaja en esta empresa desde 2018." },
          { english: "They have known each other since college.", spanish: "Se conocen desde la universidad." }
        ]
      },
      {
        title: "Acciones completadas en un período no terminado ⌛",
        description: "Para hablar de acciones ya completadas pero dentro de un período de tiempo que aún no ha terminado.",
        examples: [
          { english: "I have read three books this month (and the month isn't over yet).", spanish: "He leído tres libros este mes (y el mes aún no ha terminado)." },
          { english: "She has visited her parents twice this week.", spanish: "Ella ha visitado a sus padres dos veces esta semana." },
          { english: "We haven't had any problems so far today.", spanish: "No hemos tenido ningún problema hasta ahora hoy." }
        ]
      },
      {
        title: "Noticias o información nueva 📰",
        description: "Para dar noticias o informar sobre eventos recientes.",
        examples: [
          { english: "The President has announced new measures.", spanish: "El Presidente ha anunciado nuevas medidas." },
          { english: "Scientists have discovered a new species.", spanish: "Los científicos han descubierto una nueva especie." },
          { english: "Three people have died in the accident.", spanish: "Tres personas han muerto en el accidente." }
        ]
      }
    ]
  },
  examples: [
    { english: "I have never seen that movie.", spanish: "Nunca he visto esa película." },
    { english: "She has just arrived home.", spanish: "Ella acaba de llegar a casa." },
    { english: "Have you ever visited Rome?", spanish: "¿Has visitado Roma alguna vez?" },
    { english: "They have lived here since 2010.", spanish: "Han vivido aquí desde 2010. / Viven aquí desde 2010." },
    { english: "I've lost my wallet. I can't find it anywhere.", spanish: "He perdido mi cartera. No puedo encontrarla en ninguna parte." },
    { english: "He has written three books so far.", spanish: "Ha escrito tres libros hasta ahora." },
    { english: "We haven't decided yet.", spanish: "Todavía no hemos decidido." },
    { english: "I've already seen that film twice.", spanish: "Ya he visto esa película dos veces." }
  ],
  timeExpressions: [
    { word: "ever", description: "alguna vez" },
    { word: "never", description: "nunca" },
    { word: "already", description: "ya" },
    { word: "yet", description: "todavía, aún (en negativs y preguntas)" },
    { word: "just", description: "acabar de" },
    { word: "recently", description: "recientemente" },
    { word: "lately", description: "últimamente" },
    { word: "so far", description: "hasta ahora" },
    { word: "since + punto específico", description: "desde (2010, January, I was a child...)" },
    { word: "for + período de tiempo", description: "durante, desde hace (three years, a long time...)" },
    { word: "this week/month/year", description: "esta semana/mes/año" },
    { word: "today", description: "hoy" }
  ],
  tips: [
    {
      title: "Diferencia con el Past Simple",
      content: "El Present Perfect se centra en la conexión con el presente o el resultado, mientras que el Past Simple se enfoca en acciones terminadas en un momento específico del pasado. Compara: 'I have visited Paris' (experiencia, no importa cuándo) vs. 'I visited Paris last year' (momento específico).",
      emoji: "⚖️"
    },
    {
      title: "For vs. Since",
      content: "Usa 'for' con un período de tiempo (for three years, for a week) y 'since' con un punto específico en el tiempo (since 2020, since Monday, since I was a child).",
      emoji: "🕰️"
    },
    {
      title: "Been vs. Gone",
      content: "'He has been to Paris' significa que visitó París y regresó. 'He has gone to Paris' significa que fue a París y todavía está allí (no ha regresado).",
      emoji: "✈️"
    },
    {
      title: "Traducción al español",
      content: "El Present Perfect puede traducirse al español de diferentes maneras según el contexto: pretérito perfecto compuesto ('he comido'), pretérito perfecto simple ('comí') o incluso presente ('vivo aquí desde hace tres años'). Esta diferencia a veces causa confusión.",
      emoji: "🔄"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I have went to the store.",
      correct: "I have gone to the store.",
      explanation: "Debes usar el participio pasado 'gone', no el pasado simple 'went'."
    },
    {
      incorrect: "She has visit London many times.",
      correct: "She has visited London many times.",
      explanation: "Falta la terminación -ed en el participio 'visited'."
    },
    {
      incorrect: "I have been in Madrid for three years.",
      correct: "I have been in Madrid for three years. / I have lived in Madrid for three years.",
      explanation: "Ambas son correctas, pero 'have lived in' es más común para hablar de residencia durante un período."
    },
    {
      incorrect: "I have seen him yesterday.",
      correct: "I saw him yesterday.",
      explanation: "Con expresiones de tiempo pasado específicas como 'yesterday', 'last week', etc., debes usar el Past Simple, no el Present Perfect."
    },
    {
      incorrect: "Since how long have you been here?",
      correct: "How long have you been here?",
      explanation: "No se usa 'since' en preguntas con 'how long'. Simplemente pregunta 'How long...?'"
    },
    {
      incorrect: "She has gone to Paris three times.",
      correct: "She has been to Paris three times.",
      explanation: "Para experiencias repetidas de viajes, usa 'has been to', no 'has gone to'."
    }
  ]
};
