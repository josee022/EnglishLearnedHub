import { GrammarContent } from '../../../types/grammar';

export const presentContinuousContent: GrammarContent = {
  id: 'present-continuous',
  title: 'Present Continuous',
  introduction: {
    text: 'El Present Continuous (también llamado Present Progressive) se utiliza para hablar de acciones que están ocurriendo en este momento o durante un período actual. Es uno de los tiempos más visuales y fáciles de entender del inglés.',
    emoji: '⌛'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + am/is/are + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I + am</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am working</span> now.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am studying</span> English.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am reading</span> a book.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + is</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">is working</span> late.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">is studying</span> French.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">is raining</span> outside.</p>
            <p>The baby <span class="text-green-600 dark:text-green-400 font-bold">is sleeping</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">You/We/They + are</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">are working</span> hard.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">are living</span> in Madrid.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">are playing</span> football.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Reglas para formar el gerundio (-ing):</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Regla general: añadir <strong>-ing</strong>: work → work<strong>ing</strong>, play → play<strong>ing</strong></li>
            <li>Verbos que terminan en -e: eliminar la -e y añadir <strong>-ing</strong>: write → writ<strong>ing</strong>, make → mak<strong>ing</strong></li>
            <li>Verbos de una sílaba con consonante-vocal-consonante: duplicar la última consonante y añadir <strong>-ing</strong>: run → runn<strong>ing</strong>, swim → swimm<strong>ing</strong></li>
            <li>Verbos que terminan en -ie: cambiar -ie por <strong>y + ing</strong>: lie → ly<strong>ing</strong>, die → dy<strong>ing</strong></li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I <strong>am</strong> → I<strong>'m</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>is</strong> → He<strong>'s</strong>/She<strong>'s</strong>/It<strong>'s</strong></p>
            <p class="text-blue-800 dark:text-blue-400">You/We/They <strong>are</strong> → You<strong>'re</strong>/We<strong>'re</strong>/They<strong>'re</strong></p>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + am/is/are + not + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I + am not</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not working</span> today.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not studying</span> German.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not watching</span> TV.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + is not</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">is not working</span> today.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">is not studying</span> now.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">is not raining</span> today.</p>
            <p>My dog <span class="text-red-600 dark:text-red-400 font-bold">is not sleeping</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">You/We/They + are not</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">are not listening</span>.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">are not working</span> tomorrow.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">are not playing</span> well.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas negativas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1">
            <p class="text-blue-800 dark:text-blue-400">I <strong>am not</strong> → I<strong>'m not</strong></p>
            <p class="text-blue-800 dark:text-blue-400">He/She/It <strong>is not</strong> → He<strong>'s not</strong>/He <strong>isn't</strong></p>
            <p class="text-blue-800 dark:text-blue-400">You/We/They <strong>are not</strong> → You<strong>'re not</strong>/You <strong>aren't</strong></p>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Am/Is/Are + sujeto + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Am + I</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Am I working</span> correctly?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Am I speaking</span> too fast?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Am I disturbing</span> you?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Is + he/she/it</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is he working</span> late?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is she studying</span> French?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is it raining</span> outside?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is your friend coming</span> to the party?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Are + you/we/they</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are you listening</span> to me?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are we going</span> the right way?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are they working</span> today?</p>
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
        </div>
      </div>
    `,
    examples: [
      { english: "She is cooking dinner right now.", spanish: "Ella está cocinando la cena ahora mismo." },
      { english: "They aren't studying for the exam.", spanish: "No están estudiando para el examen." },
      { english: "Is he working on the project?", spanish: "¿Está él trabajando en el proyecto?" },
      { english: "I'm not feeling well today.", spanish: "No me siento bien hoy." }
    ]
  },
  uses: {
    description: "El Present Continuous se utiliza en situaciones específicas. Estos son los usos principales:",
    useCases: [
      {
        title: "Acciones en progreso ahora mismo ⏳",
        description: "Para describir acciones que están ocurriendo en el momento de hablar.",
        examples: [
          { english: "I am writing an email right now.", spanish: "Estoy escribiendo un correo electrónico ahora mismo." },
          { english: "She is cooking dinner at the moment.", spanish: "Ella está cocinando la cena en este momento." },
          { english: "Look! The baby is sleeping.", spanish: "¡Mira! El bebé está durmiendo." }
        ]
      },
      {
        title: "Acciones temporales en el presente 📅",
        description: "Para hablar de situaciones temporales o que están ocurriendo durante este período, pero no necesariamente en este preciso momento.",
        examples: [
          { english: "I am reading a really good book this week.", spanish: "Estoy leyendo un libro muy bueno esta semana." },
          { english: "She is working on a special project this month.", spanish: "Ella está trabajando en un proyecto especial este mes." },
          { english: "We are staying with friends until we find a house.", spanish: "Nos estamos quedando con amigos hasta que encontremos una casa." }
        ]
      },
      {
        title: "Planes futuros ya organizados 🗓️",
        description: "Para hablar de planes y acuerdos futuros que ya están decididos.",
        examples: [
          { english: "I am meeting my friends tonight.", spanish: "Me voy a reunir con mis amigos esta noche." },
          { english: "We are flying to Paris next week.", spanish: "Vamos a volar a París la próxima semana." },
          { english: "She is starting her new job on Monday.", spanish: "Ella va a comenzar su nuevo trabajo el lunes." }
        ]
      },
      {
        title: "Situaciones cambiantes 📈",
        description: "Para describir situaciones que están cambiando o desarrollándose gradualmente.",
        examples: [
          { english: "The climate is getting warmer every year.", spanish: "El clima se está calentando cada año." },
          { english: "More people are using public transport now.", spanish: "Más personas están usando el transporte público ahora." },
          { english: "The company is growing quickly.", spanish: "La empresa está creciendo rápidamente." }
        ]
      },
      {
        title: "Comportamientos repetidos (con 'always') 🔄",
        description: "Para expresar irritación o crítica por comportamientos habituales (con always, constantly, forever).",
        examples: [
          { english: "She is always complaining about the weather.", spanish: "Ella siempre está quejándose del clima." },
          { english: "They are constantly arriving late.", spanish: "Ellos están constantemente llegando tarde." },
          { english: "He's forever leaving his dirty clothes on the floor!", spanish: "¡Él siempre está dejando su ropa sucia en el suelo!" }
        ]
      }
    ]
  },
  examples: [
    { english: "I am learning Spanish this year.", spanish: "Estoy aprendiendo español este año." },
    { english: "She isn't working today because she's sick.", spanish: "Ella no está trabajando hoy porque está enferma." },
    { english: "Are you enjoying the party?", spanish: "¿Estás disfrutando de la fiesta?" },
    { english: "Look! It's starting to rain.", spanish: "¡Mira! Está empezando a llover." },
    { english: "We're having dinner with friends tonight.", spanish: "Vamos a cenar con amigos esta noche." },
    { english: "The children are playing in the garden.", spanish: "Los niños están jugando en el jardín." },
    { english: "I'm not watching TV, I'm studying.", spanish: "No estoy viendo la televisión, estoy estudiando." },
    { english: "Why are you wearing a coat? It's not cold.", spanish: "¿Por qué llevas abrigo? No hace frío." }
  ],
  timeExpressions: [
    { word: "now", description: "ahora" },
    { word: "right now", description: "ahora mismo" },
    { word: "at the moment", description: "en este momento" },
    { word: "currently", description: "actualmente" },
    { word: "today", description: "hoy" },
    { word: "this week/month/year", description: "esta semana/mes/año" },
    { word: "these days", description: "estos días" },
    { word: "tonight", description: "esta noche" },
    { word: "tomorrow", description: "mañana" },
    { word: "next week/month/year", description: "la próxima semana/mes/año" },
    { word: "Look!", description: "¡Mira!" }
  ],
  tips: [
    {
      title: "Verbos que no suelen usarse en continuous",
      content: "Algunos verbos que expresan estados mentales, emociones, sentidos, posesión o relaciones rara vez se usan en Present Continuous: like, love, hate, want, need, prefer, know, understand, believe, remember, forget, belong, contain, seem.",
      emoji: "🧠"
    },
    {
      title: "Distinto al español en algunos casos",
      content: "En español a veces usamos el presente simple donde en inglés sería más natural el continuous. Por ejemplo, '¿Qué haces?' (cuando alguien está ocupado) debería traducirse como 'What are you doing?' (no 'What do you do?').",
      emoji: "🔄"
    },
    {
      title: "Present Continuous vs. Present Simple",
      content: "Usa el Present Continuous para acciones temporales o en progreso y el Present Simple para hábitos, rutinas o verdades generales. Compara: 'I'm living in Madrid this year' (temporal) vs. 'I live in Madrid' (permanente).",
      emoji: "⚖️"
    },
    {
      title: "No olvides el verbo 'to be'",
      content: "Un error común es olvidar el verbo 'to be' (am/is/are) antes del verbo principal con -ing. Siempre debes incluirlo: 'I working' ❌ → 'I am working' ✅.",
      emoji: "⚠️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I working now.",
      correct: "I am working now.",
      explanation: "Falta el verbo auxiliar 'am'. Siempre debes usar am/is/are antes del verbo con -ing."
    },
    {
      incorrect: "She watching TV.",
      correct: "She is watching TV.",
      explanation: "Falta el verbo auxiliar 'is'. El Present Continuous se forma con is/am/are + verbo-ing."
    },
    {
      incorrect: "We are go to the cinema tonight.",
      correct: "We are going to the cinema tonight.",
      explanation: "El verbo principal debe estar en forma -ing (gerundio)."
    },
    {
      incorrect: "I am not understanding this rule.",
      correct: "I don't understand this rule.",
      explanation: "El verbo 'understand' es un verbo de estado que normalmente no se usa en continuous. Usa Present Simple."
    },
    {
      incorrect: "She is having a car.",
      correct: "She has a car.",
      explanation: "El verbo 'have' cuando significa posesión es un verbo de estado que normalmente usa Present Simple."
    },
    {
      incorrect: "He is loveing football.",
      correct: "He loves football.",
      explanation: "'Love' es un verbo de estado que normalmente no se usa en continuous. Además, tiene una ortografía incorrecta del gerundio."
    }
  ]
};
