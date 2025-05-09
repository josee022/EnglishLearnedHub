import { GrammarContent } from '../../../types/grammar';

export const futureSimpleContent: GrammarContent = {
  id: 'future-simple',
  title: 'Future Simple (will)',
  introduction: {
    text: 'El Future Simple (con will) se utiliza para hacer predicciones, expresar decisiones espontáneas, hacer promesas, ofrecimientos y acciones que ocurrirán en el futuro. Es uno de los tiempos futuros más comunes y versátiles en inglés.',
    emoji: '🔮'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + infinitivo (sin to)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will help</span> you with your homework.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will arrive</span> by 9 o'clock.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will call</span> you tomorrow.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will win</span> the match.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">will understand</span> when you're older.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">will finish</span> the project next week.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">will love</span> this present.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">will attend</span> the meeting.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>will</strong> para todos los sujetos (I, you, he, she, it, we, they)</li>
            <li>Después de <strong>will</strong> siempre usamos el <strong>infinitivo sin to</strong> del verbo</li>
            <li><strong>Will</strong> es un verbo modal y no cambia su forma para diferentes sujetos</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'ll</strong> es la forma contraída de <strong>will</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will</strong> help → I<strong>'ll</strong> help</li>
            <li>You <strong>will</strong> understand → You<strong>'ll</strong> understand</li>
            <li>She <strong>will</strong> love → She<strong>'ll</strong> love</li>
            <li>They <strong>will</strong> attend → They<strong>'ll</strong> attend</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + not + infinitivo (sin to)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not attend</span> the meeting.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't accept</span> these conditions.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not forget</span> this moment.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't be</span> late again.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">will not succeed</span> without effort.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">won't finish</span> on time.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">will not agree</span> with this proposal.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">won't believe</span> what happened.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída negativa:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">La forma contraída negativa <strong>won't</strong> se usa frecuentemente en lugar de <strong>will not</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will not</strong> attend → I <strong>won't</strong> attend</li>
            <li>She <strong>will not</strong> agree → She <strong>won't</strong> agree</li>
            <li>They <strong>will not</strong> believe → They <strong>won't</strong> believe</li>
          </ul>
          <p class="text-blue-800 dark:text-blue-400 mt-2 text-sm"><strong>Nota:</strong> <strong>won't</strong> es una contracción irregular de will not (no es will't).</p>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Will + sujeto + infinitivo (sin to)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con sujetos en primera persona</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I need</span> a visa for this trip?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we arrive</span> on time?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I ever</span> understand this?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we see</span> each other again?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con otros sujetos</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will you help</span> me with this?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will he accept</span> the offer?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will she join</span> us for dinner?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will they be</span> available tomorrow?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>will</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>won't</strong>.</p>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>When will</strong> you arrive?</li>
            <li><strong>Where will</strong> they stay?</li>
            <li><strong>Why will</strong> she leave early?</li>
            <li><strong>How will</strong> we solve this problem?</li>
            <li><strong>What will</strong> happen next?</li>
            <li><strong>Who will</strong> attend the meeting?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "I will call you tomorrow.", spanish: "Te llamaré mañana." },
      { english: "She won't agree with this proposal.", spanish: "Ella no estará de acuerdo con esta propuesta." },
      { english: "Will they join us for dinner?", spanish: "¿Se unirán a nosotros para cenar?" },
      { english: "We'll finish the project next week.", spanish: "Terminaremos el proyecto la próxima semana." }
    ]
  },
  uses: {
    description: "El Future Simple (will) tiene varios usos específicos:",
    useCases: [
      {
        title: "Predicciones sobre el futuro 🔮",
        description: "Para hacer predicciones generales sobre lo que creemos que sucederá en el futuro.",
        examples: [
          { english: "I think it will rain tomorrow.", spanish: "Creo que lloverá mañana." },
          { english: "People will live longer in the future.", spanish: "La gente vivirá más tiempo en el futuro." },
          { english: "The economy will improve next year.", spanish: "La economía mejorará el próximo año." }
        ]
      },
      {
        title: "Decisiones espontáneas ⚡",
        description: "Para expresar decisiones tomadas en el momento de hablar, sin planificación previa.",
        examples: [
          { english: "I'll have the fish, please.", spanish: "Tomaré el pescado, por favor." },
          { english: "Oh, I think I'll wear the blue dress tonight.", spanish: "Oh, creo que me pondré el vestido azul esta noche." },
          { english: "It's cold in here. I'll close the window.", spanish: "Hace frío aquí. Cerraré la ventana." }
        ]
      },
      {
        title: "Promesas y ofrecimientos 🤝",
        description: "Para hacer promesas, ofertas voluntarias o expresar disposición a hacer algo.",
        examples: [
          { english: "I'll help you with your homework, I promise.", spanish: "Te ayudaré con tus deberes, lo prometo." },
          { english: "Don't worry, I won't tell anyone about this.", spanish: "No te preocupes, no le contaré a nadie sobre esto." },
          { english: "The car is dirty. I'll wash it for you.", spanish: "El coche está sucio. Lo lavaré por ti." }
        ]
      },
      {
        title: "Hechos y verdades futuras 📊",
        description: "Para hablar de hechos o verdades que se cumplirán en el futuro.",
        examples: [
          { english: "The sun will rise at 6:30 tomorrow.", spanish: "El sol saldrá a las 6:30 mañana." },
          { english: "She will be 30 next month.", spanish: "Ella cumplirá 30 el próximo mes." },
          { english: "The meeting will start at 9 AM sharp.", spanish: "La reunión comenzará a las 9 AM en punto." }
        ]
      },
      {
        title: "Amenazas y advertencias ⚠️",
        description: "Para expresar amenazas o advertencias sobre consecuencias futuras.",
        examples: [
          { english: "Stop that or I'll call the police!", spanish: "¡Para eso o llamaré a la policía!" },
          { english: "If you don't study, you will fail the exam.", spanish: "Si no estudias, suspenderás el examen." },
          { english: "Be careful or you'll hurt yourself.", spanish: "Ten cuidado o te harás daño." }
        ]
      }
    ]
  },
  examples: [
    { english: "I'll call you as soon as I arrive.", spanish: "Te llamaré en cuanto llegue." },
    { english: "She won't be happy about this news.", spanish: "Ella no estará contenta con esta noticia." },
    { english: "Will they attend the conference next week?", spanish: "¿Asistirán a la conferencia la próxima semana?" },
    { english: "Don't worry, everything will be fine.", spanish: "No te preocupes, todo estará bien." },
    { english: "I think it will snow tomorrow.", spanish: "Creo que nevará mañana." },
    { english: "We won't forget your birthday.", spanish: "No olvidaremos tu cumpleaños." },
    { english: "When will you return from your trip?", spanish: "¿Cuándo regresarás de tu viaje?" },
    { english: "This problem will solve itself eventually.", spanish: "Este problema se resolverá por sí solo eventualmente." }
  ],
  timeExpressions: [
    { word: "tomorrow", description: "mañana" },
    { word: "next week/month/year", description: "la próxima semana/el próximo mes/el próximo año" },
    { word: "in the future", description: "en el futuro" },
    { word: "soon", description: "pronto" },
    { word: "later", description: "más tarde" },
    { word: "in + período futuro", description: "en, dentro de (in two days = en dos días)" },
    { word: "the day after tomorrow", description: "pasado mañana" },
    { word: "one day", description: "algún día" },
    { word: "tonight", description: "esta noche" }
  ],
  tips: [
    {
      title: "Will vs. Be going to",
      content: "Aunque a veces son intercambiables, 'will' se usa más para predicciones generales y decisiones espontáneas, mientras que 'be going to' para planes e intenciones. Compara: 'I think it will rain tomorrow' (predicción) vs. 'I'm going to study medicine' (plan).",
      emoji: "⚖️"
    },
    {
      title: "Formas de futuro en cláusulas temporales",
      content: "No usamos 'will' después de expresiones temporales como 'when', 'after', 'before', 'as soon as', etc. En su lugar, usamos presente simple. Ejemplo: 'I will call you when I arrive' (no 'when I will arrive').",
      emoji: "⏱️"
    },
    {
      title: "Will y el primer condicional",
      content: "Will se usa frecuentemente en la cláusula principal (resultado) del primer condicional: 'If it rains tomorrow, we will stay at home'. Recuerda que no usamos 'will' en la cláusula condicional ('if').",
      emoji: "🔄"
    },
    {
      title: "Shall en lugar de will",
      content: "En inglés formal o en ciertas variedades como el inglés británico, a veces se usa 'shall' en lugar de 'will' con la primera persona (I, we), especialmente para ofrecimientos o sugerencias: 'Shall I help you with that?'.",
      emoji: "🇬🇧"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I will to call you tomorrow.",
      correct: "I will call you tomorrow.",
      explanation: "Después de 'will' usamos el infinitivo sin 'to'."
    },
    {
      incorrect: "When I will arrive, I'll call you.",
      correct: "When I arrive, I'll call you.",
      explanation: "No usamos 'will' después de conjunciones temporales como 'when', 'after', 'before', etc."
    },
    {
      incorrect: "I think it rains tomorrow.",
      correct: "I think it will rain tomorrow.",
      explanation: "Para predicciones futuras, necesitamos usar 'will' u otra forma de futuro, no el presente simple."
    },
    {
      incorrect: "She not will come to the party.",
      correct: "She will not come to the party./She won't come to the party.",
      explanation: "El orden correcto en negativas es: sujeto + will + not + infinitivo."
    },
    {
      incorrect: "Will you to help me?",
      correct: "Will you help me?",
      explanation: "En preguntas con 'will', usamos el infinitivo sin 'to'."
    },
    {
      incorrect: "If it will rain, we won't go.",
      correct: "If it rains, we won't go.",
      explanation: "No usamos 'will' en la cláusula condicional ('if'); usamos presente simple."
    }
  ]
};
