import { GrammarContent } from '../../../types/grammar';

export const presentSimpleContent: GrammarContent = {
  id: 'simple-present',
  title: 'Present Simple',
  introduction: {
    text: 'El Present Simple es uno de los tiempos verbales más importantes y utilizados en inglés. Se usa principalmente para hablar de rutinas, hábitos, hechos generales y verdades universales.',
    emoji: '⏰'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + verbo en forma base (+ s/es en 3ª persona singular)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/You/We/They</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">work</span> every day.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">study</span> English.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">live</span> in Madrid.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">play</span> tennis on Sundays.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">works</span> every day.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">studies</span> English.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">lives</span> in the forest.</p>
            <p>My dog <span class="text-green-600 dark:text-green-400 font-bold">plays</span> in the garden.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Reglas para añadir -s/-es en 3ª persona singular:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Generalmente se añade <strong>-s</strong>: work → work<strong>s</strong>, play → play<strong>s</strong></li>
            <li>Verbos que terminan en -sh, -ch, -s, -z, -x, -o: se añade <strong>-es</strong>: wash → wash<strong>es</strong>, watch → watch<strong>es</strong></li>
            <li>Verbos que terminan en consonante + y: se cambia la -y por <strong>-ies</strong>: study → stud<strong>ies</strong>, carry → carr<strong>ies</strong></li>
            <li>Verbos que terminan en vocal + y: se añade solo <strong>-s</strong>: play → play<strong>s</strong>, enjoy → enjoy<strong>s</strong></li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + don't/doesn't + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">I/You/We/They + don't</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">don't work</span> on Sundays.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">don't study</span> German.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">don't live</span> in London.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">don't play</span> football.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">He/She/It + doesn't</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">doesn't work</span> on Sundays.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">doesn't study</span> German.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">doesn't live</span> in the city.</p>
            <p>My cat <span class="text-red-600 dark:text-red-400 font-bold">doesn't play</span> with toys.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Recuerda:</p>
          <p class="text-amber-800 dark:text-amber-400">En las formas negativas, el verbo principal va siempre en su forma base (sin -s):</p>
          <p class="text-amber-800 dark:text-amber-400 mt-1">❌ <del>She doesn't studies English.</del></p>
          <p class="text-amber-800 dark:text-amber-400">✅ She doesn't study English.</p>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Do/Does + sujeto + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Do + I/you/we/they</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Do I work</span> too much?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Do you study</span> every day?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Do we live</span> near here?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Do they play</span> tennis?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Does + he/she/it</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Does he work</span> on Sundays?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Does she study</span> French?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Does it rain</span> a lot here?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Does your brother play</span> the guitar?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/we/they <strong>do</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, he/she/it <strong>does</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/we/they <strong>don't</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, he/she/it <strong>doesn't</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "She works in a bank.", spanish: "Ella trabaja en un banco." },
      { english: "I don't like coffee.", spanish: "No me gusta el café." },
      { english: "Do they live in Spain?", spanish: "¿Viven ellos en España?" },
      { english: "My father doesn't speak English.", spanish: "Mi padre no habla inglés." }
    ]
  },
  uses: {
    description: "El Present Simple se utiliza en inglés para expresar varios tipos de situaciones. Estos son los usos principales:",
    useCases: [
      {
        title: "Rutinas y hábitos 🔄",
        description: "Acciones que realizamos con regularidad, a menudo con adverbios de frecuencia (always, usually, often, sometimes, rarely, never).",
        examples: [
          { english: "I always drink coffee in the morning.", spanish: "Siempre tomo café por la mañana." },
          { english: "She usually walks to work.", spanish: "Ella normalmente camina al trabajo." },
          { english: "They never eat meat.", spanish: "Ellos nunca comen carne." }
        ]
      },
      {
        title: "Hechos generales y verdades universales 🌎",
        description: "Afirmaciones que son siempre verdaderas o hechos científicos.",
        examples: [
          { english: "Water boils at 100 degrees Celsius.", spanish: "El agua hierve a 100 grados Celsius." },
          { english: "The Earth revolves around the Sun.", spanish: "La Tierra gira alrededor del Sol." },
          { english: "Lions eat meat.", spanish: "Los leones comen carne." }
        ]
      },
      {
        title: "Preferencias y opiniones 💭",
        description: "Para expresar gustos, disgustos y opiniones personales.",
        examples: [
          { english: "I think Spanish food is delicious.", spanish: "Creo que la comida española es deliciosa." },
          { english: "She loves jazz music.", spanish: "A ella le encanta la música jazz." },
          { english: "They prefer to travel by train.", spanish: "Ellos prefieren viajar en tren." }
        ]
      },
      {
        title: "Horarios y programación 📅",
        description: "Para hablar de eventos programados, especialmente transportes y entretenimiento.",
        examples: [
          { english: "The movie starts at 8 PM.", spanish: "La película comienza a las 8 de la tarde." },
          { english: "The train leaves every hour.", spanish: "El tren sale cada hora." },
          { english: "The store opens at 9 AM.", spanish: "La tienda abre a las 9 de la mañana." }
        ]
      }
    ]
  },
  examples: [
    { english: "I work as a teacher.", spanish: "Trabajo como profesor." },
    { english: "She doesn't eat meat.", spanish: "Ella no come carne." },
    { english: "Do you play any sports?", spanish: "¿Practicas algún deporte?" },
    { english: "My brother lives in London.", spanish: "Mi hermano vive en Londres." },
    { english: "They don't understand the problem.", spanish: "Ellos no entienden el problema." },
    { english: "Does it snow in winter here?", spanish: "¿Nieva aquí en invierno?" },
    { english: "I don't think that's a good idea.", spanish: "No creo que sea una buena idea." },
    { english: "We speak three languages.", spanish: "Hablamos tres idiomas." }
  ],
  timeExpressions: [
    { word: "every day/week/month/year", description: "todos los días/semanas/meses/años" },
    { word: "always", description: "siempre" },
    { word: "usually", description: "normalmente" },
    { word: "often", description: "a menudo" },
    { word: "sometimes", description: "a veces" },
    { word: "rarely", description: "raramente" },
    { word: "never", description: "nunca" },
    { word: "on Mondays/Tuesdays...", description: "los lunes/martes..." },
    { word: "in the morning/afternoon/evening", description: "por la mañana/tarde/noche" },
    { word: "once/twice a week", description: "una/dos veces por semana" }
  ],
  tips: [
    {
      title: "Tercera persona singular",
      content: "Recuerda siempre añadir -s/-es al verbo cuando el sujeto es he, she, o it. Este es uno de los errores más comunes al usar el Present Simple.",
      emoji: "👤"
    },
    {
      title: "Posición de los adverbios de frecuencia",
      content: "Los adverbios de frecuencia (always, usually, often, sometimes, etc.) generalmente van ANTES del verbo principal, pero DESPUÉS del verbo 'to be'.",
      emoji: "🔄"
    },
    {
      title: "Verbos estatales vs. dinámicos",
      content: "Algunos verbos (como love, like, hate, think, believe, understand) expresan estados mentales y generalmente se usan en Present Simple, no en Present Continuous.",
      emoji: "💭"
    },
    {
      title: "No olvides el -s, ¡pero no lo uses con auxiliares!",
      content: "Añade -s/-es solo al verbo principal en frases afirmativas con he/she/it. Nunca añadas -s al verbo principal después de 'does' o 'doesn't'.",
      emoji: "⚠️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "She work in a hospital.",
      correct: "She works in a hospital.",
      explanation: "Falta la -s en la tercera persona singular (she)."
    },
    {
      incorrect: "Does she works in a hospital?",
      correct: "Does she work in a hospital?",
      explanation: "No se añade -s al verbo principal después de 'does'."
    },
    {
      incorrect: "He don't like coffee.",
      correct: "He doesn't like coffee.",
      explanation: "Con he/she/it, se usa 'doesn't', no 'don't'."
    },
    {
      incorrect: "I not drink tea.",
      correct: "I don't drink tea.",
      explanation: "En inglés, las negaciones requieren el auxiliar 'do/does' + 'not' (don't/doesn't)."
    },
    {
      incorrect: "They plays football every weekend.",
      correct: "They play football every weekend.",
      explanation: "No se añade -s al verbo cuando el sujeto es they (solo con he/she/it)."
    }
  ]
};
