import { GrammarContent } from '../../../types/grammar';

export const passiveFutureContent: GrammarContent = {
  id: 'passive-future',
  title: 'Voz Pasiva en Futuro',
  introduction: {
    text: 'La voz pasiva en futuro se utiliza para hablar de acciones que ocurrirán en el futuro, enfatizando el objeto que recibirá la acción o la acción misma, en lugar de quien la realizará. Es útil cuando queremos hablar de planes, predicciones o resultados futuros centrando la atención en quien o lo que recibe la acción.',
    emoji: '🔮'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Future Simple Passive: Sujeto (receptor) + will be + participio pasado (+ by + agente)</p>
        <p class="font-medium">Future Perfect Passive: Sujeto (receptor) + will have been + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Future Simple Passive</p>
            <p>The letter <span class="text-green-600 dark:text-green-400 font-bold">will be sent</span> tomorrow.</p>
            <p>The house <span class="text-green-600 dark:text-green-400 font-bold">will be sold</span> next month.</p>
            <p>The project <span class="text-green-600 dark:text-green-400 font-bold">will be completed</span> by June.</p>
            <p>The new hospital <span class="text-green-600 dark:text-green-400 font-bold">will be built</span> next year.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">will be informed</span> of any changes.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Future Perfect Passive</p>
            <p>The report <span class="text-green-600 dark:text-green-400 font-bold">will have been written</span> by Friday.</p>
            <p>The bridge <span class="text-green-600 dark:text-green-400 font-bold">will have been repaired</span> by next month.</p>
            <p>All the arrangements <span class="text-green-600 dark:text-green-400 font-bold">will have been made</span> before they arrive.</p>
            <p>The book <span class="text-green-600 dark:text-green-400 font-bold">will have been published</span> by the end of the year.</p>
            <p>The work <span class="text-green-600 dark:text-green-400 font-bold">will have been finished</span> by the time you get back.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Future Simple Passive:</strong> sujeto + will be + participio pasado</li>
            <li><strong>Future Perfect Passive:</strong> sujeto + will have been + participio pasado</li>
            <li>Future Simple Passive se usa para acciones que ocurrirán en el futuro</li>
            <li>Future Perfect Passive se usa para acciones que se habrán completado antes de un momento específico en el futuro</li>
            <li>El agente (introducido por "by") es opcional y a menudo se omite si es obvio o desconocido</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Transformación de Activa a Pasiva:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (Future Simple):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>They will send the letter tomorrow.</li>
                <li>The agency will sell the house next month.</li>
                <li>The team will complete the project by June.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (Future Simple):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The letter will be sent tomorrow.</li>
                <li>The house will be sold next month.</li>
                <li>The project will be completed by June.</li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (Future Perfect):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>He will have written the report by Friday.</li>
                <li>They will have repaired the bridge by next month.</li>
                <li>We will have made all the arrangements before they arrive.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (Future Perfect):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The report will have been written by Friday.</li>
                <li>The bridge will have been repaired by next month.</li>
                <li>All the arrangements will have been made before they arrive.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Future Simple Passive: Sujeto (receptor) + will not be + participio pasado (+ by + agente)</p>
        <p class="font-medium">Future Perfect Passive: Sujeto (receptor) + will not have been + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Future Simple Passive Negativo</p>
            <p>The letter <span class="text-red-600 dark:text-red-400 font-bold">will not be sent</span> until Monday.</p>
            <p>The house <span class="text-red-600 dark:text-red-400 font-bold">won't be sold</span> this year.</p>
            <p>The project <span class="text-red-600 dark:text-red-400 font-bold">will not be completed</span> on time.</p>
            <p>The new hospital <span class="text-red-600 dark:text-red-400 font-bold">won't be built</span> in this area.</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">will not be allowed</span> to enter without a ticket.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Future Perfect Passive Negativo</p>
            <p>The report <span class="text-red-600 dark:text-red-400 font-bold">will not have been written</span> by Friday.</p>
            <p>The bridge <span class="text-red-600 dark:text-red-400 font-bold">won't have been repaired</span> before the rainy season.</p>
            <p>All the arrangements <span class="text-red-600 dark:text-red-400 font-bold">will not have been made</span> in time.</p>
            <p>The book <span class="text-red-600 dark:text-red-400 font-bold">won't have been published</span> before the author's birthday.</p>
            <p>The work <span class="text-red-600 dark:text-red-400 font-bold">will not have been finished</span> by the time the boss returns.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, se usan las siguientes contracciones:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>will not → <strong>won't</strong></li>
            <li>will not be → <strong>won't be</strong></li>
            <li>will not have been → <strong>won't have been</strong></li>
          </ul>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔄 Transformación de Activa a Pasiva (negativa):</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Voz Activa (Future Simple Negativo):</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>They will not send the letter until Monday.</li>
                <li>The agency won't sell the house this year.</li>
                <li>The team will not complete the project on time.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Voz Pasiva (Future Simple Negativo):</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>The letter will not be sent until Monday.</li>
                <li>The house won't be sold this year.</li>
                <li>The project will not be completed on time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Future Simple Passive: Will + sujeto (receptor) + be + participio pasado (+ by + agente)?</p>
        <p class="font-medium">Future Perfect Passive: Will + sujeto (receptor) + have been + participio pasado (+ by + agente)?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Future Simple Passive Interrogativo</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the letter be sent</span> tomorrow?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the house be sold</span> before Christmas?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the project be completed</span> on time?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the new hospital be built</span> in this area?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we be allowed</span> to visit the site?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Future Perfect Passive Interrogativo</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the report have been written</span> by Friday?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the bridge have been repaired</span> by next month?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will all the arrangements have been made</span> before they arrive?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the book have been published</span> by the end of the year?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will the work have been finished</span> by the time we get back?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>Yes, it will.</li>
                <li>Yes, they will.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>No, it won't.</li>
                <li>No, they won't.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>When will</strong> the museum <strong>be opened</strong> to the public?</li>
            <li><strong>Where will</strong> the new supermarket <strong>be built</strong>?</li>
            <li><strong>How will</strong> this problem <strong>be solved</strong>?</li>
            <li><strong>By whom will</strong> the ceremony <strong>be organized</strong>?</li>
            <li><strong>Why will</strong> these changes <strong>be implemented</strong>?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "The new airport will be completed by 2025.", spanish: "El nuevo aeropuerto será completado para 2025." },
      { english: "The tickets won't be delivered until next week.", spanish: "Las entradas no serán entregadas hasta la próxima semana." },
      { english: "Will the meeting be held in the main conference room?", spanish: "¿La reunión se celebrará en la sala principal de conferencias?" },
      { english: "All the preparations will have been made before the guests arrive.", spanish: "Todos los preparativos habrán sido hechos antes de que lleguen los invitados." }
    ]
  },
  uses: {
    description: "La voz pasiva en futuro tiene usos específicos que la hacen preferible a la voz activa en ciertas situaciones:",
    useCases: [
      {
        title: "Planes y proyectos futuros 📅",
        description: "Para hablar de planes, proyectos o desarrollos futuros cuando el foco está en lo que se va a realizar, no en quién lo va a realizar.",
        examples: [
          { english: "The new shopping center will be opened next month.", spanish: "El nuevo centro comercial será inaugurado el próximo mes." },
          { english: "The Olympic Games will be held in Paris in 2024.", spanish: "Los Juegos Olímpicos se celebrarán en París en 2024." },
          { english: "Five new schools will be built in the region over the next decade.", spanish: "Cinco nuevas escuelas serán construidas en la región durante la próxima década." }
        ]
      },
      {
        title: "Anuncios y comunicados oficiales 📢",
        description: "Para hacer anuncios formales o comunicar decisiones oficiales, especialmente en contextos corporativos o institucionales.",
        examples: [
          { english: "The new policy will be implemented from January 1st.", spanish: "La nueva política será implementada a partir del 1 de enero." },
          { english: "All employees will be informed of the changes next week.", spanish: "Todos los empleados serán informados de los cambios la próxima semana." },
          { english: "The results will be announced on Friday at 3 PM.", spanish: "Los resultados serán anunciados el viernes a las 3 PM." }
        ]
      },
      {
        title: "Predicciones y expectativas 🔮",
        description: "Para hacer predicciones o expresar expectativas sobre resultados futuros, centrándose en lo que ocurrirá.",
        examples: [
          { english: "By 2030, renewable energy will be used in most homes.", spanish: "Para 2030, la energía renovable será utilizada en la mayoría de los hogares." },
          { english: "Automated vehicles will be seen on all major highways within a decade.", spanish: "Los vehículos automatizados se verán en todas las principales autopistas en una década." },
          { english: "The problem will be solved before it causes any serious damage.", spanish: "El problema será resuelto antes de que cause algún daño serio." }
        ]
      },
      {
        title: "Procesos y procedimientos programados ⚙️",
        description: "Para describir procesos o procedimientos que están programados para realizarse en el futuro.",
        examples: [
          { english: "The system will be updated overnight.", spanish: "El sistema será actualizado durante la noche." },
          { english: "All data will be backed up automatically every evening.", spanish: "Todos los datos serán respaldados automáticamente cada noche." },
          { english: "The test results will be analyzed by our laboratory within 48 hours.", spanish: "Los resultados de las pruebas serán analizados por nuestro laboratorio en 48 horas." }
        ]
      },
      {
        title: "Indicar que algo estará completo en un momento futuro 🏁",
        description: "Para expresar que algo estará completado antes de un momento específico en el futuro (con Future Perfect Passive).",
        examples: [
          { english: "The new highway will have been completed by the end of next year.", spanish: "La nueva autopista habrá sido completada para finales del próximo año." },
          { english: "All the arrangements will have been made before the delegation arrives.", spanish: "Todos los arreglos habrán sido hechos antes de que llegue la delegación." },
          { english: "The report will have been written by the time we meet next Tuesday.", spanish: "El informe habrá sido escrito para cuando nos reunamos el próximo martes." }
        ]
      }
    ]
  },
  examples: [
    { english: "The new bridge will be opened by the mayor next month.", spanish: "El nuevo puente será inaugurado por el alcalde el próximo mes." },
    { english: "Your application will be processed within 7 working days.", spanish: "Su solicitud será procesada en un plazo de 7 días hábiles." },
    { english: "Will the concert be cancelled if it rains?", spanish: "¿El concierto será cancelado si llueve?" },
    { english: "The books won't be delivered until next week.", spanish: "Los libros no serán entregados hasta la próxima semana." },
    { english: "All the preparations will have been completed before the guests arrive.", spanish: "Todos los preparativos habrán sido completados antes de que lleguen los invitados." },
    { english: "By this time tomorrow, your order will have been shipped.", spanish: "Para esta hora mañana, su pedido habrá sido enviado." },
    { english: "When will the results be announced?", spanish: "¿Cuándo serán anunciados los resultados?" },
    { english: "The new software won't have been installed by the time you need to use it.", spanish: "El nuevo software no habrá sido instalado para cuando necesites usarlo." }
  ],
  timeExpressions: [
    { word: "tomorrow", description: "mañana" },
    { word: "next week/month/year", description: "la próxima semana/el próximo mes/el próximo año" },
    { word: "in + período futuro (in 2025)", description: "en + período futuro (en 2025)" },
    { word: "by + punto en el futuro", description: "para + punto en el futuro (by next year = para el próximo año)" },
    { word: "before + evento futuro", description: "antes de + evento futuro (before they arrive = antes de que lleguen)" },
    { word: "within + período", description: "en un plazo de + período (within two weeks = en un plazo de dos semanas)" },
    { word: "by the time + presente simple", description: "para cuando + presente simple (by the time we meet = para cuando nos reunamos)" },
    { word: "by the end of + período", description: "para finales de + período (by the end of this month = para finales de este mes)" }
  ],
  tips: [
    {
      title: "Future Simple vs. Future Perfect Passive",
      content: "Usa Future Simple Passive para acciones que ocurrirán en algún momento del futuro ('The building will be renovated next year'). Usa Future Perfect Passive para acciones que estarán completadas antes de un momento específico del futuro ('The building will have been renovated by next Christmas').",
      emoji: "⏱️"
    },
    {
      title: "Uso con Going To",
      content: "También puedes formar la voz pasiva en futuro con 'going to' en lugar de 'will': 'The house is going to be painted next week' en lugar de 'The house will be painted next week'. Esto implica un plan o intención más definida.",
      emoji: "🔄"
    },
    {
      title: "Pasiva en cláusulas condicionales",
      content: "En cláusulas condicionales de primer tipo, la pasiva sigue la regla del condicional: 'If the letter is sent today, it will be received tomorrow' (no 'If the letter will be sent...').",
      emoji: "📩"
    },
    {
      title: "Verbos con dos objetos",
      content: "Con verbos que tienen objeto directo e indirecto (give, tell, send, show, etc.), cualquiera de los dos puede ser el sujeto de la pasiva: 'They will give you a certificate' → 'You will be given a certificate' o 'A certificate will be given to you'.",
      emoji: "🎁"
    }
  ],
  commonMistakes: [
    {
      incorrect: "The letter will sent tomorrow.",
      correct: "The letter will be sent tomorrow.",
      explanation: "Falta el verbo 'be' entre 'will' y el participio pasado."
    },
    {
      incorrect: "The house will be sell next month.",
      correct: "The house will be sold next month.",
      explanation: "Se debe usar el participio pasado correcto (sold), no la forma base del verbo (sell)."
    },
    {
      incorrect: "The project will be completing by June.",
      correct: "The project will be completed by June.",
      explanation: "En Future Simple Passive, se usa el participio pasado (completed), no la forma -ing (completing)."
    },
    {
      incorrect: "The bridge will has been repaired by next month.",
      correct: "The bridge will have been repaired by next month.",
      explanation: "Después de 'will' se usa la forma base 'have', no la forma conjugada 'has'."
    },
    {
      incorrect: "The book will have wrote by the end of the year.",
      correct: "The book will have been written by the end of the year.",
      explanation: "Falta 'been' entre 'have' y el participio, y se debe usar el participio pasado correcto (written), no el pasado simple (wrote)."
    },
    {
      incorrect: "Will been the work finished by tomorrow?",
      correct: "Will the work be finished by tomorrow?",
      explanation: "El orden correcto es 'will + sujeto + be + participio pasado', y en Future Perfect Passive sería 'will + sujeto + have been + participio pasado'."
    }
  ]
};
