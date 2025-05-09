import { GrammarContent } from '../../../types/grammar';

export const futureContinuousContent: GrammarContent = {
  id: 'future-continuous',
  title: 'Future Continuous',
  introduction: {
    text: 'El Future Continuous (o Future Progressive) se utiliza para hablar de acciones que estarán en progreso en un momento específico del futuro. Nos ayuda a visualizar actividades que se estarán desarrollando en un punto determinado o durante un período en el futuro.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + be + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will be working</span> at this time tomorrow.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will be traveling</span> to Madrid next week.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">will be studying</span> all evening.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">will be waiting</span> for you at the airport.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">will be staying</span> at the Grand Hotel.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">will be playing</span> tennis at 5 PM.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">will be attending</span> classes all day.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">will be watching</span> the game when we arrive.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>will</strong> para todos los sujetos (I, you, he, she, it, we, they)</li>
            <li>Seguido de <strong>be</strong></li>
            <li>Y finalmente el <strong>verbo principal en gerundio</strong> (-ing)</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'ll</strong> es la forma contraída de <strong>will</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will be</strong> working → I<strong>'ll be</strong> working</li>
            <li>You <strong>will be</strong> staying → You<strong>'ll be</strong> staying</li>
            <li>She <strong>will be</strong> attending → She<strong>'ll be</strong> attending</li>
            <li>They <strong>will be</strong> watching → They<strong>'ll be</strong> watching</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + will + not + be + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not be working</span> tomorrow.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't be attending</span> the meeting.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">will not be using</span> my car next week.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">won't be staying</span> at a hotel.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">will not be needing</span> this anymore.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">won't be joining</span> us for dinner.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">will not be working</span> this weekend.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">won't be traveling</span> during the holidays.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída negativa:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">La forma contraída negativa <strong>won't be</strong> se usa frecuentemente en lugar de <strong>will not be</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will not be</strong> working → I <strong>won't be</strong> working</li>
            <li>She <strong>will not be</strong> attending → She <strong>won't be</strong> attending</li>
            <li>They <strong>will not be</strong> traveling → They <strong>won't be</strong> traveling</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Will + sujeto + be + verbo en gerundio (-ing)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con sujetos en primera persona</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I be working</span> late tomorrow?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we be staying</span> with your parents?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will I be making</span> a presentation?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we be using</span> the new software?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con otros sujetos</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will you be attending</span> the wedding?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will he be working</span> this weekend?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will she be joining</span> us for dinner?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will they be waiting</span> for us at the station?</p>
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
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> En las respuestas cortas, no necesitamos repetir "be" ni el verbo principal en -ing.</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>What will</strong> you <strong>be doing</strong> at 8 o'clock tomorrow?</li>
            <li><strong>Where will</strong> she <strong>be staying</strong> during the conference?</li>
            <li><strong>When will</strong> they <strong>be arriving</strong>?</li>
            <li><strong>Why will</strong> he <strong>be working</strong> late?</li>
            <li><strong>How will</strong> they <strong>be traveling</strong> to Paris?</li>
            <li><strong>Who will</strong> <strong>be presenting</strong> the project?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "I'll be working at 9 o'clock tomorrow morning.", spanish: "Estaré trabajando a las 9 de la mañana de mañana." },
      { english: "She won't be attending the conference next week.", spanish: "Ella no estará asistiendo a la conferencia la próxima semana." },
      { english: "Will you be staying for dinner?", spanish: "¿Te quedarás a cenar?" },
      { english: "They'll be flying to Rome at this time tomorrow.", spanish: "Ellos estarán volando a Roma a esta hora mañana." }
    ]
  },
  uses: {
    description: "El Future Continuous tiene usos específicos que lo distinguen de otras formas de expresar el futuro:",
    useCases: [
      {
        title: "Acciones en progreso en un momento futuro ⏱️",
        description: "Para hablar de acciones que estarán en desarrollo en un momento específico del futuro.",
        examples: [
          { english: "This time next week, I'll be lying on a beach in Spain.", spanish: "A esta hora la próxima semana, estaré tumbado en una playa en España." },
          { english: "At 10 PM tonight, we'll be watching the football match.", spanish: "A las 10 de la noche, estaremos viendo el partido de fútbol." },
          { english: "They'll be having dinner when we arrive.", spanish: "Ellos estarán cenando cuando lleguemos." }
        ]
      },
      {
        title: "Acciones futuras planificadas o programadas 📆",
        description: "Para hablar de planes o actividades que ya están decididas para el futuro.",
        examples: [
          { english: "I'll be working late on Friday.", spanish: "Estaré trabajando hasta tarde el viernes." },
          { english: "She'll be attending a conference in Paris next month.", spanish: "Ella estará asistiendo a una conferencia en París el próximo mes." },
          { english: "We'll be staying at the Hilton Hotel during our trip.", spanish: "Nos alojaremos en el Hotel Hilton durante nuestro viaje." }
        ]
      },
      {
        title: "Acciones futuras de larga duración ⌛",
        description: "Para acciones o situaciones futuras que continuarán durante un período.",
        examples: [
          { english: "I'll be studying for my exams all weekend.", spanish: "Estaré estudiando para mis exámenes todo el fin de semana." },
          { english: "She'll be working on this project for the next six months.", spanish: "Ella estará trabajando en este proyecto durante los próximos seis meses." },
          { english: "They'll be traveling around Europe all summer.", spanish: "Ellos estarán viajando por Europa todo el verano." }
        ]
      },
      {
        title: "Preguntar cortésmente sobre planes 🤝",
        description: "Para hacer preguntas educadas sobre planes futuros sin parecer intrusivo.",
        examples: [
          { english: "Will you be using the car tomorrow?", spanish: "¿Estarás usando el coche mañana?" },
          { english: "Will she be joining us for dinner?", spanish: "¿Ella nos acompañará a cenar?" },
          { english: "Will you be staying in town this weekend?", spanish: "¿Te quedarás en la ciudad este fin de semana?" }
        ]
      },
      {
        title: "Acciones futuras que coinciden o se interrumpen 🔄",
        description: "Para describir acciones que estarán ocurriendo cuando otra acción tenga lugar.",
        examples: [
          { english: "When you arrive, I'll be preparing dinner.", spanish: "Cuando llegues, estaré preparando la cena." },
          { english: "We'll still be sleeping when the delivery arrives.", spanish: "Todavía estaremos durmiendo cuando llegue la entrega." },
          { english: "She'll be presenting her project when the CEO visits.", spanish: "Ella estará presentando su proyecto cuando el CEO visite." }
        ]
      }
    ]
  },
  examples: [
    { english: "This time tomorrow, I'll be flying to New York.", spanish: "A esta hora mañana, estaré volando a Nueva York." },
    { english: "Don't call at 8 PM, we'll be having dinner then.", spanish: "No llames a las 8 de la tarde, estaremos cenando entonces." },
    { english: "Will you be using your laptop this afternoon?", spanish: "¿Estarás usando tu portátil esta tarde?" },
    { english: "She won't be working during the Christmas holidays.", spanish: "Ella no estará trabajando durante las vacaciones de Navidad." },
    { english: "They'll be renovating the office all month.", spanish: "Estarán renovando la oficina todo el mes." },
    { english: "What will you be doing when I arrive?", spanish: "¿Qué estarás haciendo cuando yo llegue?" },
    { english: "I'll be thinking about you while I'm away.", spanish: "Estaré pensando en ti mientras esté fuera." },
    { english: "Will they be staying with us when they visit?", spanish: "¿Se quedarán con nosotros cuando visiten?" }
  ],
  timeExpressions: [
    { word: "at this time tomorrow", description: "a esta hora mañana" },
    { word: "at + hora específica", description: "a + hora específica (at 10 o'clock = a las 10)" },
    { word: "when + acción/evento", description: "cuando + acción/evento (when you arrive = cuando llegues)" },
    { word: "this time next week/month", description: "a esta hora la próxima semana/mes" },
    { word: "all day/week/month", description: "todo el día/semana/mes" },
    { word: "during + período", description: "durante + período (during summer = durante el verano)" },
    { word: "while", description: "mientras" },
    { word: "for + período de tiempo", description: "durante/por + período de tiempo (for two hours = durante dos horas)" },
    { word: "then", description: "entonces" }
  ],
  tips: [
    {
      title: "Future Continuous vs. Future Simple",
      content: "El Future Continuous enfatiza el proceso o duración de una acción futura, mientras que el Future Simple se centra más en el hecho o resultado. Compara: 'I'll be working at 10' (proceso en curso) vs. 'I'll work tomorrow' (hecho futuro).",
      emoji: "⚖️"
    },
    {
      title: "Future Continuous vs. Present Continuous para el futuro",
      content: "El Present Continuous se usa para planes fijos, especialmente a corto plazo: 'I'm meeting John at 5' (ya acordado). El Future Continuous enfatiza más que la acción estará en progreso: 'I'll be meeting clients all day' (actividad continua).",
      emoji: "🔄"
    },
    {
      title: "Verbos que rara vez se usan en forma continua",
      content: "Al igual que en otros tiempos continuos, los verbos de estado (know, believe, want, etc.) rara vez se usan en Future Continuous. En su lugar, usa el Future Simple: 'I will know the answer' (no 'I will be knowing').",
      emoji: "🧠"
    },
    {
      title: "Future Continuous para suavizar preguntas",
      content: "Usar el Future Continuous para preguntas sobre planes futuros suena más educado y menos intrusivo que el Future Simple: 'Will you be using the car?' (más cortés) vs. 'Will you use the car?' (más directo).",
      emoji: "🤝"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I will working tomorrow.",
      correct: "I will be working tomorrow.",
      explanation: "Falta el verbo 'be' entre 'will' y el gerundio."
    },
    {
      incorrect: "She will be work at 9 o'clock.",
      correct: "She will be working at 9 o'clock.",
      explanation: "Después de 'will be' debemos usar el gerundio (-ing) del verbo, no el infinitivo."
    },
    {
      incorrect: "Will you be play tennis tomorrow?",
      correct: "Will you be playing tennis tomorrow?",
      explanation: "El verbo principal debe estar en gerundio (-ing)."
    },
    {
      incorrect: "I will be knowing the answer tomorrow.",
      correct: "I will know the answer tomorrow.",
      explanation: "Los verbos de estado como 'know' rara vez se usan en formas continuas. Usa el Future Simple."
    },
    {
      incorrect: "When I will be arriving, I'll call you.",
      correct: "When I arrive, I'll call you.",
      explanation: "Después de 'when' y otras conjunciones temporales, usamos el presente simple para referirnos al futuro, no el Future Continuous ni ninguna otra forma con 'will'."
    },
    {
      incorrect: "They will staying at the hotel.",
      correct: "They will be staying at the hotel.",
      explanation: "Falta el verbo 'be' entre 'will' y 'staying'."
    }
  ]
};
