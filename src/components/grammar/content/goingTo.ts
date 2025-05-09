import { GrammarContent } from '../../../types/grammar';

export const goingToContent: GrammarContent = {
  id: 'going-to',
  title: 'Going To',
  introduction: {
    text: 'La estructura "be going to" se utiliza para expresar planes e intenciones futuras, así como para hacer predicciones basadas en evidencia presente. Es una de las formas de futuro más comunes en inglés y suele expresar mayor certeza o una planificación previa.',
    emoji: '📝'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + be (am/is/are) + going to + infinitivo (sin to)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I → am going to</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am going to study</span> medicine.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am going to travel</span> to Italy next summer.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am going to call</span> my parents tonight.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am going to buy</span> a new laptop.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It → is going to</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">is going to finish</span> the project soon.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">is going to visit</span> her grandmother.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">is going to rain</span> later.</p>
            <p>The company <span class="text-green-600 dark:text-green-400 font-bold">is going to expand</span> next year.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">You/We/They → are going to</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">are going to love</span> this movie.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">are going to move</span> to a new house.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">are going to arrive</span> at 8 o'clock.</p>
            <p>You all <span class="text-green-600 dark:text-green-400 font-bold">are going to succeed</span> if you work hard.</p>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
            <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
            <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
              <li>Primero usamos el verbo <strong>be</strong> conjugado según el sujeto:
                <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                  <li>I → <strong>am</strong></li>
                  <li>he/she/it → <strong>is</strong></li>
                  <li>you/we/they → <strong>are</strong></li>
                </ul>
              </li>
              <li>Después añadimos <strong>going to</strong></li>
              <li>Y finalmente el <strong>infinitivo sin to</strong> del verbo principal</li>
            </ul>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I <strong>am going to</strong> → I<strong>'m going to</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>is going to</strong> → He/She/It<strong>'s going to</strong></p>
            <p class="text-blue-800 dark:text-blue-400">You/We/They <strong>are going to</strong> → You/We/They<strong>'re going to</strong></p>
          </div>
          <p class="text-blue-800 dark:text-blue-400 mt-2 text-sm"><strong>Nota:</strong> En el habla coloquial, "going to" a menudo se pronuncia "gonna", pero esta forma se usa principalmente en el lenguaje hablado informal y rara vez en la escritura formal.</p>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + be (am/is/are) + not + going to + infinitivo (sin to)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I → am not going to</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not going to attend</span> the meeting.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not going to forget</span> this.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not going to wait</span> any longer.</p>
            <p>I<span class="text-red-600 dark:text-red-400 font-bold">'m not going to apply</span> for that job.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It → is not going to</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">is not going to pass</span> the exam.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">isn't going to help</span> us.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">is not going to work</span>.</p>
            <p>The train <span class="text-red-600 dark:text-red-400 font-bold">isn't going to arrive</span> on time.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">You/We/They → are not going to</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">are not going to believe</span> this.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">aren't going to succeed</span> without effort.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">are not going to finish</span> on time.</p>
            <p>The children <span class="text-red-600 dark:text-red-400 font-bold">aren't going to play</span> outside today.</p>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas negativas:</p>
            <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
              <li>I <strong>am not going to</strong> → I<strong>'m not going to</strong></li>
              <li>He/She/It <strong>is not going to</strong> → He/She/It<strong> isn't going to</strong> or <strong>'s not going to</strong></li>
              <li>You/We/They <strong>are not going to</strong> → You/We/They <strong>aren't going to</strong> or <strong>'re not going to</strong></li>
            </ul>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Be (Am/Is/Are) + sujeto + going to + infinitivo (sin to)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Am I...? / Is he/she/it...?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Am I going to need</span> a jacket?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is he going to join</span> us for dinner?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is she going to accept</span> the offer?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is it going to rain</span> tomorrow?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Are you/we/they...?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are you going to attend</span> the meeting?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are we going to finish</span> this on time?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are they going to stay</span> with us?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are you all going to participate</span> in the event?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I <strong>am</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, he/she/it <strong>is</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, you/we/they <strong>are</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I<strong>'m not</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, he/she/it <strong>isn't</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, you/we/they <strong>aren't</strong>.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> En las respuestas cortas, no necesitamos repetir "going to" ni el verbo principal.</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>What are</strong> you <strong>going to do</strong> tomorrow?</li>
            <li><strong>Where is</strong> she <strong>going to stay</strong>?</li>
            <li><strong>When are</strong> they <strong>going to arrive</strong>?</li>
            <li><strong>Why is</strong> he <strong>going to leave</strong> early?</li>
            <li><strong>How are</strong> we <strong>going to solve</strong> this problem?</li>
            <li><strong>Who is</strong> <strong>going to present</strong> the project?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "I'm going to study medicine after school.", spanish: "Voy a estudiar medicina después del colegio." },
      { english: "She isn't going to attend the meeting.", spanish: "Ella no va a asistir a la reunión." },
      { english: "Are they going to buy a new car?", spanish: "¿Van a comprar un coche nuevo?" },
      { english: "Look at those clouds. It's going to rain.", spanish: "Mira esas nubes. Va a llover." }
    ]
  },
  uses: {
    description: "La estructura 'be going to' tiene usos específicos que la distinguen de otras formas de expresar el futuro:",
    useCases: [
      {
        title: "Planes e intenciones futuras 📆",
        description: "Para hablar de planes o intenciones que ya se han decidido antes del momento de hablar.",
        examples: [
          { english: "I'm going to buy a new car next month.", spanish: "Voy a comprar un coche nuevo el próximo mes." },
          { english: "She's going to study abroad next year.", spanish: "Ella va a estudiar en el extranjero el próximo año." },
          { english: "We're going to redecorate the house this summer.", spanish: "Vamos a redecorar la casa este verano." }
        ]
      },
      {
        title: "Predicciones basadas en evidencia presente 🔍",
        description: "Para hacer predicciones sobre el futuro basadas en lo que vemos o sabemos ahora (hay evidencia).",
        examples: [
          { english: "Look at those dark clouds. It's going to rain.", spanish: "Mira esas nubes oscuras. Va a llover." },
          { english: "She's going to have a baby in June.", spanish: "Ella va a tener un bebé en junio." },
          { english: "Be careful! You're going to fall if you stand there.", spanish: "¡Ten cuidado! Te vas a caer si te quedas ahí." }
        ]
      },
      {
        title: "Eventos inevitables o predeterminados ⏳",
        description: "Para situaciones que parecen inevitables o que están predeterminadas a ocurrir.",
        examples: [
          { english: "The population is going to reach 10 billion by 2050.", spanish: "La población va a alcanzar los 10 mil millones para 2050." },
          { english: "These old buildings are going to collapse if nothing is done soon.", spanish: "Estos edificios antiguos se van a derrumbar si no se hace algo pronto." },
          { english: "We're going to miss the train if we don't hurry.", spanish: "Vamos a perder el tren si no nos damos prisa." }
        ]
      },
      {
        title: "Acciones inminentes (a punto de ocurrir) ⚡",
        description: "Para acciones que están a punto de ocurrir en un futuro muy cercano.",
        examples: [
          { english: "I'm going to sneeze!", spanish: "¡Voy a estornudar!" },
          { english: "The movie is going to start in a minute.", spanish: "La película va a empezar en un minuto." },
          { english: "Be quiet! The baby is going to wake up.", spanish: "¡Silencio! El bebé va a despertarse." }
        ]
      },
      {
        title: "Intenciones o deseos firmes 💪",
        description: "Para expresar una determinación o intención muy firme de hacer algo.",
        examples: [
          { english: "I'm going to quit smoking once and for all.", spanish: "Voy a dejar de fumar de una vez por todas." },
          { english: "We're going to win this competition, no matter what.", spanish: "Vamos a ganar esta competición, pase lo que pase." },
          { english: "She's going to find a solution to this problem.", spanish: "Ella va a encontrar una solución a este problema." }
        ]
      }
    ]
  },
  examples: [
    { english: "I'm going to visit my parents this weekend.", spanish: "Voy a visitar a mis padres este fin de semana." },
    { english: "She's not going to work tomorrow.", spanish: "Ella no va a trabajar mañana." },
    { english: "Are you going to attend the conference?", spanish: "¿Vas a asistir a la conferencia?" },
    { english: "They're going to get married in June.", spanish: "Van a casarse en junio." },
    { english: "I feel sick. I think I'm going to throw up.", spanish: "Me siento mal. Creo que voy a vomitar." },
    { english: "We're going to need more resources for this project.", spanish: "Vamos a necesitar más recursos para este proyecto." },
    { english: "What are you going to do after graduation?", spanish: "¿Qué vas a hacer después de graduarte?" },
    { english: "Look at the time! We're going to be late.", spanish: "¡Mira la hora! Vamos a llegar tarde." }
  ],
  timeExpressions: [
    { word: "tomorrow", description: "mañana" },
    { word: "next week/month/year", description: "la próxima semana/el próximo mes/el próximo año" },
    { word: "this weekend", description: "este fin de semana" },
    { word: "soon", description: "pronto" },
    { word: "in the near future", description: "en un futuro próximo" },
    { word: "in + período futuro", description: "en, dentro de (in two days = en dos días)" },
    { word: "later today", description: "más tarde hoy" },
    { word: "tonight", description: "esta noche" },
    { word: "after + evento/acción", description: "después de (after lunch = después del almuerzo)" }
  ],
  tips: [
    {
      title: "Will vs. Going to",
      content: "Aunque a veces son intercambiables, 'going to' se usa más para planes e intenciones previas y predicciones con evidencia presente, mientras que 'will' para predicciones generales y decisiones espontáneas. Compara: 'I'm going to study medicine' (plan) vs. 'I think it will rain tomorrow' (predicción general).",
      emoji: "⚖️"
    },
    {
      title: "Present Continuous para planes futuros",
      content: "El Present Continuous también puede usarse para planes futuros, especialmente cuando se trata de arreglos concretos: 'I'm meeting John at 5' (ya está acordado). 'Going to' es más general: 'I'm going to meet John some day' (intención).",
      emoji: "🔄"
    },
    {
      title: "Gonna - forma informal",
      content: "En el habla coloquial, 'going to' a menudo se contrae a 'gonna', pero esta forma se considera informal y generalmente no debería usarse en escritura formal o en situaciones académicas/profesionales.",
      emoji: "🗣️"
    },
    {
      title: "Be going to en cláusulas temporales",
      content: "Al igual que con 'will', no usamos 'be going to' después de expresiones temporales como 'when', 'after', 'before', etc. En su lugar, usamos presente simple: 'I'm going to call you when I arrive' (no 'when I'm going to arrive').",
      emoji: "⏱️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I going to visit my parents tomorrow.",
      correct: "I am going to visit my parents tomorrow.",
      explanation: "No podemos omitir el verbo 'be' (am/is/are) en esta estructura."
    },
    {
      incorrect: "She is going visit her friend.",
      correct: "She is going to visit her friend.",
      explanation: "No podemos omitir la preposición 'to' en la estructura 'going to'."
    },
    {
      incorrect: "We are going to to buy a new car.",
      correct: "We are going to buy a new car.",
      explanation: "No debemos repetir la preposición 'to'. Después de 'going to' usamos el infinitivo sin 'to'."
    },
    {
      incorrect: "When I'm going to arrive, I'll call you.",
      correct: "When I arrive, I'll call you.",
      explanation: "No usamos 'going to' después de conjunciones temporales como 'when', 'after', 'before', etc."
    },
    {
      incorrect: "He going to be an engineer.",
      correct: "He is going to be an engineer.",
      explanation: "Falta el verbo 'be' (is) antes de 'going to'."
    },
    {
      incorrect: "I am go to study tonight.",
      correct: "I am going to study tonight.",
      explanation: "Después de 'am', necesitamos usar 'going to', no solo 'go to'."
    }
  ]
};
