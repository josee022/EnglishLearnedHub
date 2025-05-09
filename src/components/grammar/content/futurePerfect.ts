import { GrammarContent } from '../../../types/grammar';

export const futurePerfectContent: GrammarContent = {
  id: 'future-perfect',
  title: 'Future Perfect',
  introduction: {
    text: 'El Future Perfect se utiliza para hablar de acciones que se habrán completado antes de un momento específico en el futuro. Es esencialmente el "pasado del futuro" y nos ayuda a expresar que algo estará finalizado o logrado para un punto determinado en el futuro.',
    emoji: '🔮'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + have + participio pasado del verbo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos regulares</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will have finished</span> my homework by 8 PM.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will have completed</span> the project by next week.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">will have worked</span> here for five years next month.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">will have waited</span> for two hours by the time we arrive.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos irregulares</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">will have gone</span> home by then.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">will have written</span> three books by the end of the year.</p>
            <p>It <span class="text-green-600 dark:text-green-400 font-bold">will have been</span> ten years since we met.</p>
            <p>The builders <span class="text-green-600 dark:text-green-400 font-bold">will have built</span> the house by Christmas.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>will</strong> para todos los sujetos (I, you, he, she, it, we, they)</li>
            <li>Seguido de <strong>have</strong></li>
            <li>Y finalmente el <strong>participio pasado</strong> del verbo principal:
              <ul class="list-disc pl-5 space-y-1">
                <li>Para verbos regulares: infinitivo + <strong>-ed</strong> (worked, played, studied)</li>
                <li>Para verbos irregulares: tercera forma del verbo (gone, seen, written)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'ll</strong> es la forma contraída de <strong>will</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will have</strong> finished → I<strong>'ll have</strong> finished</li>
            <li>You <strong>will have</strong> completed → You<strong>'ll have</strong> completed</li>
            <li>She <strong>will have</strong> written → She<strong>'ll have</strong> written</li>
            <li>They <strong>will have</strong> waited → They<strong>'ll have</strong> waited</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + not + have + participio pasado del verbo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos regulares</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not have finished</span> by tomorrow.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't have completed</span> the project by the deadline.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">will not have saved</span> enough by then.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">won't have arrived</span> by the time we leave.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos irregulares</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">will not have gone</span> to bed by midnight.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">won't have read</span> the book by Friday.</p>
            <p>It <span class="text-red-600 dark:text-red-400 font-bold">will not have been</span> repaired by next week.</p>
            <p>The students <span class="text-red-600 dark:text-red-400 font-bold">won't have taken</span> their exams by then.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída negativa:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">La forma contraída negativa <strong>won't have</strong> se usa frecuentemente en lugar de <strong>will not have</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will not have</strong> finished → I <strong>won't have</strong> finished</li>
            <li>She <strong>will not have</strong> read → She <strong>won't have</strong> read</li>
            <li>They <strong>will not have</strong> arrived → They <strong>won't have</strong> arrived</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Will + sujeto + have + participio pasado del verbo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con verbos regulares</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I have finished</span> in time?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will you have prepared</span> everything by then?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we have moved</span> to the new office by next month?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will they have completed</span> the project by Friday?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con verbos irregulares</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will he have gone</span> by the time I arrive?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will she have spoken</span> to the manager by tomorrow?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will it have begun</span> before we get there?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will they have taken</span> their exam by next week?</p>
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
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> En las respuestas cortas, no necesitamos repetir "have" ni el participio pasado del verbo principal.</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>How much will</strong> you <strong>have saved</strong> by the end of the year?</li>
            <li><strong>Where will</strong> she <strong>have gone</strong> by the time we arrive?</li>
            <li><strong>How many countries will</strong> they <strong>have visited</strong> by the time they turn 30?</li>
            <li><strong>Why will</strong> he <strong>have left</strong> before the party ends?</li>
            <li><strong>What will</strong> you <strong>have achieved</strong> by this time next year?</li>
            <li><strong>When will</strong> they <strong>have finished</strong> the construction?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "By next month, I will have worked here for five years.", spanish: "Para el próximo mes, habré trabajado aquí durante cinco años." },
      { english: "She won't have finished her thesis by June.", spanish: "Ella no habrá terminado su tesis para junio." },
      { english: "Will they have arrived by the time we get there?", spanish: "¿Habrán llegado para cuando nosotros lleguemos allí?" },
      { english: "By the end of this year, he will have saved enough money to buy a car.", spanish: "Para finales de este año, él habrá ahorrado suficiente dinero para comprar un coche." }
    ]
  },
  uses: {
    description: "El Future Perfect tiene usos específicos que lo distinguen de otras formas de expresar el futuro:",
    useCases: [
      {
        title: "Acciones completadas antes de un momento futuro ⌛",
        description: "Para acciones que se habrán terminado antes de un punto específico en el futuro.",
        examples: [
          { english: "I will have graduated by this time next year.", spanish: "Para esta época del año que viene, me habré graduado." },
          { english: "They will have built the new bridge by 2025.", spanish: "Habrán construido el nuevo puente para 2025." },
          { english: "She will have prepared everything by the time the guests arrive.", spanish: "Ella habrá preparado todo para cuando lleguen los invitados." }
        ]
      },
      {
        title: "Duración hasta un momento futuro ⏱️",
        description: "Para expresar cuánto tiempo una situación habrá continuado hasta un punto en el futuro (a menudo con 'for' o 'since').",
        examples: [
          { english: "By December, I will have lived in this city for ten years.", spanish: "Para diciembre, habré vivido en esta ciudad durante diez años." },
          { english: "Next month, they will have been married for 25 years.", spanish: "El próximo mes, habrán estado casados durante 25 años." },
          { english: "By the time he retires, he will have worked here for over 40 years.", spanish: "Para cuando se jubile, habrá trabajado aquí durante más de 40 años." }
        ]
      },
      {
        title: "Logros y metas futuras 🏆",
        description: "Para hablar de logros o metas que se habrán alcanzado en un punto futuro.",
        examples: [
          { english: "By the end of my career, I will have helped thousands of patients.", spanish: "Para el final de mi carrera, habré ayudado a miles de pacientes." },
          { english: "By 2030, scientists will have found a cure for many types of cancer.", spanish: "Para 2030, los científicos habrán encontrado una cura para muchos tipos de cáncer." },
          { english: "She will have published three books by the time she's 30.", spanish: "Ella habrá publicado tres libros para cuando tenga 30 años." }
        ]
      },
      {
        title: "Predicciones sobre situaciones futuras 🔮",
        description: "Para hacer predicciones sobre situaciones que se habrán desarrollado hasta cierto punto en el futuro.",
        examples: [
          { english: "By next summer, house prices will have risen by 15%.", spanish: "Para el próximo verano, los precios de las casas habrán subido un 15%." },
          { english: "The polar ice caps will have melted significantly by 2050.", spanish: "Los casquetes polares se habrán derretido significativamente para 2050." },
          { english: "By the time this construction is finished, they will have spent over a million dollars.", spanish: "Para cuando terminen esta construcción, habrán gastado más de un millón de dólares." }
        ]
      },
      {
        title: "Suposiciones sobre el pasado desde una perspectiva futura 💭",
        description: "Para hacer suposiciones sobre algo que probablemente habrá ocurrido en un momento futuro.",
        examples: [
          { english: "Don't call her now. She will have gone to bed already.", spanish: "No la llames ahora. Ya se habrá ido a la cama." },
          { english: "They will have arrived home by now, so you can call them.", spanish: "Ya habrán llegado a casa, así que puedes llamarlos." },
          { english: "He will have heard the news by the time you see him tomorrow.", spanish: "Él ya habrá oído la noticia para cuando lo veas mañana." }
        ]
      }
    ]
  },
  examples: [
    { english: "By the time you get home, I will have cooked dinner.", spanish: "Para cuando llegues a casa, yo habré preparado la cena." },
    { english: "The train will have left by the time we reach the station.", spanish: "El tren habrá salido para cuando lleguemos a la estación." },
    { english: "Will you have finished your homework by dinner time?", spanish: "¿Habrás terminado tus deberes para la hora de cenar?" },
    { english: "She won't have written the report by tomorrow morning.", spanish: "Ella no habrá escrito el informe para mañana por la mañana." },
    { english: "By the end of this month, I will have saved $1000.", spanish: "Para finales de este mes, habré ahorrado 1000 dólares." },
    { english: "How many countries will you have visited by the age of 30?", spanish: "¿Cuántos países habrás visitado a la edad de 30 años?" },
    { english: "They will have completed the project before the deadline.", spanish: "Habrán completado el proyecto antes de la fecha límite." },
    { english: "By next year, we will have lived here for a decade.", spanish: "Para el próximo año, habremos vivido aquí durante una década." }
  ],
  timeExpressions: [
    { word: "by + punto en el futuro", description: "para + punto en el futuro (by next year = para el próximo año)" },
    { word: "by the time", description: "para cuando" },
    { word: "before + punto/evento futuro", description: "antes de + punto/evento futuro" },
    { word: "by then", description: "para entonces" },
    { word: "by the end of + período", description: "para finales de + período" },
    { word: "by this time tomorrow/next week/next year", description: "para esta hora mañana/la próxima semana/el próximo año" },
    { word: "for + período", description: "durante + período (se usa para expresar duración)" },
    { word: "since + punto de inicio", description: "desde + punto de inicio (se usa para expresar duración)" }
  ],
  tips: [
    {
      title: "Future Perfect vs. Future Simple",
      content: "El Future Perfect se centra en la compleción de una acción antes de un momento futuro, mientras que el Future Simple simplemente indica que algo sucederá. Compara: 'I will have finished by 9 PM' (estaré terminado antes de las 9) vs. 'I will finish at 9 PM' (terminaré a las 9).",
      emoji: "⚖️"
    },
    {
      title: "Future Perfect vs. Present Perfect",
      content: "El Future Perfect es similar al Present Perfect, pero desde una perspectiva futura. Present Perfect: 'I have lived here for 10 years' (hasta ahora). Future Perfect: 'By next year, I will have lived here for 11 years' (hasta un punto futuro).",
      emoji: "🔄"
    },
    {
      title: "Diferencia con el Future Perfect Continuous",
      content: "El Future Perfect enfatiza la compleción o el resultado, mientras que el Future Perfect Continuous enfatiza la duración o el proceso. Compara: 'By June, I will have written three books' (resultado: tres libros) vs. 'By June, I will have been writing for two years' (duración del proceso).",
      emoji: "📏"
    },
    {
      title: "El uso de 'by'",
      content: "La preposición 'by' es muy común con el Future Perfect porque marca claramente el límite temporal hasta el cual la acción se habrá completado. Sin 'by' u otra marca temporal similar, la frase puede resultar poco clara.",
      emoji: "🔍"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I will have finish the project by Friday.",
      correct: "I will have finished the project by Friday.",
      explanation: "Después de 'have', debemos usar el participio pasado del verbo (finished), no el infinitivo (finish)."
    },
    {
      incorrect: "By next year, I will live here for ten years.",
      correct: "By next year, I will have lived here for ten years.",
      explanation: "Para expresar la duración hasta un punto futuro, necesitamos el Future Perfect, no el Future Simple."
    },
    {
      incorrect: "She will had completed the task by then.",
      correct: "She will have completed the task by then.",
      explanation: "La estructura correcta es 'will have + participio pasado', no 'will had'."
    },
    {
      incorrect: "When you will arrive, I will have prepared dinner.",
      correct: "When you arrive, I will have prepared dinner.",
      explanation: "Después de 'when' y otras conjunciones temporales, usamos el presente simple para referirnos al futuro, no 'will'."
    },
    {
      incorrect: "By the end of this year, he will have been saving enough money.",
      correct: "By the end of this year, he will have saved enough money.",
      explanation: "Para acciones completadas, usamos Future Perfect, no Future Perfect Continuous (a menos que queramos enfatizar la duración del proceso)."
    },
    {
      incorrect: "Will you have went to London by next month?",
      correct: "Will you have gone to London by next month?",
      explanation: "El participio pasado de 'go' es 'gone', no 'went' (que es el pasado simple)."
    }
  ]
};
