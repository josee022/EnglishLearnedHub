import { GrammarContent } from '../../../types/grammar';

export const shouldOughtToContent: GrammarContent = {
  id: 'should-ought-to',
  title: 'Should / Ought to',
  introduction: {
    text: 'Los modales "should" y "ought to" se utilizan principalmente para expresar consejos, recomendaciones, expectativas y obligaciones morales. Aunque son muy similares en significado, "should" es más común en el lenguaje cotidiano, mientras que "ought to" tiene un tono algo más formal. Ambos indican lo que se considera correcto, apropiado o esperado.',
    emoji: '👨‍⚖️'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Should: Sujeto + should + verbo en forma base</p>
        <p class="font-medium">Ought to: Sujeto + ought to + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Should</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">should study</span> more.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">should eat</span> healthier food.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">should arrive</span> by 5 PM.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">should consider</span> our offer.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ought to</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">ought to exercise</span> regularly.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">ought to apologize</span> for what you did.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">ought to be</span> here by now.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">ought to respect</span> the rules.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Características importantes:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Should</strong> es seguido directamente por el verbo en forma base</li>
            <li><strong>Ought to</strong> siempre lleva "to" antes del verbo</li>
            <li>Ambos se usan principalmente para consejos, expectativas y obligaciones leves</li>
            <li>La forma no cambia con las diferentes personas: "I should", "she should", etc.</li>
            <li><strong>Should</strong> es mucho más común en el lenguaje cotidiano que <strong>ought to</strong></li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Should not/shouldn't: Sujeto + shouldn't + verbo en forma base</p>
        <p class="font-medium">Ought not to/oughtn't to: Sujeto + ought not to/oughtn't to + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Shouldn't</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">shouldn't worry</span> so much.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">shouldn't be</span> late for the meeting.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">shouldn't speak</span> to his mother like that.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">shouldn't drive</span> without a license.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ought not to/Oughtn't to</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">ought not to spend</span> so much money.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">oughtn't to ignore</span> the warning signs.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">ought not to stay</span> up so late.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">oughtn't to leave</span> without saying goodbye.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Ten en cuenta:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La contracción <strong>shouldn't</strong> es muy común en el lenguaje hablado</li>
            <li>Las formas negativas <strong>ought not to</strong> y <strong>oughtn't to</strong> son bastante formales y menos frecuentes</li>
            <li>En inglés americano, <strong>ought not to</strong> es más común que <strong>oughtn't to</strong></li>
            <li>Estas formas negativas se usan para dar consejos negativos o expresar expectativas que no se cumplen</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Should: Should + sujeto + verbo en forma base</p>
        <p class="font-medium">Ought to: Ought + sujeto + to + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Should</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Should I call</span> him now?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Should we wait</span> for them?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Should she tell</span> the truth?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What should they do</span> next?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Ought to (poco comunes)</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Ought I to apologize</span> to her?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Ought we to inform</span> them?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Ought she to accept</span> the offer?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What ought they to do</span> in this situation?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Para Should:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they should.</p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they shouldn't.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Para Ought to:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they ought to.</p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they ought not to.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2">Nota: Las preguntas con <strong>ought to</strong> son muy poco comunes en inglés moderno y suenan bastante formales. En el habla cotidiana, se prefiere <strong>should</strong> para hacer preguntas.</p>
        </div>
      </div>
    `,
    examples: [
      { english: "You should get more sleep.", spanish: "Deberías dormir más." },
      { english: "We ought to respect our elders.", spanish: "Deberíamos respetar a nuestros mayores." },
      { english: "Children shouldn't play with matches.", spanish: "Los niños no deberían jugar con cerillas." },
      { english: "Should I apply for that job?", spanish: "¿Debería solicitar ese trabajo?" }
    ]
  },
  uses: {
    description: "Should y ought to tienen varios usos comunes, siendo los más frecuentes los consejos, obligaciones morales y expectativas lógicas.",
    useCases: [
      {
        title: "Consejos y recomendaciones 🧠",
        description: "Dar sugerencias sobre qué hacer en una situación.",
        examples: [
          { english: "You should exercise regularly.", spanish: "Deberías hacer ejercicio regularmente." },
          { english: "You ought to see a doctor about that cough.", spanish: "Deberías ver a un médico por esa tos." },
          { english: "Should I take the job offer?", spanish: "¿Debería aceptar la oferta de trabajo?" }
        ]
      },
      {
        title: "Obligación moral o responsabilidad 📜",
        description: "Expresar lo que es correcto o apropiado hacer, aunque no sea una obligación legal.",
        examples: [
          { english: "We should help those in need.", spanish: "Deberíamos ayudar a los necesitados." },
          { english: "People ought to respect the environment.", spanish: "La gente debería respetar el medio ambiente." },
          { english: "You should keep your promises.", spanish: "Deberías cumplir tus promesas." }
        ]
      },
      {
        title: "Expectativa o probabilidad 🎯",
        description: "Expresar lo que se espera que suceda o lo que es probable.",
        examples: [
          { english: "The package should arrive by tomorrow.", spanish: "El paquete debería llegar para mañana." },
          { english: "She ought to be home by now.", spanish: "Ella debería estar en casa a estas horas." },
          { english: "The film should be interesting, based on the reviews.", spanish: "La película debería ser interesante, según las críticas." }
        ]
      },
      {
        title: "Crítica o desaprobación 🚫",
        description: "Expresar desaprobación por algo que no se hizo pero debería haberse hecho (con should have/ought to have).",
        examples: [
          { english: "You should have called me.", spanish: "Deberías haberme llamado." },
          { english: "They ought to have been more careful.", spanish: "Deberían haber sido más cuidadosos." },
          { english: "She shouldn't have spoken to him like that.", spanish: "Ella no debería haberle hablado así." }
        ]
      },
      {
        title: "Acordar planes o arreglos 📅",
        description: "Discutir lo que se ha decidido o planeado.",
        examples: [
          { english: "The meeting should start at 9 AM.", spanish: "La reunión debería comenzar a las 9 AM." },
          { english: "Everyone ought to bring their own equipment.", spanish: "Todos deberían traer su propio equipo." },
          { english: "We should have all the documents ready by Friday.", spanish: "Deberíamos tener todos los documentos listos para el viernes." }
        ]
      }
    ]
  },
  examples: [
    { english: "You should eat more fruits and vegetables.", spanish: "Deberías comer más frutas y verduras." },
    { english: "We ought to arrive early for the concert.", spanish: "Deberíamos llegar temprano al concierto." },
    { english: "Should I tell her the truth?", spanish: "¿Debería decirle la verdad?" },
    { english: "They shouldn't spend all their money on luxuries.", spanish: "No deberían gastar todo su dinero en lujos." },
    { english: "You ought not to drive when you're tired.", spanish: "No deberías conducir cuando estás cansado." },
    { english: "She should have studied harder for the exam.", spanish: "Ella debería haber estudiado más para el examen." },
    { english: "The train should arrive in 10 minutes.", spanish: "El tren debería llegar en 10 minutos." },
    { english: "Everyone ought to have equal opportunities.", spanish: "Todos deberían tener igualdad de oportunidades." }
  ],
  timeExpressions: [
    { word: "now/right away", description: "ahora/enseguida (para consejos inmediatos)" },
    { word: "soon/as soon as possible", description: "pronto/tan pronto como sea posible (para acciones recomendadas con cierta urgencia)" },
    { word: "always/never", description: "siempre/nunca (para consejos o responsabilidades generales)" },
    { word: "by + time/date", description: "para + hora/fecha (para expectativas con plazo)" },
    { word: "should have + past participle", description: "para críticas o arrepentimientos sobre el pasado" },
    { word: "ought to have + past participle", description: "para críticas o arrepentimientos sobre el pasado (más formal)" },
    { word: "in the future", description: "en el futuro (para consejos a largo plazo)" },
    { word: "these days/nowadays", description: "en estos días/hoy en día (para recomendaciones contemporáneas)" },
    { word: "from now on", description: "de ahora en adelante (para consejos continuos)" },
    { word: "in this case/situation", description: "en este caso/situación (para consejos específicos)" }
  ],
  tips: [
    {
      title: "Should vs. Ought to",
      content: "Aunque son muy similares en significado, 'should' es mucho más común en el habla cotidiana. 'Ought to' tiende a usarse en contextos más formales y tiene un ligero matiz de obligación moral.",
      emoji: "⚖️"
    },
    {
      title: "Should vs. Must/Have to",
      content: "'Should' expresa una recomendación o una obligación moral, pero implica que hay opción. 'Must/Have to' expresa una obligación más fuerte o necesidad y sugiere que no hay otra alternativa.",
      emoji: "💪"
    },
    {
      title: "Should have + participio",
      content: "Para hablar de arrepentimientos o críticas sobre acciones pasadas, usa 'should have + participio' (ej: 'You should have told me'). Esto indica que algo no se hizo pero habría sido lo correcto hacerlo.",
      emoji: "⏮️"
    },
    {
      title: "Ought to en preguntas",
      content: "Las preguntas con 'ought to' son muy poco comunes y suenan bastante formales. Para preguntas sobre consejos o recomendaciones, se usa generalmente 'should': 'Should I call him?' (no 'Ought I to call him?').",
      emoji: "❓"
    }
  ],
  commonMistakes: [
    {
      incorrect: "You should to study more.",
      correct: "You should study more.",
      explanation: "Después de 'should', el verbo va en forma base sin 'to'."
    },
    {
      incorrect: "I ought study harder.",
      correct: "I ought to study harder.",
      explanation: "'Ought' siempre va seguido de 'to' antes del verbo."
    },
    {
      incorrect: "They shouldn't to go there.",
      correct: "They shouldn't go there.",
      explanation: "Después de 'shouldn't', el verbo va en forma base sin 'to'."
    },
    {
      incorrect: "Ought you to call her?",
      correct: "Should you call her?",
      explanation: "Las preguntas con 'ought to' son muy poco comunes. Es mejor usar 'should'."
    },
    {
      incorrect: "You should went to the doctor.",
      correct: "You should have gone to the doctor.",
      explanation: "Para hablar de consejos para acciones pasadas, usa 'should have + participio', no 'should + pasado'."
    }
  ]
};
