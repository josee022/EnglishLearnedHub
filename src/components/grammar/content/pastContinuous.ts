import { GrammarContent } from '../../../types/grammar';

export const pastContinuousContent: GrammarContent = {
  id: 'past-continuous',
  title: 'Past Continuous',
  introduction: {
    text: 'El Past Continuous (también llamado Past Progressive) se utiliza para describir acciones que estaban en progreso en un momento específico del pasado. Nos ayuda a visualizar escenas o situaciones que ocurrían en el pasado, a menudo como telón de fondo para otras acciones.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + was/were + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/he/she/it + was</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">was studying</span> when you called.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">was reading</span> a book at 8 PM.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">was sleeping</span> all morning.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">was raining</span> when we left the house.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">You/we/they + were</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">were working</span> late yesterday.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">were having</span> dinner at that time.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">were waiting</span> for the bus when it started to rain.</p>
            <p>The children <span class="text-green-600 dark:text-green-400 font-bold">were playing</span> in the garden all afternoon.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>was</strong> con los pronombres en singular (I, he, she, it)</li>
            <li>Usamos <strong>were</strong> con los pronombres en plural (you, we, they)</li>
            <li>Añadimos <strong>-ing</strong> al verbo principal para formar el gerundio</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">📝 Reglas para formar el gerundio (-ing):</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 space-y-1">
            <li>Normalmente: añadir <strong>-ing</strong> (talk → talk<strong>ing</strong>, play → play<strong>ing</strong>)</li>
            <li>Verbos que terminan en <strong>-e</strong>: eliminar la <strong>-e</strong> y añadir <strong>-ing</strong> (write → writ<strong>ing</strong>, come → com<strong>ing</strong>)</li>
            <li>Verbos cortos (una sílaba) que terminan en consonante + vocal + consonante: doblar la última consonante (run → runn<strong>ing</strong>, sit → sitt<strong>ing</strong>)</li>
            <li>Verbos que terminan en <strong>-ie</strong>: cambiar <strong>-ie</strong> por <strong>-y</strong> y añadir <strong>-ing</strong> (lie → ly<strong>ing</strong>, die → dy<strong>ing</strong>)</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + was/were + not + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/he/she/it + was not</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">was not studying</span> last night.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">wasn't working</span> at that time.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">was not feeling</span> well yesterday.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">wasn't raining</span> when we arrived.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">You/we/they + were not</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">were not listening</span> to me.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">weren't watching</span> TV last night.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">were not staying</span> at a hotel.</p>
            <p>The students <span class="text-red-600 dark:text-red-400 font-bold">weren't paying</span> attention.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <div>
              <p class="text-blue-800 dark:text-blue-400">I/he/she/it <strong>was not</strong> → I/he/she/it <strong>wasn't</strong></p>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400">You/we/they <strong>were not</strong> → You/we/they <strong>weren't</strong></p>
            </div>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Was/Were + sujeto + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Was + I/he/she/it</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was I talking</span> too loudly?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was he working</span> yesterday?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was she studying</span> when you called?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Was it raining</span> when you left?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Were + you/we/they</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were you sleeping</span> when I called?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were we making</span> too much noise?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were they waiting</span> for us?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Were the children playing</span> in the garden?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/he/she/it <strong>was</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, you/we/they <strong>were</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/he/she/it <strong>wasn't</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, you/we/they <strong>weren't</strong>.</p>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>What were</strong> you doing at 8 o'clock last night?</li>
            <li><strong>Where was</strong> she going when you saw her?</li>
            <li><strong>Why were</strong> they waiting outside?</li>
            <li><strong>How long was</strong> it raining yesterday?</li>
            <li><strong>Who was</strong> driving the car when the accident happened?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "I was walking to school when it started to rain.", spanish: "Estaba caminando a la escuela cuando empezó a llover." },
      { english: "They weren't listening to the teacher.", spanish: "No estaban escuchando al profesor." },
      { english: "Was she studying when you called?", spanish: "¿Estaba estudiando cuando llamaste?" },
      { english: "We were having dinner at 8 PM.", spanish: "Estábamos cenando a las 8 de la tarde." }
    ]
  },
  uses: {
    description: "El Past Continuous tiene usos específicos que lo distinguen de otros tiempos verbales del pasado:",
    useCases: [
      {
        title: "Acciones en progreso en un momento del pasado ⏱️",
        description: "Para describir acciones que estaban ocurriendo en un momento específico del pasado.",
        examples: [
          { english: "At 7 o'clock yesterday evening, I was having dinner.", spanish: "A las 7 de la tarde de ayer, estaba cenando." },
          { english: "This time last year, we were living in Paris.", spanish: "Por estas fechas el año pasado, estábamos viviendo en París." },
          { english: "When the phone rang, she was taking a shower.", spanish: "Cuando sonó el teléfono, ella se estaba duchando." }
        ]
      },
      {
        title: "Telón de fondo para acciones en Past Simple 🎭",
        description: "Para describir lo que estaba sucediendo (contexto) cuando ocurrió otra acción (generalmente en Past Simple).",
        examples: [
          { english: "I was crossing the street when I saw the accident.", spanish: "Estaba cruzando la calle cuando vi el accidente." },
          { english: "While we were sleeping, someone broke into our house.", spanish: "Mientras estábamos durmiendo, alguien entró en nuestra casa." },
          { english: "She was watching TV when the power went out.", spanish: "Ella estaba viendo la televisión cuando se fue la luz." }
        ]
      },
      {
        title: "Acciones temporales que duraban un período 📆",
        description: "Para acciones que continuaban durante un período de tiempo en el pasado, especialmente con expresiones como 'all day', 'all week', etc.",
        examples: [
          { english: "They were traveling all summer.", spanish: "Estuvieron viajando todo el verano." },
          { english: "She was studying for her exams all week.", spanish: "Estuvo estudiando para sus exámenes toda la semana." },
          { english: "I was working on this project all month.", spanish: "Estuve trabajando en este proyecto todo el mes." }
        ]
      },
      {
        title: "Dos acciones simultáneas en el pasado ↔️",
        description: "Para describir dos o más acciones que ocurrían al mismo tiempo en el pasado.",
        examples: [
          { english: "While I was cooking, my wife was setting the table.", spanish: "Mientras yo cocinaba, mi esposa estaba poniendo la mesa." },
          { english: "They were talking while we were trying to watch the movie.", spanish: "Ellos estaban hablando mientras intentábamos ver la película." },
          { english: "She was reading while her husband was watching TV.", spanish: "Ella estaba leyendo mientras su marido veía la televisión." }
        ]
      },
      {
        title: "Narración de situaciones pasadas 📚",
        description: "Para hacer la narración más vívida y visual, creando una imagen de lo que estaba ocurriendo.",
        examples: [
          { english: "The sun was shining and the birds were singing.", spanish: "El sol brillaba y los pájaros cantaban." },
          { english: "Everyone was having a great time at the party.", spanish: "Todos se lo estaban pasando muy bien en la fiesta." },
          { english: "The children were playing happily in the garden.", spanish: "Los niños jugaban felizmente en el jardín." }
        ]
      }
    ]
  },
  examples: [
    { english: "She was reading a book when I arrived.", spanish: "Ella estaba leyendo un libro cuando llegué." },
    { english: "We were not expecting any visitors.", spanish: "No estábamos esperando ninguna visita." },
    { english: "Were you still working at midnight?", spanish: "¿Todavía estabas trabajando a medianoche?" },
    { english: "I was thinking about you yesterday.", spanish: "Estaba pensando en ti ayer." },
    { english: "They were watching a movie when the electricity went off.", spanish: "Estaban viendo una película cuando se fue la luz." },
    { english: "What were you doing at this time yesterday?", spanish: "¿Qué estabas haciendo a esta hora ayer?" },
    { english: "The baby was sleeping all morning.", spanish: "El bebé estuvo durmiendo toda la mañana." },
    { english: "She wasn't feeling well, so she went home early.", spanish: "No se sentía bien, así que se fue a casa temprano." }
  ],
  timeExpressions: [
    { word: "at that time", description: "en ese momento" },
    { word: "at 8 o'clock (yesterday)", description: "a las 8 (ayer)" },
    { word: "when", description: "cuando" },
    { word: "while", description: "mientras" },
    { word: "as", description: "mientras, cuando" },
    { word: "all day/morning/evening", description: "todo el día/la mañana/la tarde" },
    { word: "this time last year/month", description: "por estas fechas el año/mes pasado" },
    { word: "during", description: "durante" },
    { word: "the whole time", description: "todo el tiempo" }
  ],
  tips: [
    {
      title: "Past Simple vs. Past Continuous",
      content: "El Past Simple se usa para acciones completas o puntuales en el pasado, mientras que el Past Continuous se usa para acciones en progreso. Compara: 'I worked yesterday' (acción completa) vs. 'I was working when she called' (acción en progreso).",
      emoji: "⚖️"
    },
    {
      title: "Verbos que rara vez se usan en forma continua",
      content: "Al igual que en el presente, los verbos de estado (know, believe, love, hate, etc.) rara vez se usan en Past Continuous. En su lugar, usa el Past Simple: 'I knew him for years' (no 'I was knowing him').",
      emoji: "🧠"
    },
    {
      title: "Creando contexto con 'when' y 'while'",
      content: "Usamos 'while' con Past Continuous para enfatizar la duración: 'While I was studying...'. Usamos 'when' con Past Simple para marcar una interrupción: 'When the phone rang...'.",
      emoji: "🔄"
    },
    {
      title: "Traducción al español",
      content: "El Past Continuous generalmente se traduce al español usando el pretérito imperfecto: 'I was walking' = 'Yo caminaba/estaba caminando', o con la estructura 'estar + gerundio' en imperfecto.",
      emoji: "🌍"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I was knowing the answer.",
      correct: "I knew the answer.",
      explanation: "Los verbos de estado como 'know' rara vez se usan en formas continuas. Usa el Past Simple."
    },
    {
      incorrect: "While I studied, the phone was ringing.",
      correct: "While I was studying, the phone rang.",
      explanation: "Con 'while' solemos usar Past Continuous para la acción más larga, y Past Simple para la acción puntual o interrupción."
    },
    {
      incorrect: "He was cooking dinner yesterday.",
      correct: "He cooked dinner yesterday.",
      explanation: "Para una acción completada sin énfasis en su desarrollo, es mejor usar Past Simple. El Past Continuous implica que estaba en progreso en un momento específico."
    },
    {
      incorrect: "When I was seeing her, I waved.",
      correct: "When I saw her, I waved.",
      explanation: "Para acciones puntuales y rápidas como 'ver' a alguien y saludar, usamos Past Simple, no Past Continuous."
    },
    {
      incorrect: "We was working all day.",
      correct: "We were working all day.",
      explanation: "Con 'we', siempre usamos 'were', no 'was'."
    },
    {
      incorrect: "She were sleeping when I called.",
      correct: "She was sleeping when I called.",
      explanation: "Con sujetos en singular (she, he, it), usamos 'was', no 'were'."
    }
  ]
};
