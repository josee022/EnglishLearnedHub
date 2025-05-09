import { GrammarContent } from '../../../types/grammar';

export const futurePerfectContinuousContent: GrammarContent = {
  id: 'future-perfect-continuous',
  title: 'Future Perfect Continuous',
  introduction: {
    text: 'El Future Perfect Continuous (también llamado Future Perfect Progressive) se utiliza para expresar acciones que habrán estado ocurriendo continuamente hasta un momento específico en el futuro. Es uno de los tiempos verbales más complejos y sofisticados del inglés, ya que combina ideas de futuro, perfecto y continuo.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + have + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will have been working</span> here for five years by next June.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will have been living</span> in this house for a decade by 2025.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will have been studying</span> English for six years by the time I graduate.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will have been waiting</span> for three hours by the time the plane lands.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">will have been traveling</span> for 24 hours by the time you arrive.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">will have been teaching</span> for 20 years by the time he retires.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">will have been running</span> the company for five years next month.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">will have been building</span> the bridge for two years by Christmas.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>will</strong> para todos los sujetos (I, you, he, she, it, we, they)</li>
            <li>Seguido de <strong>have</strong></li>
            <li>Después <strong>been</strong> (el participio pasado de "be")</li>
            <li>Y finalmente el <strong>verbo principal en gerundio</strong> (-ing)</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'ll</strong> es la forma contraída de <strong>will</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will have been</strong> working → I<strong>'ll have been</strong> working</li>
            <li>You <strong>will have been</strong> traveling → You<strong>'ll have been</strong> traveling</li>
            <li>She <strong>will have been</strong> running → She<strong>'ll have been</strong> running</li>
            <li>They <strong>will have been</strong> building → They<strong>'ll have been</strong> building</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + not + have + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not have been working</span> here for long by then.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't have been living</span> together for a year yet.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not have been sleeping</span> for long when the alarm goes off.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't have been waiting</span> for more than an hour by the time you arrive.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">will not have been studying</span> hard enough by the time exams arrive.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">won't have been doing</span> that job for very long.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">will not have been feeling</span> well for days.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">won't have been working</span> on this project for more than a month by the deadline.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída negativa:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">La forma contraída negativa <strong>won't have been</strong> se usa frecuentemente en lugar de <strong>will not have been</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will not have been</strong> working → I <strong>won't have been</strong> working</li>
            <li>She <strong>will not have been</strong> feeling → She <strong>won't have been</strong> feeling</li>
            <li>They <strong>will not have been</strong> working → They <strong>won't have been</strong> working</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Will + sujeto + have + been + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con sujetos en primera persona</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I have been working</span> here for five years by next June?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we have been living</span> here long enough to apply for residency?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I have been studying</span> for six hours by midnight?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we have been traveling</span> for more than 12 hours?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con otros sujetos</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will you have been waiting</span> long by the time I arrive?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will he have been driving</span> for too long without a break?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will she have been working</span> on this project for more than a year?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will they have been building</span> the house for two years by then?</p>
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
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> En las respuestas cortas, no necesitamos repetir "have been" ni el verbo principal en -ing.</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>How long will</strong> you <strong>have been working</strong> here by next year?</li>
            <li><strong>What will</strong> she <strong>have been doing</strong> all this time?</li>
            <li><strong>Why will</strong> they <strong>have been studying</strong> for so many hours?</li>
            <li><strong>Where will</strong> he <strong>have been living</strong> for the past decade?</li>
            <li><strong>Since when will</strong> you <strong>have been learning</strong> English by the time you graduate?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "By December, I will have been living in Madrid for three years.", spanish: "Para diciembre, habré estado viviendo en Madrid durante tres años." },
      { english: "She won't have been working here for long by the time she gets promoted.", spanish: "Ella no habrá estado trabajando aquí durante mucho tiempo para cuando la asciendan." },
      { english: "Will they have been traveling for more than 24 hours by the time they arrive?", spanish: "¿Habrán estado viajando durante más de 24 horas para cuando lleguen?" },
      { english: "By next month, he'll have been driving that car for ten years.", spanish: "Para el próximo mes, él habrá estado conduciendo ese coche durante diez años." }
    ]
  },
  uses: {
    description: "El Future Perfect Continuous tiene usos específicos que lo distinguen de otros tiempos verbales del futuro:",
    useCases: [
      {
        title: "Acciones continuas hasta un momento futuro ⏱️",
        description: "Para hablar de acciones que habrán estado ocurriendo continuamente hasta un punto específico en el futuro, enfatizando la duración.",
        examples: [
          { english: "By the time I retire, I will have been working here for 30 years.", spanish: "Para cuando me jubile, habré estado trabajando aquí durante 30 años." },
          { english: "Next week, they will have been dating for five years.", spanish: "La próxima semana, habrán estado saliendo durante cinco años." },
          { english: "By the end of this month, she will have been learning to play the piano for two years.", spanish: "Para finales de este mes, ella habrá estado aprendiendo a tocar el piano durante dos años." }
        ]
      },
      {
        title: "Enfatizar el esfuerzo o proceso continuo 💪",
        description: "Para resaltar el esfuerzo, proceso o dedicación que habrá habido hasta un momento futuro.",
        examples: [
          { english: "By the time we finish this project, we will have been working on it for over a year.", spanish: "Para cuando terminemos este proyecto, habremos estado trabajando en él durante más de un año." },
          { english: "She will have been practicing for hours before the concert begins.", spanish: "Ella habrá estado practicando durante horas antes de que comience el concierto." },
          { english: "By graduation, he will have been studying medicine for six years.", spanish: "Para la graduación, él habrá estado estudiando medicina durante seis años." }
        ]
      },
      {
        title: "Expresar causas de situaciones futuras 🔄",
        description: "Para explicar las causas de situaciones que existirán en el futuro como resultado de una acción prolongada.",
        examples: [
          { english: "By the end of the marathon, you will have been running for over four hours, so you'll be exhausted.", spanish: "Para el final del maratón, habrás estado corriendo durante más de cuatro horas, así que estarás agotado." },
          { english: "She will have been working all day by the time she gets home, so she might not want to go out.", spanish: "Ella habrá estado trabajando todo el día para cuando llegue a casa, así que puede que no quiera salir." },
          { english: "They will have been traveling for 48 hours by the time they arrive, so they'll need to rest.", spanish: "Habrán estado viajando durante 48 horas para cuando lleguen, así que necesitarán descansar." }
        ]
      },
      {
        title: "Tendencias y desarrollos hasta un momento futuro 📈",
        description: "Para hablar de tendencias o procesos que habrán estado ocurriendo hasta un punto en el futuro.",
        examples: [
          { english: "By 2030, sea levels will have been rising steadily for decades.", spanish: "Para 2030, los niveles del mar habrán estado subiendo constantemente durante décadas." },
          { english: "The company will have been growing at a rate of 5% per year by the time it celebrates its 25th anniversary.", spanish: "La empresa habrá estado creciendo a un ritmo del 5% anual para cuando celebre su 25º aniversario." },
          { english: "Scientists will have been researching this disease for over 50 years by the time they find a cure.", spanish: "Los científicos habrán estado investigando esta enfermedad durante más de 50 años para cuando encuentren una cura." }
        ]
      },
      {
        title: "Acciones repetitivas hasta un punto futuro 🔄",
        description: "Para actividades repetitivas que se habrán estado haciendo hasta un momento específico en el futuro.",
        examples: [
          { english: "By Christmas, I will have been going to the gym three times a week for a whole year.", spanish: "Para Navidad, habré estado yendo al gimnasio tres veces por semana durante un año entero." },
          { english: "She will have been taking these pills every day for six months by the time her treatment ends.", spanish: "Ella habrá estado tomando estas pastillas todos los días durante seis meses para cuando termine su tratamiento." },
          { english: "They will have been meeting every Thursday to discuss progress for over a year by the time the project is completed.", spanish: "Habrán estado reuniéndose todos los jueves para discutir el progreso durante más de un año para cuando se complete el proyecto." }
        ]
      }
    ]
  },
  examples: [
    { english: "By next summer, I will have been studying English for seven years.", spanish: "Para el próximo verano, habré estado estudiando inglés durante siete años." },
    { english: "They won't have been living in that house for very long when they have to move again.", spanish: "No habrán estado viviendo en esa casa durante mucho tiempo cuando tengan que mudarse de nuevo." },
    { english: "Will you have been working at this company for five years by then?", spanish: "¿Habrás estado trabajando en esta empresa durante cinco años para entonces?" },
    { english: "By the time he retires, he will have been teaching for over 40 years.", spanish: "Para cuando se jubile, habrá estado enseñando durante más de 40 años." },
    { english: "In December, we will have been waiting for a response for six months.", spanish: "En diciembre, habremos estado esperando una respuesta durante seis meses." },
    { english: "How long will she have been practicing the violin by the time of the concert?", spanish: "¿Cuánto tiempo habrá estado practicando el violín para el momento del concierto?" },
    { english: "By this time tomorrow, I will have been traveling for 24 hours straight.", spanish: "Para esta hora mañana, habré estado viajando durante 24 horas seguidas." },
    { english: "The children will have been sleeping for hours by the time we get home.", spanish: "Los niños habrán estado durmiendo durante horas para cuando lleguemos a casa." }
  ],
  timeExpressions: [
    { word: "by + punto en el futuro", description: "para + punto en el futuro (by next year = para el próximo año)" },
    { word: "by the time", description: "para cuando" },
    { word: "for + período de tiempo", description: "durante + período de tiempo (se usa para expresar duración)" },
    { word: "since + punto de inicio", description: "desde + punto de inicio (se usa para expresar duración)" },
    { word: "by the end of + período", description: "para finales de + período" },
    { word: "by this time tomorrow/next week/next year", description: "para esta hora mañana/la próxima semana/el próximo año" },
    { word: "when", description: "cuando (a menudo introduce una interrupción)" },
    { word: "how long", description: "cuánto tiempo (en preguntas)" }
  ],
  tips: [
    {
      title: "Future Perfect Continuous vs. Future Perfect",
      content: "El Future Perfect Continuous enfatiza la duración o el proceso, mientras que el Future Perfect enfatiza la compleción o el resultado. Compara: 'By December, I will have been writing this book for two years' (proceso, duración) vs. 'By December, I will have written this book' (resultado, compleción).",
      emoji: "⚖️"
    },
    {
      title: "Verbos que rara vez se usan en forma continua",
      content: "Al igual que en otros tiempos continuos, los verbos de estado (know, believe, want, etc.) rara vez se usan en Future Perfect Continuous. En su lugar, usa el Future Perfect: 'By next year, I will have known him for a decade' (no 'I will have been knowing').",
      emoji: "🧠"
    },
    {
      title: "Expresiones temporales necesarias",
      content: "Este tiempo verbal casi siempre requiere una referencia temporal concreta (by + fecha/hora, by the time, for + período) para establecer claramente el punto futuro hasta el cual la acción habrá estado ocurriendo.",
      emoji: "🕒"
    },
    {
      title: "Uso poco frecuente pero sofisticado",
      content: "El Future Perfect Continuous es uno de los tiempos menos usados en inglés debido a su complejidad, pero dominar su uso demuestra un nivel muy avanzado del idioma y permite expresar matices temporales sofisticados.",
      emoji: "🏆"
    }
  ],
  commonMistakes: [
    {
      incorrect: "By next year, I will working here for five years.",
      correct: "By next year, I will have been working here for five years.",
      explanation: "Falta 'have been' entre 'will' y el gerundio."
    },
    {
      incorrect: "She will have been know him for years by then.",
      correct: "She will have known him for years by then.",
      explanation: "Los verbos de estado como 'know' rara vez se usan en formas continuas. Usa el Future Perfect."
    },
    {
      incorrect: "They will have been work on this project for months.",
      correct: "They will have been working on this project for months.",
      explanation: "El verbo principal debe estar en forma -ing (gerundio)."
    },
    {
      incorrect: "When you will have been arriving, I'll have been waiting for an hour.",
      correct: "When you arrive, I'll have been waiting for an hour.",
      explanation: "Después de 'when' y otras conjunciones temporales, usamos el presente simple para referirnos al futuro, no una forma con 'will'."
    },
    {
      incorrect: "By 2025, he will been working here for 20 years.",
      correct: "By 2025, he will have been working here for 20 years.",
      explanation: "Falta 'have' entre 'will' y 'been'."
    },
    {
      incorrect: "Will they have been build the house by next year?",
      correct: "Will they have been building the house by next year?",
      explanation: "El verbo principal debe estar en gerundio (-ing), no en infinitivo."
    }
  ]
};
