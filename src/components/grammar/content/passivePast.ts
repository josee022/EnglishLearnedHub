import { GrammarContent } from '../../../types/grammar';

export const passivePastContent: GrammarContent = {
  id: 'passive-past',
  title: 'Voz Pasiva en Pasado',
  introduction: {
    text: 'La voz pasiva en pasado se utiliza para hablar de acciones que ocurrieron en el pasado, centrando la atención en el objeto que recibió la acción o en la acción misma, en lugar de en quien la realizó. Es particularmente útil cuando el agente es desconocido, irrelevante o cuando queremos enfatizar el resultado de la acción pasada.',
    emoji: '⏮️'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto (receptor) + was/were + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Past Simple Passive</p>
            <p>The letter <span class="text-green-600 dark:text-green-400 font-bold">was written</span> by John yesterday.</p>
            <p>These houses <span class="text-green-600 dark:text-green-400 font-bold">were built</span> in the 1950s.</p>
            <p>My wallet <span class="text-green-600 dark:text-green-400 font-bold">was stolen</span> last week.</p>
            <p>The Mona Lisa <span class="text-green-600 dark:text-green-400 font-bold">was painted</span> by Leonardo da Vinci.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">were invited</span> to the wedding.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Past Continuous Passive</p>
            <p>The letter <span class="text-green-600 dark:text-green-400 font-bold">was being written</span> when I arrived.</p>
            <p>The house <span class="text-green-600 dark:text-green-400 font-bold">was being cleaned</span> all morning.</p>
            <p>A new bridge <span class="text-green-600 dark:text-green-400 font-bold">was being built</span> at that time.</p>
            <p>The documents <span class="text-green-600 dark:text-green-400 font-bold">were being prepared</span> when the power went out.</p>
            <p>The suspect <span class="text-green-600 dark:text-green-400 font-bold">was being questioned</span> by the police.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Past Simple Passive:</strong> sujeto + was/were + participio pasado</li>
            <li><strong>Past Continuous Passive:</strong> sujeto + was/were being + participio pasado</li>
            <li>Usamos <strong>was</strong> con I, he, she, it y sustantivos singulares</li>
            <li>Usamos <strong>were</strong> con you, we, they y sustantivos plurales</li>
            <li>El agente (introducido por "by") es opcional y a menudo se omite si es obvio o desconocido</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Transformación de Activa a Pasiva:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (Past Simple):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>John wrote the letter yesterday.</li>
                <li>They built these houses in the 1950s.</li>
                <li>Someone stole my wallet last week.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (Past Simple):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The letter was written by John yesterday.</li>
                <li>These houses were built in the 1950s.</li>
                <li>My wallet was stolen last week.</li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (Past Continuous):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>He was writing the letter when I arrived.</li>
                <li>They were cleaning the house all morning.</li>
                <li>The company was building a new bridge at that time.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (Past Continuous):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The letter was being written when I arrived.</li>
                <li>The house was being cleaned all morning.</li>
                <li>A new bridge was being built at that time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto (receptor) + was/were + not + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Past Simple Passive Negativo</p>
            <p>The letter <span class="text-red-600 dark:text-red-400 font-bold">was not written</span> by John.</p>
            <p>These houses <span class="text-red-600 dark:text-red-400 font-bold">weren't built</span> in this century.</p>
            <p>My bike <span class="text-red-600 dark:text-red-400 font-bold">wasn't stolen</span>. I just forgot where I left it.</p>
            <p>The museum <span class="text-red-600 dark:text-red-400 font-bold">was not visited</span> by many tourists last year.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">weren't told</span> about the change of plans.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Past Continuous Passive Negativo</p>
            <p>The letter <span class="text-red-600 dark:text-red-400 font-bold">wasn't being written</span> when I called.</p>
            <p>The house <span class="text-red-600 dark:text-red-400 font-bold">was not being cleaned</span> properly.</p>
            <p>A new bridge <span class="text-red-600 dark:text-red-400 font-bold">wasn't being built</span> at that time.</p>
            <p>The documents <span class="text-red-600 dark:text-red-400 font-bold">weren't being prepared</span> as requested.</p>
            <p>The issue <span class="text-red-600 dark:text-red-400 font-bold">was not being discussed</span> at the meeting.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, se usan las siguientes contracciones:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>was not → <strong>wasn't</strong></li>
            <li>were not → <strong>weren't</strong></li>
          </ul>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔄 Transformación de Activa a Pasiva (negativa):</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Voz Activa (Past Simple Negativo):</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>John didn't write the letter.</li>
                <li>They didn't build these houses in this century.</li>
                <li>Nobody stole my bike. I just forgot where I left it.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Voz Pasiva (Past Simple Negativo):</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>The letter wasn't written by John.</li>
                <li>These houses weren't built in this century.</li>
                <li>My bike wasn't stolen. I just forgot where I left it.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Was/Were + sujeto (receptor) + participio pasado (+ by + agente)?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Past Simple Passive Interrogativo</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was the letter written</span> by John?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were these houses built</span> in the 1950s?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was your wallet stolen</span> last week?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was the painting restored</span> properly?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were you invited</span> to the ceremony?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Past Continuous Passive Interrogativo</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was the letter being written</span> when you arrived?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was the house being cleaned</span> yesterday?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were new bridges being built</span> in your city last year?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were the documents being prepared</span> during the meeting?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was this issue being discussed</span> at the conference?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>Yes, it was.</li>
                <li>Yes, they were.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>No, it wasn't.</li>
                <li>No, they weren't.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Where was</strong> this movie <strong>filmed</strong>?</li>
            <li><strong>When were</strong> these buildings <strong>constructed</strong>?</li>
            <li><strong>How was</strong> the criminal <strong>caught</strong>?</li>
            <li><strong>Why was</strong> the project <strong>cancelled</strong>?</li>
            <li><strong>How many people were</strong> <strong>injured</strong> in the accident?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "The Statue of Liberty was given to the United States by France.", spanish: "La Estatua de la Libertad fue dada a los Estados Unidos por Francia." },
      { english: "The document wasn't signed by the president.", spanish: "El documento no fue firmado por el presidente." },
      { english: "Were these photographs taken by a professional?", spanish: "¿Estas fotografías fueron tomadas por un profesional?" },
      { english: "The building was being renovated when the earthquake struck.", spanish: "El edificio estaba siendo renovado cuando ocurrió el terremoto." }
    ]
  },
  uses: {
    description: "La voz pasiva en pasado tiene usos específicos que la hacen preferible a la voz activa en ciertas situaciones:",
    useCases: [
      {
        title: "Hechos históricos y descubrimientos 📜",
        description: "Para hablar de eventos históricos, descubrimientos o invenciones, especialmente cuando el agente es menos importante que el evento mismo.",
        examples: [
          { english: "America was discovered by Columbus in 1492.", spanish: "América fue descubierta por Colón en 1492." },
          { english: "The telephone was invented by Alexander Graham Bell.", spanish: "El teléfono fue inventado por Alexander Graham Bell." },
          { english: "The Great Wall of China was built over 2,000 years ago.", spanish: "La Gran Muralla China fue construida hace más de 2.000 años." }
        ]
      },
      {
        title: "Crímenes, accidentes y desastres 🚨",
        description: "Para reportar eventos como crímenes, accidentes o desastres cuando el agente es desconocido o no es el foco de atención.",
        examples: [
          { english: "The bank was robbed yesterday afternoon.", spanish: "El banco fue robado ayer por la tarde." },
          { english: "Three people were injured in the car accident.", spanish: "Tres personas resultaron heridas en el accidente de coche." },
          { english: "Many buildings were destroyed by the earthquake.", spanish: "Muchos edificios fueron destruidos por el terremoto." }
        ]
      },
      {
        title: "Procesos y procedimientos completados ✓",
        description: "Para describir procesos o procedimientos que se completaron en el pasado, especialmente en contextos formales o técnicos.",
        examples: [
          { english: "The experiment was conducted under strict conditions.", spanish: "El experimento fue realizado bajo condiciones estrictas." },
          { english: "The data was collected from various sources.", spanish: "Los datos fueron recopilados de diversas fuentes." },
          { english: "All security measures were implemented as planned.", spanish: "Todas las medidas de seguridad fueron implementadas según lo planeado." }
        ]
      },
      {
        title: "Decisiones y cambios organizacionales 🏢",
        description: "Para comunicar decisiones o cambios en organizaciones, especialmente cuando se quiere evitar personalizar la responsabilidad.",
        examples: [
          { english: "The project was canceled due to lack of funding.", spanish: "El proyecto fue cancelado debido a la falta de financiación." },
          { english: "Twenty employees were laid off last month.", spanish: "Veinte empleados fueron despedidos el mes pasado." },
          { english: "The company policy was changed without prior notice.", spanish: "La política de la empresa fue cambiada sin previo aviso." }
        ]
      },
      {
        title: "Experiencias personales recibidas 👤",
        description: "Para hablar de experiencias que alguien recibió o situaciones en las que alguien fue afectado por la acción de otros.",
        examples: [
          { english: "I was given some excellent advice by my teacher.", spanish: "Me fue dado un excelente consejo por mi profesor." },
          { english: "We were told to wait outside.", spanish: "Se nos dijo que esperáramos afuera." },
          { english: "She was offered a new job last week.", spanish: "Le fue ofrecido un nuevo trabajo la semana pasada." }
        ]
      }
    ]
  },
  examples: [
    { english: "The book was written by a famous author.", spanish: "El libro fue escrito por un autor famoso." },
    { english: "A new shopping center was being built when we moved here.", spanish: "Un nuevo centro comercial estaba siendo construido cuando nos mudamos aquí." },
    { english: "Was your car damaged in the storm?", spanish: "¿Tu coche fue dañado en la tormenta?" },
    { english: "The suspect wasn't arrested until three days later.", spanish: "El sospechoso no fue arrestado hasta tres días después." },
    { english: "We were told that the train was delayed.", spanish: "Se nos dijo que el tren estaba retrasado." },
    { english: "The painting was stolen from the museum last night.", spanish: "El cuadro fue robado del museo anoche." },
    { english: "Were you informed about the change in schedule?", spanish: "¿Fuiste informado sobre el cambio en el horario?" },
    { english: "The exam was being taken by hundreds of students at the same time.", spanish: "El examen estaba siendo realizado por cientos de estudiantes al mismo tiempo." }
  ],
  timeExpressions: [
    { word: "yesterday", description: "ayer" },
    { word: "last week/month/year", description: "la semana/el mes/el año pasado" },
    { word: "in + año pasado (in 2010)", description: "en + año pasado (en 2010)" },
    { word: "on Monday/Tuesday etc.", description: "el lunes/martes, etc." },
    { word: "at that time", description: "en ese momento" },
    { word: "when + pasado simple", description: "cuando + pasado simple (when I arrived)" },
    { word: "during + período (during the meeting)", description: "durante + período (durante la reunión)" },
    { word: "ago", description: "hace (two years ago = hace dos años)" }
  ],
  tips: [
    {
      title: "Past Simple vs. Past Continuous Passive",
      content: "Usa Past Simple Passive para acciones completadas en el pasado ('The house was built in 1980'). Usa Past Continuous Passive para acciones que estaban en progreso en un momento del pasado ('The house was being built when I visited').",
      emoji: "⏳"
    },
    {
      title: "Cambio de Tiempos en Transformación",
      content: "Al transformar una oración en voz activa a pasiva, el tiempo verbal se mantiene (Past Simple activo → Past Simple pasivo; Past Continuous activo → Past Continuous pasivo), pero la estructura cambia para incluir 'was/were' y el participio pasado.",
      emoji: "🔄"
    },
    {
      title: "Verbos con dos objetos",
      content: "Algunos verbos pueden tener un objeto directo y un objeto indirecto (give, tell, send, show, etc.). Cualquiera de estos objetos puede convertirse en el sujeto de la oración pasiva: 'He gave me a book' → 'I was given a book' o 'A book was given to me'.",
      emoji: "🎁"
    },
    {
      title: "Past Perfect Passive",
      content: "Existe también el Past Perfect Passive (had been + participio), usado para acciones completadas antes de otro momento del pasado: 'The house had been sold before we arrived'.",
      emoji: "⏪"
    }
  ],
  commonMistakes: [
    {
      incorrect: "The house was build in 1950.",
      correct: "The house was built in 1950.",
      explanation: "Se debe usar el participio pasado correcto (built), no la forma base del verbo (build)."
    },
    {
      incorrect: "The letter was wrote by John.",
      correct: "The letter was written by John.",
      explanation: "Se debe usar el participio pasado correcto (written), no el pasado simple (wrote)."
    },
    {
      incorrect: "The window was breaking during the storm.",
      correct: "The window was broken during the storm.",
      explanation: "En Past Simple Passive, se usa el participio pasado (broken), no la forma -ing (breaking)."
    },
    {
      incorrect: "The documents was prepared yesterday.",
      correct: "The documents were prepared yesterday.",
      explanation: "Con sujetos plurales, se debe usar 'were', no 'was'."
    },
    {
      incorrect: "The house was being build when I visited.",
      correct: "The house was being built when I visited.",
      explanation: "Se debe usar el participio pasado correcto (built), no la forma base del verbo (build)."
    },
    {
      incorrect: "My bike stolen last week.",
      correct: "My bike was stolen last week.",
      explanation: "Falta el verbo auxiliar 'was' para formar la voz pasiva."
    }
  ]
};
