import { GrammarContent } from '../../../types/grammar';

export const pastSimpleContent: GrammarContent = {
  id: 'simple-past',
  title: 'Past Simple',
  introduction: {
    text: 'El Past Simple (también llamado Simple Past o Pasado Simple) es un tiempo verbal que se utiliza para hablar de acciones completadas en un momento específico del pasado. Es probablemente el tiempo verbal más utilizado para narrar historias o hablar de eventos pasados.',
    emoji: '⏮️'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + verbo en pasado</p>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔤 Verbos regulares e irregulares:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <p class="font-medium text-amber-800 dark:text-amber-400">Verbos regulares:</p>
              <p class="text-amber-800 dark:text-amber-400">
                Se forma añadiendo <strong>-ed</strong> al infinitivo:
              </p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>work → work<strong>ed</strong></li>
                <li>play → play<strong>ed</strong></li>
                <li>visit → visit<strong>ed</strong></li>
              </ul>
            </div>
            <div>
              <p class="font-medium text-amber-800 dark:text-amber-400">Verbos irregulares:</p>
              <p class="text-amber-800 dark:text-amber-400">
                Tienen formas especiales que debes memorizar:
              </p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>go → <strong>went</strong></li>
                <li>see → <strong>saw</strong></li>
                <li>buy → <strong>bought</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Verbos regulares</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">worked</span> at that company for five years.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">played</span> tennis yesterday.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">visited</span> London last summer.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">watched</span> a movie last night.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Verbos irregulares</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">went</span> to Paris in 2019.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">saw</span> a ghost.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">bought</span> a new house last year.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">came</span> home late.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">📝 Reglas ortográficas para verbos regulares:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 space-y-1">
            <li>Verbos que terminan en <strong>-e</strong>: Se añade solo <strong>-d</strong>
              <br />Example: live → liv<strong>ed</strong>, dance → danc<strong>ed</strong>
            </li>
            <li>Verbos de una sílaba que terminan en consonante + vocal + consonante: Se dobla la última consonante + <strong>-ed</strong>
              <br />Example: stop → stopp<strong>ed</strong>, plan → plann<strong>ed</strong>
            </li>
            <li>Verbos que terminan en consonante + <strong>y</strong>: Se cambia la <strong>y</strong> por <strong>i</strong> + <strong>-ed</strong>
              <br />Example: study → studi<strong>ed</strong>, try → tri<strong>ed</strong>
            </li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + did not (didn't) + infinitivo del verbo (sin cambios)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con verbos regulares</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">did not work</span> yesterday.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">didn't play</span> tennis last week.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">did not visit</span> London.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">didn't watch</span> the game.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con verbos irregulares</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">did not go</span> to the party.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">didn't see</span> the accident.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">did not eat</span> dinner.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">didn't have</span> time.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Importante:</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 space-y-1">
            <li>Para formar la negativa, usamos el auxiliar <strong>did not</strong> (o su forma contraída <strong>didn't</strong>) + el infinitivo del verbo.</li>
            <li>Observa que cuando usamos <strong>did not</strong>, el verbo principal vuelve a su forma base (infinitivo sin "to"). No se usa la forma de pasado del verbo principal.</li>
            <li>Incorrecto: ❌ <em>I didn't went</em></li>
            <li>Correcto: ✅ <em>I didn't go</em></li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Did + sujeto + infinitivo del verbo (sin cambios)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con verbos regulares</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did you work</span> yesterday?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did she play</span> tennis last week?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did they visit</span> Rome?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did we finish</span> the project?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con verbos irregulares</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did you go</span> to the meeting?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did she see</span> the movie?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did they eat</span> breakfast?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did we have</span> class yesterday?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>did</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>didn't</strong>.</p>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Where did</strong> you go last weekend?</li>
            <li><strong>When did</strong> they arrive?</li>
            <li><strong>Why did</strong> she leave early?</li>
            <li><strong>How did</strong> you learn to speak English?</li>
            <li><strong>What did</strong> he say?</li>
            <li><strong>Who did</strong> you meet?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "I walked to school.", spanish: "Caminé a la escuela." },
      { english: "She didn't call me yesterday.", spanish: "Ella no me llamó ayer." },
      { english: "Did they finish the project?", spanish: "¿Terminaron el proyecto?" },
      { english: "We went to the beach last summer.", spanish: "Fuimos a la playa el verano pasado." }
    ]
  },
  uses: {
    description: "El Past Simple se utiliza en situaciones específicas que se diferencian claramente de otros tiempos pasados:",
    useCases: [
      {
        title: "Acciones completadas en el pasado 📅",
        description: "Para acciones que comenzaron y terminaron en un momento específico del pasado.",
        examples: [
          { english: "I visited Paris in 2019.", spanish: "Visité París en 2019." },
          { english: "She graduated from university last year.", spanish: "Ella se graduó de la universidad el año pasado." },
          { english: "We bought a new car two months ago.", spanish: "Compramos un coche nuevo hace dos meses." }
        ]
      },
      {
        title: "Acciones en secuencia ➡️➡️➡️",
        description: "Para narrar una serie de acciones que ocurrieron una tras otra en el pasado.",
        examples: [
          { english: "I woke up, had breakfast and went to work.", spanish: "Me desperté, desayuné y fui a trabajar." },
          { english: "She entered the room, sat down and opened her book.", spanish: "Ella entró en la habitación, se sentó y abrió su libro." },
          { english: "We arrived at the airport, checked in and boarded the plane.", spanish: "Llegamos al aeropuerto, facturamos y embarcamos en el avión." }
        ]
      },
      {
        title: "Hábitos o situaciones habituales en el pasado 🔄",
        description: "Para describir acciones que eran habituales en el pasado pero ya no ocurren (a menudo con expresiones como 'used to').",
        examples: [
          { english: "When I was a child, I played soccer every weekend.", spanish: "Cuando era niño, jugaba al fútbol todos los fines de semana." },
          { english: "She always went to that café when she lived in Paris.", spanish: "Ella siempre iba a ese café cuando vivía en París." },
          { english: "They used to visit their grandparents every summer.", spanish: "Solían visitar a sus abuelos todos los veranos." }
        ]
      },
      {
        title: "Realidades generales en el pasado 🏛️",
        description: "Para hechos que eran verdad en el pasado pero ya no lo son.",
        examples: [
          { english: "People believed that the earth was flat.", spanish: "La gente creía que la Tierra era plana." },
          { english: "I worked at Microsoft for five years. Now I work at Google.", spanish: "Trabajé en Microsoft durante cinco años. Ahora trabajo en Google." },
          { english: "She lived in New York before she moved to London.", spanish: "Ella vivía en Nueva York antes de mudarse a Londres." }
        ]
      },
      {
        title: "Narración de historias y eventos 📚",
        description: "El Past Simple es el tiempo principal para contar historias o relatar eventos pasados.",
        examples: [
          { english: "The dinosaurs died out millions of years ago.", spanish: "Los dinosaurios se extinguieron hace millones de años." },
          { english: "She told me an interesting story yesterday.", spanish: "Ella me contó una historia interesante ayer." },
          { english: "Columbus discovered America in 1492.", spanish: "Colón descubrió América en 1492." }
        ]
      }
    ]
  },
  examples: [
    { english: "I studied English last night.", spanish: "Estudié inglés anoche." },
    { english: "She didn't go to the party.", spanish: "Ella no fue a la fiesta." },
    { english: "Did you see that movie?", spanish: "¿Viste esa película?" },
    { english: "We traveled to Spain last summer.", spanish: "Viajamos a España el verano pasado." },
    { english: "He lost his keys yesterday.", spanish: "Él perdió sus llaves ayer." },
    { english: "They didn't understand the question.", spanish: "Ellos no entendieron la pregunta." },
    { english: "When did you move to this city?", spanish: "¿Cuándo te mudaste a esta ciudad?" },
    { english: "I wrote a letter to my friend.", spanish: "Escribí una carta a mi amigo." }
  ],
  timeExpressions: [
    { word: "yesterday", description: "ayer" },
    { word: "last night/week/month/year", description: "anoche/la semana pasada/el mes pasado/el año pasado" },
    { word: "ago", description: "hace (two days ago = hace dos días)" },
    { word: "in + año pasado", description: "en (in 2010 = en 2010)" },
    { word: "on + fecha pasada", description: "el (on March 15th = el 15 de marzo)" },
    { word: "when", description: "cuando" },
    { word: "then", description: "entonces" },
    { word: "once", description: "una vez" },
    { word: "that day/morning", description: "ese día/esa mañana" }
  ],
  tips: [
    {
      title: "Memorizando verbos irregulares",
      content: "Los verbos irregulares son uno de los mayores desafíos del Past Simple. Te recomendamos estudiarlos en grupos con sonidos o patrones similares, como 'sing-sang', 'drink-drank'. También puedes crear tarjetas de memoria o usar aplicaciones para practicar.",
      emoji: "🧠"
    },
    {
      title: "Past Simple vs. Present Perfect",
      content: "A menudo se confunden estos dos tiempos. Recuerda: el Past Simple se usa para acciones completadas en un momento específico del pasado ('I visited London in 2019'), mientras que el Present Perfect conecta el pasado con el presente ('I have visited London' - en algún momento de mi vida hasta ahora).",
      emoji: "⚖️"
    },
    {
      title: "Pronunciación de -ed",
      content: "La terminación -ed de los verbos regulares tiene tres pronunciaciones distintas: /t/ después de consonantes sordas (walked /wɔːkt/), /d/ después de consonantes sonoras y vocales (played /pleɪd/), y /ɪd/ después de /t/ y /d/ (wanted /ˈwɒntɪd/).",
      emoji: "🗣️"
    },
    {
      title: "Verbos modales en pasado",
      content: "Algunos verbos modales tienen formas de pasado específicas: 'can' → 'could', 'will' → 'would', 'may' → 'might'. Otros como 'must' utilizan estructuras alternativas como 'had to'.",
      emoji: "🔄"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I didn't went to the party.",
      correct: "I didn't go to the party.",
      explanation: "Después de 'did' o 'didn't', siempre se usa el infinitivo del verbo, no su forma en pasado."
    },
    {
      incorrect: "Did you went home?",
      correct: "Did you go home?",
      explanation: "En preguntas con 'did', usamos el infinitivo del verbo principal, no su forma en pasado."
    },
    {
      incorrect: "She no called me yesterday.",
      correct: "She didn't call me yesterday.",
      explanation: "Para formar la negativa en Past Simple, usamos 'did not' o 'didn't', no 'no'."
    },
    {
      incorrect: "They goed to the cinema.",
      correct: "They went to the cinema.",
      explanation: "'Go' es un verbo irregular. Su forma en pasado es 'went', no 'goed'."
    },
    {
      incorrect: "Where you did go?",
      correct: "Where did you go?",
      explanation: "En preguntas, el orden correcto es: partícula interrogativa + did + sujeto + verbo."
    },
    {
      incorrect: "I falled from the bike.",
      correct: "I fell from the bike.",
      explanation: "'Fall' es un verbo irregular. Su forma en pasado es 'fell', no 'falled'."
    }
  ]
};
