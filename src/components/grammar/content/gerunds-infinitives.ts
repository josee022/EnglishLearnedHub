import { GrammarContent } from '../../../types/grammar';

export const gerundsInfinitivesContent: GrammarContent = {
  id: 'gerunds-infinitives',
  title: 'Gerundios e Infinitivos',
  introduction: {
    text: 'Los gerundios (verbo + -ing) y los infinitivos (to + verbo) son formas no personales del verbo que pueden funcionar como sustantivos, adjetivos o adverbios. Su uso correcto es uno de los aspectos más desafiantes del inglés, ya que algunas palabras pueden ir seguidas solo de gerundio, otras solo de infinitivo, y algunas admiten ambas formas, a veces con diferencia de significado.',
    emoji: '📝'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Gerundio: Verbo + -ing</p>
        <p class="font-medium">Infinitivo: To + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Gerundios (-ing)</p>
            <p>I enjoy <span class="text-green-600 dark:text-green-400 font-bold">swimming</span>.</p>
            <p>She admitted <span class="text-green-600 dark:text-green-400 font-bold">taking</span> the money.</p>
            <p>They suggested <span class="text-green-600 dark:text-green-400 font-bold">going</span> to the beach.</p>
            <p><span class="text-green-600 dark:text-green-400 font-bold">Reading</span> is my favorite hobby.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Infinitivos (to + verbo)</p>
            <p>I want <span class="text-green-600 dark:text-green-400 font-bold">to travel</span> to Japan.</p>
            <p>She agreed <span class="text-green-600 dark:text-green-400 font-bold">to help</span> us.</p>
            <p>They decided <span class="text-green-600 dark:text-green-400 font-bold">to leave</span> early.</p>
            <p><span class="text-green-600 dark:text-green-400 font-bold">To learn</span> a language takes time.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Categorías principales:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Verbos seguidos de gerundio:</strong> enjoy, avoid, consider, finish, practice, suggest, miss, mind, deny, etc.</li>
            <li><strong>Verbos seguidos de infinitivo:</strong> want, agree, decide, hope, plan, promise, refuse, afford, etc.</li>
            <li><strong>Verbos que pueden ir con ambos sin cambio de significado:</strong> begin, start, continue, like, love, hate, prefer, etc.</li>
            <li><strong>Verbos que cambian de significado:</strong> remember, forget, stop, try, regret, etc.</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Negación con gerundios e infinitivos</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Gerundios negativos (not + -ing)</p>
            <p>He admitted <span class="text-red-600 dark:text-red-400 font-bold">not telling</span> the truth.</p>
            <p>I regret <span class="text-red-600 dark:text-red-400 font-bold">not studying</span> harder.</p>
            <p>She apologized for <span class="text-red-600 dark:text-red-400 font-bold">not attending</span> the meeting.</p>
            <p><span class="text-red-600 dark:text-red-400 font-bold">Not knowing</span> the rules is no excuse.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Infinitivos negativos (not to + verbo)</p>
            <p>I decided <span class="text-red-600 dark:text-red-400 font-bold">not to go</span> to the party.</p>
            <p>She told me <span class="text-red-600 dark:text-red-400 font-bold">not to worry</span>.</p>
            <p>They agreed <span class="text-red-600 dark:text-red-400 font-bold">not to tell</span> anyone.</p>
            <p>It's important <span class="text-red-600 dark:text-red-400 font-bold">not to forget</span> your passport.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Ten en cuenta:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La negación se forma colocando <strong>not</strong> antes del gerundio o infinitivo</li>
            <li>El significado de la negación puede variar según la posición de "not":</li>
            <li>"I remember not going to the party" (Recuerdo que no fui a la fiesta) vs.</li>
            <li>"I don't remember going to the party" (No recuerdo haber ido a la fiesta)</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Verbos que cambian de significado con gerundio o infinitivo</p>
        <div class="grid grid-cols-1 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Verbos con diferente significado según la forma</p>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Remember:</p>
              <p>I remember <span class="text-purple-600 dark:text-purple-400 font-bold">meeting</span> her at the conference. (Recuerdo haberla conocido - acción pasada)</p>
              <p>I must remember <span class="text-purple-600 dark:text-purple-400 font-bold">to call</span> my mother tonight. (Debo recordar llamar - acción futura)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Forget:</p>
              <p>I'll never forget <span class="text-purple-600 dark:text-purple-400 font-bold">visiting</span> Paris for the first time. (No olvidaré haber visitado - experiencia pasada)</p>
              <p>Don't forget <span class="text-purple-600 dark:text-purple-400 font-bold">to lock</span> the door when you leave. (No olvides cerrar - acción futura)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Stop:</p>
              <p>He stopped <span class="text-purple-600 dark:text-purple-400 font-bold">smoking</span> two years ago. (Dejó de fumar - finalizar una acción)</p>
              <p>We stopped <span class="text-purple-600 dark:text-purple-400 font-bold">to get</span> some gas. (Nos detuvimos para conseguir - pausa para otra acción)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Try:</p>
              <p>I tried <span class="text-purple-600 dark:text-purple-400 font-bold">using</span> different methods, but nothing worked. (Intenté usar - experimentar)</p>
              <p>Try <span class="text-purple-600 dark:text-purple-400 font-bold">to be</span> more patient with your sister. (Intenta ser - esforzarse)</p>
            </div>
            
            <div class="mt-2">
              <p class="font-medium text-purple-600 dark:text-purple-400">Regret:</p>
              <p>I regret <span class="text-purple-600 dark:text-purple-400 font-bold">telling</span> her the truth. (Lamento haberle dicho - arrepentimiento por acción pasada)</p>
              <p>We regret <span class="text-purple-600 dark:text-purple-400 font-bold">to inform</span> you that your application was unsuccessful. (Lamentamos informarle - anuncio formal)</p>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Regla general para estos verbos:</p>
          <div class="grid grid-cols-1 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Verbo + gerundio</strong> suele referirse a acciones ya realizadas o completadas.</p>
              <p class="text-amber-800 dark:text-amber-400">• <strong>Verbo + infinitivo</strong> suele referirse a acciones futuras o no realizadas aún.</p>
              <p class="text-amber-800 dark:text-amber-400">Este patrón se repite en varios de estos verbos, pero hay excepciones, por lo que es importante familiarizarse con cada caso específico.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "I enjoy swimming in the sea.", spanish: "Disfruto nadando en el mar." },
      { english: "She wants to learn Spanish.", spanish: "Ella quiere aprender español." },
      { english: "They suggested going to the cinema.", spanish: "Ellos sugirieron ir al cine." },
      { english: "I hope to see you soon.", spanish: "Espero verte pronto." }
    ]
  },
  uses: {
    description: "Los gerundios e infinitivos tienen múltiples usos en inglés y su elección correcta depende de diversas reglas y contextos. Entender cuándo usar cada forma es fundamental para expresarse con precisión.",
    useCases: [
      {
        title: "Gerundio como sujeto 📚",
        description: "El gerundio puede funcionar como el sujeto de una oración, especialmente al hablar de actividades en general.",
        examples: [
          { english: "Swimming is good exercise.", spanish: "Nadar es un buen ejercicio." },
          { english: "Reading helps improve your vocabulary.", spanish: "Leer ayuda a mejorar tu vocabulario." },
          { english: "Learning a language takes time and dedication.", spanish: "Aprender un idioma requiere tiempo y dedicación." }
        ]
      },
      {
        title: "Verbos seguidos de gerundio 🔄",
        description: "Algunos verbos van seguidos de gerundio y no de infinitivo.",
        examples: [
          { english: "I enjoy playing tennis.", spanish: "Disfruto jugando al tenis." },
          { english: "She avoids eating meat.", spanish: "Ella evita comer carne." },
          { english: "They considered moving to another city.", spanish: "Ellos consideraron mudarse a otra ciudad." }
        ]
      },
      {
        title: "Verbos seguidos de infinitivo 🎯",
        description: "Otros verbos deben ir seguidos de infinitivo y no de gerundio.",
        examples: [
          { english: "I want to learn Japanese.", spanish: "Quiero aprender japonés." },
          { english: "She promised to help us.", spanish: "Ella prometió ayudarnos." },
          { english: "They decided to stay at home.", spanish: "Ellos decidieron quedarse en casa." }
        ]
      },
      {
        title: "Después de preposiciones 🔗",
        description: "Tras una preposición generalmente se usa el gerundio, no el infinitivo.",
        examples: [
          { english: "She's interested in studying medicine.", spanish: "Ella está interesada en estudiar medicina." },
          { english: "He's good at playing the guitar.", spanish: "Él es bueno tocando la guitarra." },
          { english: "Thank you for helping me.", spanish: "Gracias por ayudarme." }
        ]
      },
      {
        title: "Verbos que admiten ambas formas con cambio de significado 🔄",
        description: "Algunos verbos pueden ir seguidos tanto de gerundio como de infinitivo, pero con diferente significado.",
        examples: [
          { english: "I remember meeting her for the first time. (Recuerdo el momento)", spanish: "Recuerdo haberla conocido por primera vez." },
          { english: "I remembered to call her. (Recordé que tenía que llamarla)", spanish: "Recordé llamarla." },
          { english: "He stopped smoking. (Dejó de fumar)", spanish: "Él dejó de fumar." },
          { english: "He stopped to smoke. (Se detuvo para fumar)", spanish: "Él se detuvo para fumar." }
        ]
      }
    ]
  },
  examples: [
    { english: "I don't mind waiting for a few minutes.", spanish: "No me importa esperar unos minutos." },
    { english: "She dreams of becoming a doctor.", spanish: "Ella sueña con convertirse en médica." },
    { english: "We're looking forward to seeing you next week.", spanish: "Estamos deseando verte la próxima semana." },
    { english: "He agreed to help us with the project.", spanish: "Él accedió a ayudarnos con el proyecto." },
    { english: "They enjoy traveling around the world.", spanish: "Ellos disfrutan viajando por el mundo." },
    { english: "I expect to finish the work by Friday.", spanish: "Espero terminar el trabajo para el viernes." },
    { english: "She kept talking during the movie.", spanish: "Ella siguió hablando durante la película." },
    { english: "We decided to change our plans.", spanish: "Decidimos cambiar nuestros planes." }
  ],
  timeExpressions: [
    { word: "after + -ing", description: "después de + gerundio" },
    { word: "before + -ing", description: "antes de + gerundio" },
    { word: "while + -ing", description: "mientras + gerundio" },
    { word: "since + -ing", description: "desde que + gerundio" },
    { word: "by + -ing", description: "mediante/al + gerundio" },
    { word: "in order to + infinitive", description: "para/con el fin de + infinitivo" },
    { word: "so as to + infinitive", description: "de modo que/para + infinitivo" },
    { word: "about to + infinitive", description: "a punto de + infinitivo" },
    { word: "used to + infinitive", description: "solía + infinitivo" },
    { word: "would rather + infinitive", description: "preferiría + infinitivo" }
  ],
  tips: [
    {
      title: "Memoriza verbos por categorías",
      content: "La mejor estrategia es memorizar grupos de verbos según si van seguidos de gerundio, infinitivo o ambos. Crear listas personales y revisarlas regularmente te ayudará a interiorizarlos.",
      emoji: "📋"
    },
    {
      title: "Preposiciones + gerundio",
      content: "Recuerda que después de una preposición (in, on, at, for, about, without, etc.) siempre va un gerundio, nunca un infinitivo: 'I'm interested in learning' (no 'in to learn').",
      emoji: "🔗"
    },
    {
      title: "Verbos que cambian de significado",
      content: "Presta especial atención a verbos como remember, forget, stop, try y regret, que cambian su significado según vayan seguidos de gerundio o infinitivo. Estos casos son frecuentes en el uso cotidiano.",
      emoji: "🔄"
    },
    {
      title: "Phrasal verbs y gerundios",
      content: "Muchos phrasal verbs van seguidos de gerundio: 'keep on working', 'give up smoking', 'end up losing'. Es útil aprenderlos como unidades completas.",
      emoji: "🔠"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I enjoy to swim in the sea.",
      correct: "I enjoy swimming in the sea.",
      explanation: "El verbo 'enjoy' siempre va seguido de gerundio, no de infinitivo."
    },
    {
      incorrect: "She suggested to go to the cinema.",
      correct: "She suggested going to the cinema.",
      explanation: "'Suggest' va seguido de gerundio. También podría ser 'suggested that we (should) go', pero no con infinitivo directo."
    },
    {
      incorrect: "I'm looking forward to meet you.",
      correct: "I'm looking forward to meeting you.",
      explanation: "'Looking forward to' es una expresión con preposición 'to', por lo que debe ir seguida de gerundio, no de infinitivo."
    },
    {
      incorrect: "He stopped to smoke two years ago.",
      correct: "He stopped smoking two years ago.",
      explanation: "Si la intención es 'dejó de fumar', se usa 'stop + gerundio'. 'Stop to smoke' significaría 'detenerse para fumar'."
    },
    {
      incorrect: "She dreams to become a doctor.",
      correct: "She dreams of becoming a doctor.",
      explanation: "La estructura correcta es 'dream of/about + gerundio', no 'dream to + infinitivo'."
    }
  ]
};
