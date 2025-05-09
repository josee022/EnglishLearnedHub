import { GrammarContent } from '../../../types/grammar';

export const canCouldContent: GrammarContent = {
  id: 'can-could',
  title: 'Can / Could',
  introduction: {
    text: 'Los modales "can" y "could" son fundamentales en inglés para expresar habilidad, posibilidad, permiso y realizar peticiones. "Can" se usa principalmente en presente, mientras que "could" puede referirse al pasado o a situaciones hipotéticas, además de ser una forma más educada para peticiones.',
    emoji: '💪'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + can/could + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Can (Presente)</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">can speak</span> English.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">can swim</span> very well.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">can play</span> the piano.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">can come</span> to the party.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Could (Pasado/Hipotético)</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">could speak</span> French when I was young.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">could swim</span> before you were five.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">could play</span> the violin, but she quit.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">could come</span> if they wanted to.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Características importantes:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>El verbo después de <strong>can/could</strong> siempre va en forma base (sin to, sin -s, etc.)</li>
            <li><strong>Can/could</strong> no tienen forma de infinitivo, gerundio ni participio</li>
            <li>Para expresar estos tiempos se usa <strong>be able to</strong>: "I want <strong>to be able to</strong> swim" (No: "I want to can swim")</li>
            <li>La forma no cambia con la persona: "I can", "he can", "they can", etc.</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + cannot/can't/could not/couldn't + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Can't/Cannot (Presente)</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">can't speak</span> Chinese.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">cannot swim</span> in this lake.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">can't play</span> the drums.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">cannot come</span> tonight.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Couldn't/Could not (Pasado/Hipotético)</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">couldn't understand</span> what he was saying.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">could not open</span> the door without the key.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">couldn't find</span> her wallet.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">couldn't attend</span> even if they wanted to.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Ten en cuenta:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La contracción "can't" es muy común y se pronuncia /kɑːnt/ (UK) o /kænt/ (US), diferente a "cant" (/kænt/)</li>
            <li>A veces "couldn't" en pasado implica que se intentó hacer algo pero no se logró: "I couldn't open the door" (Lo intenté pero no pude)</li>
            <li>"Cannot" se puede escribir como una palabra o dos ("can not"), pero "cannot" es más común</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Can/Could + sujeto + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Can</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Can I use</span> your phone?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Can you help</span> me with this?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Can she speak</span> Spanish?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Can they come</span> to dinner?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Could</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Could I borrow</span> your pen?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Could you tell</span> me the way to the station?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Could she play</span> the guitar when she was young?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Could they find</span> a solution?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>can</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>could</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>can't</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>couldn't</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "She can swim very well.", spanish: "Ella puede nadar muy bien." },
      { english: "I can't come to your party.", spanish: "No puedo venir a tu fiesta." },
      { english: "Could you help me, please?", spanish: "¿Podrías ayudarme, por favor?" },
      { english: "They couldn't understand the instructions.", spanish: "No pudieron entender las instrucciones." }
    ]
  },
  uses: {
    description: "Los modales can y could tienen varios usos importantes en inglés, desde expresar habilidades hasta formular peticiones educadas.",
    useCases: [
      {
        title: "Habilidad y capacidad 🏆",
        description: "Expresar lo que alguien sabe o es capaz de hacer.",
        examples: [
          { english: "I can speak three languages.", spanish: "Puedo hablar tres idiomas." },
          { english: "She could play the piano when she was young.", spanish: "Ella podía tocar el piano cuando era joven." },
          { english: "Can you swim?", spanish: "¿Sabes nadar?" }
        ]
      },
      {
        title: "Posibilidad y probabilidad 🎲",
        description: "Indicar que algo es posible o probable.",
        examples: [
          { english: "It can get very cold in winter here.", spanish: "Puede hacer mucho frío aquí en invierno." },
          { english: "This can't be the right address.", spanish: "Esta no puede ser la dirección correcta." },
          { english: "The situation could get worse if we don't act now.", spanish: "La situación podría empeorar si no actuamos ahora." }
        ]
      },
      {
        title: "Permiso 🚦",
        description: "Pedir o dar permiso para hacer algo.",
        examples: [
          { english: "Can I use your phone?", spanish: "¿Puedo usar tu teléfono?" },
          { english: "You can use my car if you need to.", spanish: "Puedes usar mi coche si lo necesitas." },
          { english: "Could I leave early today?", spanish: "¿Podría irme temprano hoy?" }
        ]
      },
      {
        title: "Peticiones y ofertas 🙏",
        description: "Formular peticiones o ofrecer ayuda de manera educada.",
        examples: [
          { english: "Can you help me with this exercise?", spanish: "¿Puedes ayudarme con este ejercicio?" },
          { english: "Could you pass me the salt, please?", spanish: "¿Podrías pasarme la sal, por favor?" },
          { english: "I can give you a ride if you want.", spanish: "Puedo llevarte en coche si quieres." }
        ]
      },
      {
        title: "Situaciones hipotéticas y condicionales 💭",
        description: "Expresar posibilidades en situaciones imaginarias, especialmente con 'could'.",
        examples: [
          { english: "We could go to the beach if the weather is nice.", spanish: "Podríamos ir a la playa si hace buen tiempo." },
          { english: "I could help you if I had more time.", spanish: "Podría ayudarte si tuviera más tiempo." },
          { english: "What could happen if we try this solution?", spanish: "¿Qué podría pasar si probamos esta solución?" }
        ]
      }
    ]
  },
  examples: [
    { english: "I can run fast.", spanish: "Puedo correr rápido." },
    { english: "Can you help me with my homework?", spanish: "¿Puedes ayudarme con mi tarea?" },
    { english: "She can't attend the meeting today.", spanish: "Ella no puede asistir a la reunión hoy." },
    { english: "When I was younger, I could swim across the lake.", spanish: "Cuando era más joven, podía nadar de un lado a otro del lago." },
    { english: "Could you please be quiet?", spanish: "¿Podrías guardar silencio, por favor?" },
    { english: "I couldn't sleep last night.", spanish: "No pude dormir anoche." },
    { english: "We can meet tomorrow if you want.", spanish: "Podemos reunirnos mañana si quieres." },
    { english: "This can't be true!", spanish: "¡Esto no puede ser verdad!" }
  ],
  timeExpressions: [
    { word: "now", description: "ahora (con can para el presente)" },
    { word: "these days", description: "en estos días (con can para habilidades actuales)" },
    { word: "when I was young", description: "cuando era joven (con could para habilidades pasadas)" },
    { word: "yesterday/last week", description: "ayer/la semana pasada (con could para situaciones pasadas)" },
    { word: "in the future", description: "en el futuro (con could para posibilidades futuras)" },
    { word: "if + past simple, could + infinitive", description: "estructura condicional tipo 2" },
    { word: "always", description: "siempre (para habilidades permanentes)" },
    { word: "sometimes", description: "a veces (para posibilidades ocasionales)" },
    { word: "never", description: "nunca (para imposibilidades)" },
    { word: "in this case", description: "en este caso (para posibilidades específicas)" }
  ],
  tips: [
    {
      title: "Usa 'be able to' para otros tiempos verbales",
      content: "Cuando necesites usar el concepto de 'can' en infinitivo, futuro, presente perfecto u otros tiempos donde can/could no funcionan, usa 'be able to': 'I will be able to help you tomorrow' (No: 'I will can help you').",
      emoji: "⏱️"
    },
    {
      title: "Diferencia entre could y was/were able to",
      content: "Para hablar de un logro específico en el pasado, usa 'was/were able to' en lugar de 'could': 'Despite the difficulty, I was able to finish the project on time' (mejor que 'I could finish').",
      emoji: "🏁"
    },
    {
      title: "Could para mayor cortesía",
      content: "En peticiones, 'could' suena más educado y menos directo que 'can': Compare 'Could you help me?' (más educado) con 'Can you help me?' (más directo).",
      emoji: "🎩"
    },
    {
      title: "Can't vs. mustn't",
      content: "Ten cuidado con la diferencia: 'can't' significa imposibilidad o falta de permiso, mientras que 'mustn't' indica prohibición. 'You can't enter' (no es posible o no tienes permiso) vs. 'You mustn't enter' (está prohibido).",
      emoji: "⚠️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I can to swim very well.",
      correct: "I can swim very well.",
      explanation: "Después de 'can/could' el verbo va en forma base, sin 'to'."
    },
    {
      incorrect: "She cans speak French.",
      correct: "She can speak French.",
      explanation: "'Can' no cambia de forma con las diferentes personas gramaticales."
    },
    {
      incorrect: "I will can drive when I'm 18.",
      correct: "I will be able to drive when I'm 18.",
      explanation: "No existe el futuro de 'can' con 'will'. Se usa 'will be able to'."
    },
    {
      incorrect: "I want can speak English fluently.",
      correct: "I want to be able to speak English fluently.",
      explanation: "No podemos usar 'can' después de 'want to'. Debemos usar 'be able to'."
    },
    {
      incorrect: "Could you to help me, please?",
      correct: "Could you help me, please?",
      explanation: "No se usa 'to' después de 'could' en preguntas o afirmaciones."
    }
  ]
};
