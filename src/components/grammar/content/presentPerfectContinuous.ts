import { GrammarContent } from '../../../types/grammar';

export const presentPerfectContinuousContent: GrammarContent = {
  id: 'present-perfect-continuous',
  title: 'Present Perfect Continuous',
  introduction: {
    text: 'El Present Perfect Continuous (o Present Perfect Progressive) se utiliza para hablar de acciones que comenzaron en el pasado y han estado ocurriendo continuamente hasta el presente. Enfatiza la duración o continuidad de la acción, y a menudo implica que la acción podría continuar en el futuro.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + have/has + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/You/We/They + have been</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">have been working</span> on this project for hours.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">have been studying</span> English since January.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">have been living</span> here for two years.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">have been waiting</span> since 3 o'clock.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + has been</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">has been working</span> here since 2020.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">has been studying</span> medicine for six years.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">has been raining</span> all day.</p>
            <p>The dog <span class="text-green-600 dark:text-green-400 font-bold">has been barking</span> for hours.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Necesitamos <strong>have/has</strong> (auxiliar del Present Perfect)</li>
            <li>Seguido de <strong>been</strong> (participio pasado de "be")</li>
            <li>Y finalmente el <strong>verbo principal en gerundio</strong> (con terminación -ing)</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I/You/We/They <strong>have been</strong> → I/You/We/They<strong>'ve been</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>has been</strong> → He/She/It<strong>'s been</strong></p>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + have/has + not + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/You/We/They + have not been</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">have not been sleeping</span> well lately.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">have not been practicing</span> enough.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">have not been using</span> the new system.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">have not been paying</span> attention.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + has not been</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">has not been feeling</span> well this week.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">has not been attending</span> class regularly.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">has not been working</span> properly.</p>
            <p>The company <span class="text-red-600 dark:text-red-400 font-bold">has not been making</span> a profit.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas negativas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I/You/We/They <strong>have not been</strong> → I/You/We/They <strong>haven't been</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>has not been</strong> → He/She/It <strong>hasn't been</strong></p>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Have/Has + sujeto + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Have + I/you/we/they + been</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have I been talking</span> too much?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have you been waiting</span> long?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have we been going</span> in the right direction?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Have they been working</span> hard?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Has + he/she/it + been</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has he been studying</span> for the exam?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has she been feeling</span> better?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has it been snowing</span> all day?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Has your car been making</span> that noise for long?</p>
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
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> En las respuestas cortas, no necesitamos repetir "been" ni el verbo principal.</p>
        </div>
      </div>
    `,
    examples: [
      { english: "I have been working on this project all day.", spanish: "He estado trabajando en este proyecto todo el día." },
      { english: "She hasn't been feeling well lately.", spanish: "Ella no se ha estado sintiendo bien últimamente." },
      { english: "Have you been waiting long?", spanish: "¿Has estado esperando mucho tiempo?" },
      { english: "It's been raining since morning.", spanish: "Ha estado lloviendo desde la mañana." }
    ]
  },
  uses: {
    description: "El Present Perfect Continuous tiene usos específicos que lo distinguen de otros tiempos verbales:",
    useCases: [
      {
        title: "Acciones que comenzaron en el pasado y continúan hasta ahora ⏱️",
        description: "Para enfatizar que una acción ha estado ocurriendo de manera continua desde un punto en el pasado hasta el presente, a menudo con 'for' o 'since'.",
        examples: [
          { english: "I have been learning English for five years.", spanish: "He estado aprendiendo inglés durante cinco años." },
          { english: "She has been working in this company since 2019.", spanish: "Ella ha estado trabajando en esta empresa desde 2019." },
          { english: "They have been living in Madrid since they got married.", spanish: "Han estado viviendo en Madrid desde que se casaron." }
        ]
      },
      {
        title: "Explicación de situaciones recientes 👀",
        description: "Para explicar situaciones actuales o recientes como resultado de una acción continua.",
        examples: [
          { english: "I'm tired because I have been running.", spanish: "Estoy cansado porque he estado corriendo." },
          { english: "She's wet because she has been swimming.", spanish: "Está mojada porque ha estado nadando." },
          { english: "His hands are dirty because he has been fixing the car.", spanish: "Sus manos están sucias porque ha estado arreglando el coche." }
        ]
      },
      {
        title: "Enfatizar duración y esfuerzo 💪",
        description: "Para enfatizar el tiempo o esfuerzo que se ha invertido en algo hasta ahora.",
        examples: [
          { english: "I have been studying all night for this exam.", spanish: "He estado estudiando toda la noche para este examen." },
          { english: "She has been practicing the piano for hours.", spanish: "Ella ha estado practicando piano durante horas." },
          { english: "We have been trying to solve this problem all week.", spanish: "Hemos estado intentando resolver este problema toda la semana." }
        ]
      },
      {
        title: "Tendencias y cambios recientes 📈",
        description: "Para hablar de tendencias o desarrollos recientes que han estado ocurriendo ultimamente.",
        examples: [
          { english: "Housing prices have been rising steadily this year.", spanish: "Los precios de la vivienda han estado subiendo constantemente este año." },
          { english: "People have been using more public transport lately.", spanish: "La gente ha estado utilizando más el transporte público ultimamente." },
          { english: "The company has been losing money for the past three quarters.", spanish: "La empresa ha estado perdiendo dinero durante los últimos tres trimestres." }
        ]
      },
      {
        title: "Acciones repetidas o habituales recientes 🔄",
        description: "Para actividades que se han estado repitiendo de manera habitual en un período reciente, especialmente con 'lately' o 'recently'.",
        examples: [
          { english: "She has been going to the gym three times a week.", spanish: "Ella ha estado yendo al gimnasio tres veces por semana." },
          { english: "I have been eating too much junk food lately.", spanish: "He estado comiendo demasiada comida basura últimamente." },
          { english: "They have been meeting every Thursday to practice the new procedure.", spanish: "Han estado reuniéndose todos los jueves para practicar el nuevo procedimiento." }
        ]
      }
    ]
  },
  examples: [
    { english: "I have been waiting for two hours.", spanish: "He estado esperando durante dos horas." },
    { english: "She has been crying. Her eyes are red.", spanish: "Ha estado llorando. Sus ojos están rojos." },
    { english: "How long have you been studying Spanish?", spanish: "¿Cuánto tiempo llevas estudiando español?" },
    { english: "It has been snowing heavily since yesterday.", spanish: "Ha estado nevando intensamente desde ayer." },
    { english: "We have been thinking about moving to another city.", spanish: "Hemos estado pensando en mudarnos a otra ciudad." },
    { english: "They haven't been talking to each other since their argument.", spanish: "No han estado hablándose desde su discusión." },
    { english: "I've been trying to contact you all day.", spanish: "He estado intentando contactarte todo el día." },
    { english: "She's exhausted because she has been running a marathon.", spanish: "Está agotada porque ha estado corriendo una maratón." }
  ],
  timeExpressions: [
    { word: "for + período de tiempo", description: "durante, desde hace (for two hours, for a long time...)" },
    { word: "since + punto específico", description: "desde (since 2020, since Monday...)" },
    { word: "all day/week/month", description: "todo el día/semana/mes" },
    { word: "lately", description: "últimamente" },
    { word: "recently", description: "recientemente" },
    { word: "these days", description: "estos días" },
    { word: "in the last few days/weeks", description: "en los últimos días/semanas" },
    { word: "how long", description: "cuánto tiempo (en preguntas)" },
    { word: "so far", description: "hasta ahora" }
  ],
  tips: [
    {
      title: "Present Perfect vs. Present Perfect Continuous",
      content: "El Present Perfect enfatiza el resultado o la compleción de una acción, mientras que el Present Perfect Continuous enfatiza la duración o el proceso. Compara: 'I have read three books this month' (resultado: 3 libros completados) vs. 'I have been reading all day' (duración: el proceso de leer).",
      emoji: "⚖️"
    },
    {
      title: "Verbos que rara vez se usan en forma continua",
      content: "Los verbos de estado (know, believe, love, hate, etc.) generalmente no se usan en Present Perfect Continuous. En su lugar, se utiliza el Present Perfect simple: 'I have known him for years' (no 'I have been knowing him').",
      emoji: "🧠"
    },
    {
      title: "Efectos visibles o consecuencias",
      content: "Este tiempo verbal es muy útil para explicar situaciones visibles o efectos actuales. Por ejemplo, si alguien está sudando, puedes decir 'You look hot. Have you been running?' o si alguien tiene las manos llenas de pintura, 'Have you been painting?'.",
      emoji: "👁️"
    },
    {
      title: "Traducción al español",
      content: "En español solemos usar el presente o el pretérito perfecto compuesto con 'llevar + gerundio'. Por ejemplo, 'Llevo estudiando inglés 5 años' o 'He estado estudiando inglés durante 5 años'.",
      emoji: "🔄"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I have been knowing him for years.",
      correct: "I have known him for years.",
      explanation: "Los verbos de estado como 'know' rara vez se usan en formas continuas. Usa el Present Perfect simple."
    },
    {
      incorrect: "She has working here since 2019.",
      correct: "She has been working here since 2019.",
      explanation: "Falta el participio 'been' después del auxiliar 'has'."
    },
    {
      incorrect: "They have been work on this project for months.",
      correct: "They have been working on this project for months.",
      explanation: "El verbo principal debe estar en forma -ing (gerundio)."
    },
    {
      incorrect: "I've been reading this book since two weeks.",
      correct: "I've been reading this book for two weeks.",
      explanation: "Usamos 'for' con períodos de tiempo y 'since' con puntos específicos en el tiempo."
    },
    {
      incorrect: "How long she has been studying English?",
      correct: "How long has she been studying English?",
      explanation: "En preguntas, el auxiliar 'has' debe ir antes del sujeto 'she'."
    },
    {
      incorrect: "I have eating all day.",
      correct: "I have been eating all day.",
      explanation: "Se requiere el participio 'been' entre el auxiliar 'have' y el gerundio del verbo principal."
    }
  ]
};
