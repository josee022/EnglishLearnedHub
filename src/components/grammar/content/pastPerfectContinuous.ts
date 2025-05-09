import { GrammarContent } from '../../../types/grammar';

export const pastPerfectContinuousContent: GrammarContent = {
  id: 'past-perfect-continuous',
  title: 'Past Perfect Continuous',
  introduction: {
    text: 'El Past Perfect Continuous (también llamado Past Perfect Progressive) se utiliza para describir acciones que habían estado ocurriendo continuamente hasta un momento específico en el pasado. Este tiempo verbal enfatiza la duración o el proceso continuo de la acción hasta ese punto anterior.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + had + been + verbo en gerundio (-ing)</p>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>had</strong> como auxiliar para todos los sujetos (I, you, he, she, it, we, they)</li>
            <li>Seguido de <strong>been</strong> (el participio pasado de "be")</li>
            <li>Y finalmente el <strong>verbo principal en gerundio</strong> (con terminación -ing)</li>
          </ul>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en singular</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">had been working</span> on the project for three hours when you called.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">had been studying</span> English for two years before he moved to London.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">had been waiting</span> for the bus for 20 minutes when it finally arrived.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en plural</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">had been living</span> in Madrid for five years before we moved to Barcelona.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">had been playing</span> football all afternoon when it started to rain.</p>
            <p>The scientists <span class="text-green-600 dark:text-green-400 font-bold">had been researching</span> the disease for decades before they found a cure.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'d</strong> es la forma contraída de <strong>had</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>had been</strong> working → I<strong>'d been</strong> working</li>
            <li>She <strong>had been</strong> waiting → She<strong>'d been</strong> waiting</li>
            <li>They <strong>had been</strong> playing → They<strong>'d been</strong> playing</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + had + not + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en singular</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">had not been sleeping</span> well before I consulted the doctor.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">hadn't been feeling</span> well for days when he finally decided to see a doctor.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">had not been working</span> there long before the company closed.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en plural</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">hadn't been paying</span> attention to the signs before it was too late.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">had not been using</span> the equipment properly prior to the accident.</p>
            <p>The children <span class="text-red-600 dark:text-red-400 font-bold">hadn't been behaving</span> well before you arrived.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída negativa:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">La forma contraída negativa <strong>hadn't been</strong> se usa frecuentemente en lugar de <strong>had not been</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>had not been</strong> working → I <strong>hadn't been</strong> working</li>
            <li>She <strong>had not been</strong> waiting → She <strong>hadn't been</strong> waiting</li>
            <li>They <strong>had not been</strong> playing → They <strong>hadn't been</strong> playing</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Had + sujeto + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con sujetos en singular</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had I been talking</span> too much before you interrupted?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had he been working</span> there for long when you met him?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had she been studying</span> English before she moved to London?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con sujetos en plural</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had we been living</span> here for ten years when you were born?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had they been waiting</span> long when the bus finally arrived?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had the children been playing</span> outside all day before it started to rain?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>had</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>hadn't</strong>.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> En las respuestas cortas, no necesitamos repetir "been" ni el verbo principal.</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>How long had</strong> you been waiting when the train arrived?</li>
            <li><strong>What had</strong> she been doing before you called?</li>
            <li><strong>Why had</strong> they been arguing when you walked in?</li>
            <li><strong>Where had</strong> he been living before he moved to New York?</li>
            <li><strong>Since when had</strong> you been feeling unwell?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "She had been studying for three hours when her friend called.", spanish: "Ella había estado estudiando durante tres horas cuando su amigo llamó." },
      { english: "We hadn't been waiting long when the bus arrived.", spanish: "No habíamos estado esperando mucho tiempo cuando llegó el autobús." },
      { english: "Had they been working together before they started this company?", spanish: "¿Habían estado trabajando juntos antes de empezar esta empresa?" },
      { english: "I had been living in Spain for five years before I moved to France.", spanish: "Había estado viviendo en España durante cinco años antes de mudarme a Francia." }
    ]
  },
  uses: {
    description: "El Past Perfect Continuous tiene usos específicos que lo distinguen de otros tiempos verbales del pasado:",
    useCases: [
      {
        title: "Acciones continuas hasta un momento del pasado ⏱️",
        description: "Para enfatizar que una acción había estado ocurriendo continuamente hasta un punto específico en el pasado.",
        examples: [
          { english: "I had been working for five hours when I decided to take a break.", spanish: "Había estado trabajando durante cinco horas cuando decidí tomar un descanso." },
          { english: "She had been teaching at the university for ten years when she got the promotion.", spanish: "Ella había estado enseñando en la universidad durante diez años cuando obtuvo el ascenso." },
          { english: "They had been trying to solve the problem for weeks before they found the solution.", spanish: "Habían estado intentando resolver el problema durante semanas antes de encontrar la solución." }
        ]
      },
      {
        title: "Explicación de situaciones pasadas 💡",
        description: "Para explicar el motivo de una situación en el pasado como resultado de una acción continua anterior.",
        examples: [
          { english: "He was tired because he had been working all night.", spanish: "Estaba cansado porque había estado trabajando toda la noche." },
          { english: "The ground was wet. It had been raining.", spanish: "El suelo estaba mojado. Había estado lloviendo." },
          { english: "Her eyes were red because she had been crying.", spanish: "Sus ojos estaban rojos porque había estado llorando." }
        ]
      },
      {
        title: "Énfasis en la duración y el esfuerzo 💪",
        description: "Para enfatizar el tiempo o esfuerzo que se había invertido en algo hasta un momento del pasado.",
        examples: [
          { english: "By the time they reached the summit, they had been climbing for seven hours.", spanish: "Para cuando alcanzaron la cumbre, habían estado escalando durante siete horas." },
          { english: "The author had been working on his novel for ten years before it was finally published.", spanish: "El autor había estado trabajando en su novela durante diez años antes de que finalmente se publicara." },
          { english: "They had been saving money for years before they could afford to buy a house.", spanish: "Habían estado ahorrando dinero durante años antes de poder permitirse comprar una casa." }
        ]
      },
      {
        title: "Acciones interrumpidas en el pasado ⛔",
        description: "Para acciones que habían estado en progreso y fueron interrumpidas por otro evento en el pasado.",
        examples: [
          { english: "I had been watching TV when the power went out.", spanish: "Había estado viendo la televisión cuando se fue la luz." },
          { english: "She had been sleeping when the phone rang.", spanish: "Ella había estado durmiendo cuando sonó el teléfono." },
          { english: "We had been discussing the project when the boss walked in.", spanish: "Habíamos estado discutiendo el proyecto cuando entró el jefe." }
        ]
      },
      {
        title: "Situaciones repetitivas o habituales hasta un punto del pasado 🔄",
        description: "Para describir hábitos o situaciones repetitivas que habían estado ocurriendo hasta un momento específico del pasado.",
        examples: [
          { english: "She had been smoking for 15 years when she decided to quit.", spanish: "Ella había estado fumando durante 15 años cuando decidió dejarlo." },
          { english: "They had been meeting every Thursday for years before they changed the schedule.", spanish: "Habían estado reuniéndose todos los jueves durante años antes de que cambiaran el horario." },
          { english: "He had been taking the same route to work for months when he discovered a shortcut.", spanish: "Él había estado tomando la misma ruta al trabajo durante meses cuando descubrió un atajo." }
        ]
      }
    ]
  },
  examples: [
    { english: "I had been looking for a new job for six months when I got the offer.", spanish: "Había estado buscando un nuevo trabajo durante seis meses cuando recibí la oferta." },
    { english: "They hadn't been following the instructions correctly before the supervisor explained it better.", spanish: "No habían estado siguiendo las instrucciones correctamente antes de que el supervisor lo explicara mejor." },
    { english: "Had you been working on this report before I asked you to?", spanish: "¿Habías estado trabajando en este informe antes de que te lo pidiera?" },
    { english: "By the time we arrived, they had been dancing for hours.", spanish: "Para cuando llegamos, ellos habían estado bailando durante horas." },
    { english: "She was exhausted because she had been running all morning.", spanish: "Estaba agotada porque había estado corriendo toda la mañana." },
    { english: "We knew they had been planning the surprise party for weeks.", spanish: "Sabíamos que habían estado planeando la fiesta sorpresa durante semanas." },
    { english: "How long had you been living in Paris before you learned French?", spanish: "¿Cuánto tiempo habías estado viviendo en París antes de aprender francés?" },
    { english: "The car broke down because it had been making strange noises for days and no one checked it.", spanish: "El coche se averió porque había estado haciendo ruidos extraños durante días y nadie lo revisó." }
  ],
  timeExpressions: [
    { word: "for + período de tiempo", description: "durante (for three hours, for a long time...)" },
    { word: "since + punto específico", description: "desde (since 2015, since Monday...)" },
    { word: "when", description: "cuando (generalmente introduce una interrupción)" },
    { word: "before", description: "antes de" },
    { word: "by the time", description: "para cuando" },
    { word: "until then", description: "hasta entonces" },
    { word: "already", description: "ya" },
    { word: "all day/night/week", description: "todo el día/noche/semana" },
    { word: "how long", description: "cuánto tiempo (en preguntas)" }
  ],
  tips: [
    {
      title: "Past Perfect vs. Past Perfect Continuous",
      content: "El Past Perfect se centra en la compleción o el resultado de una acción anterior a otra en el pasado, mientras que el Past Perfect Continuous enfatiza la duración o el proceso. Compara: 'I had written three emails before lunch' (resultado: 3 emails completos) vs. 'I had been writing emails all morning' (proceso: la actividad continua de escribir).",
      emoji: "⚖️"
    },
    {
      title: "Verbos que rara vez se usan en forma continua",
      content: "Al igual que en otros tiempos continuos, los verbos de estado (know, believe, love, etc.) rara vez se usan en Past Perfect Continuous. En su lugar, usa el Past Perfect: 'I had known him for years' (no 'I had been knowing him').",
      emoji: "🧠"
    },
    {
      title: "Causas y efectos en el pasado",
      content: "El Past Perfect Continuous es excelente para explicar causas de situaciones pasadas: 'She was tired because she had been working all day.' Esto establece una clara relación causa-efecto entre acciones pasadas.",
      emoji: "🔄"
    },
    {
      title: "Traducción al español",
      content: "El Past Perfect Continuous generalmente se traduce al español usando el pluscuamperfecto continuo: 'had been working' = 'había estado trabajando'.",
      emoji: "🌍"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I had been knowing him for years before he moved.",
      correct: "I had known him for years before he moved.",
      explanation: "Los verbos de estado como 'know' rara vez se usan en formas continuas. Usa el Past Perfect simple."
    },
    {
      incorrect: "She had working all day when I called.",
      correct: "She had been working all day when I called.",
      explanation: "Falta 'been' entre 'had' y el gerundio 'working'."
    },
    {
      incorrect: "They had been work on this project for months.",
      correct: "They had been working on this project for months.",
      explanation: "El verbo principal debe estar en forma -ing (gerundio)."
    },
    {
      incorrect: "We had been lived in London for five years before we moved to Paris.",
      correct: "We had been living in London for five years before we moved to Paris.",
      explanation: "En el Past Perfect Continuous, el verbo principal siempre debe estar en forma de gerundio (-ing), no en participio pasado."
    },
    {
      incorrect: "Had been she waiting for long?",
      correct: "Had she been waiting for long?",
      explanation: "En preguntas, el orden correcto es: Had + sujeto + been + verbo-ing."
    },
    {
      incorrect: "I had been writing the report before you had been calling.",
      correct: "I had been writing the report before you called.",
      explanation: "Generalmente, no usamos el Past Perfect Continuous para ambas acciones en una secuencia. Para la acción puntual o más reciente, usamos Past Simple."
    }
  ]
};
