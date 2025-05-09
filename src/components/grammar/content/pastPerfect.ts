import { GrammarContent } from '../../../types/grammar';

export const pastPerfectContent: GrammarContent = {
  id: 'past-perfect',
  title: 'Past Perfect',
  introduction: {
    text: 'El Past Perfect (también llamado Pluscuamperfecto en español) se utiliza para hablar de acciones que ya habían ocurrido antes de otro momento o acción en el pasado. Es el "pasado del pasado" y nos ayuda a establecer un orden cronológico claro entre eventos pasados.',
    emoji: '⏪'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + had + participio pasado del verbo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos regulares</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">had worked</span> there before I moved to London.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">had finished</span> her homework before dinner.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">had studied</span> English before they visited the UK.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">had waited</span> for hours when the bus finally arrived.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos irregulares</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">had seen</span> the movie before I read the book.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">had gone</span> to bed when I called.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">had eaten</span> by the time we arrived at the restaurant.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">had written</span> three books before she turned thirty.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Usamos <strong>had</strong> como auxiliar para todos los sujetos (I, you, he, she, it, we, they)</li>
            <li>El verbo principal va en <strong>participio pasado</strong>:
              <ul class="list-disc pl-5 space-y-1">
                <li>Para verbos regulares: infinitivo + <strong>-ed</strong> (worked, played, studied)</li>
                <li>Para verbos irregulares: tercera forma del verbo (gone, seen, written)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'d</strong> es la forma contraída de <strong>had</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>had</strong> finished → I<strong>'d</strong> finished</li>
            <li>She <strong>had</strong> seen → She<strong>'d</strong> seen</li>
            <li>We <strong>had</strong> eaten → We<strong>'d</strong> eaten</li>
          </ul>
          <p class="text-blue-800 dark:text-blue-400 mt-2 text-sm"><strong>Nota:</strong> La contracción <strong>'d</strong> también puede significar <strong>would</strong>, así que el contexto es importante para distinguir entre Past Perfect y condicionales.</p>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + had + not + participio pasado del verbo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos regulares</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">had not finished</span> my work when he called.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">hadn't visited</span> Spain before that trip.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">had not prepared</span> for the exam.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">hadn't decided</span> what to do yet.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Ejemplos con verbos irregulares</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">had not seen</span> that movie before.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">hadn't spoken</span> to her in years.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">had not written</span> the report yet.</p>
            <p>She <span class="text-red-600 dark:text-red-400 font-bold">hadn't been</span> to London before that trip.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Forma contraída negativa:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">La forma contraída negativa <strong>hadn't</strong> se usa frecuentemente en lugar de <strong>had not</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>had not</strong> finished → I <strong>hadn't</strong> finished</li>
            <li>She <strong>had not</strong> seen → She <strong>hadn't</strong> seen</li>
            <li>We <strong>had not</strong> eaten → We <strong>hadn't</strong> eaten</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Had + sujeto + participio pasado del verbo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con verbos regulares</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had you finished</span> your homework before the class?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had she worked</span> there for long when she quit?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had they studied</span> the material before the exam?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had we arrived</span> on time for the meeting?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con verbos irregulares</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had you ever seen</span> that movie before?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had he spoken</span> to her before the party?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had they gone</span> to that restaurant before?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Had I met</span> him somewhere before?</p>
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
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Why had</strong> you left the party so early?</li>
            <li><strong>Where had</strong> she gone before arriving at the office?</li>
            <li><strong>How long had</strong> they known each other before they got married?</li>
            <li><strong>What had</strong> he said before you interrupted him?</li>
            <li><strong>When had</strong> you finished your homework?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "I had finished my work before I went home.", spanish: "Había terminado mi trabajo antes de irme a casa." },
      { english: "She hadn't seen the movie before she read the book.", spanish: "Ella no había visto la película antes de leer el libro." },
      { english: "Had you ever visited Paris before that trip?", spanish: "¿Habías visitado París alguna vez antes de ese viaje?" },
      { english: "They had already eaten when we arrived.", spanish: "Ellos ya habían comido cuando llegamos." }
    ]
  },
  uses: {
    description: "El Past Perfect tiene usos específicos que lo diferencian de otros tiempos verbales del pasado:",
    useCases: [
      {
        title: "Acciones completadas antes de otro momento pasado ⏱️",
        description: "Para acciones que se completaron antes de otro momento o evento en el pasado.",
        examples: [
          { english: "I had finished the report before my boss asked for it.", spanish: "Había terminado el informe antes de que mi jefe lo pidiera." },
          { english: "By the time we arrived, the movie had already started.", spanish: "Para cuando llegamos, la película ya había comenzado." },
          { english: "She had left the party when I got there.", spanish: "Ella había dejado la fiesta cuando yo llegué." }
        ]
      },
      {
        title: "Experiencias anteriores a un momento del pasado 🔄",
        description: "Para hablar de experiencias o estados que existían antes de un punto de referencia en el pasado.",
        examples: [
          { english: "I had never been to a concert before I saw Coldplay last year.", spanish: "Nunca había ido a un concierto antes de ver a Coldplay el año pasado." },
          { english: "She had studied French for five years before she moved to Paris.", spanish: "Había estudiado francés durante cinco años antes de mudarse a París." },
          { english: "They had already visited Spain three times before that trip.", spanish: "Ya habían visitado España tres veces antes de ese viaje." }
        ]
      },
      {
        title: "Deseos o planes no realizados 💭",
        description: "Para expresar acciones que esperabas, planeabas o deseabas haber hecho pero que no sucedieron.",
        examples: [
          { english: "I had hoped to finish my thesis by June, but I couldn't.", spanish: "Había esperado terminar mi tesis para junio, pero no pude." },
          { english: "We had planned to visit Italy, but we changed our minds.", spanish: "Habíamos planeado visitar Italia, pero cambiamos de opinión." },
          { english: "She had wanted to call you, but she lost your number.", spanish: "Ella había querido llamarte, pero perdió tu número." }
        ]
      },
      {
        title: "Situaciones hipotéticas del pasado 🤔",
        description: "Para hablar de situaciones que podrían haber sido diferentes (a menudo con 'if').",
        examples: [
          { english: "If I had known you were coming, I would have prepared something.", spanish: "Si hubiera sabido que venías, habría preparado algo." },
          { english: "He would have passed the exam if he had studied more.", spanish: "Él habría aprobado el examen si hubiera estudiado más." },
          { english: "We wouldn't have missed the train if we had left earlier.", spanish: "No habríamos perdido el tren si hubiéramos salido antes." }
        ]
      },
      {
        title: "Reported speech (estilo indirecto) 💬",
        description: "Para reportar lo que alguien había dicho, pensado o sentido.",
        examples: [
          { english: "She told me she had sent the email the day before.", spanish: "Ella me dijo que había enviado el correo el día anterior." },
          { english: "He said he had never been to Japan.", spanish: "Él dijo que nunca había estado en Japón." },
          { english: "They claimed they had finished the project on time.", spanish: "Ellos afirmaron que habían terminado el proyecto a tiempo." }
        ]
      }
    ]
  },
  examples: [
    { english: "When I arrived at the cinema, the film had already started.", spanish: "Cuando llegué al cine, la película ya había comenzado." },
    { english: "He hadn't eaten anything since breakfast, so he was very hungry.", spanish: "No había comido nada desde el desayuno, así que tenía mucha hambre." },
    { english: "Had you ever met her before the party?", spanish: "¿La habías conocido alguna vez antes de la fiesta?" },
    { english: "By the time she graduated, she had studied English for ten years.", spanish: "Para cuando se graduó, había estudiado inglés durante diez años." },
    { english: "I realized that I had forgotten my keys at home.", spanish: "Me di cuenta de que había olvidado mis llaves en casa." },
    { english: "After the guests had left, we started cleaning up.", spanish: "Después de que los invitados se habían ido, empezamos a limpiar." },
    { english: "The thief had escaped before the police arrived.", spanish: "El ladrón había escapado antes de que llegara la policía." },
    { english: "We had never seen such a beautiful sunset before.", spanish: "Nunca habíamos visto un atardecer tan hermoso antes." }
  ],
  timeExpressions: [
    { word: "before", description: "antes de" },
    { word: "after", description: "después de" },
    { word: "when", description: "cuando" },
    { word: "by the time", description: "para cuando" },
    { word: "already", description: "ya" },
    { word: "just", description: "justo, recién" },
    { word: "never", description: "nunca" },
    { word: "for + período", description: "durante, por (a menudo con acciones que comenzaron y continuaron hasta cierto punto en el pasado)" },
    { word: "since + momento", description: "desde (a menudo con acciones que comenzaron en un punto del pasado y continuaron hasta otro punto en el pasado)" },
    { word: "until then", description: "hasta entonces" }
  ],
  tips: [
    {
      title: "Past Perfect vs. Past Simple",
      content: "Usa el Past Perfect para la acción más antigua de dos acciones pasadas, y el Past Simple para la acción más reciente: 'I had finished (Past Perfect) my homework when she called (Past Simple)'.",
      emoji: "⚖️"
    },
    {
      title: "No siempre es necesario el Past Perfect",
      content: "Si el orden de los eventos está claro por el contexto o por conectores como 'before' o 'after', a veces se puede usar solo el Past Simple: 'I finished my homework before she called' tiene el mismo significado que 'I had finished my homework when she called'.",
      emoji: "🔄"
    },
    {
      title: "Combinación con otros tiempos",
      content: "El Past Perfect se combina frecuentemente con el Past Simple y a veces con el Past Continuous: 'I had just finished my homework when she called' o 'I had been waiting for an hour when the bus finally arrived'.",
      emoji: "🧩"
    },
    {
      title: "Traducción al español",
      content: "El Past Perfect se traduce generalmente al español usando el pluscuamperfecto: 'had worked' = 'había trabajado'. Sin embargo, a veces se puede traducir con el pretérito anterior, una forma poco común en el español moderno: 'hube trabajado'.",
      emoji: "🌍"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I had went to the store before dinner.",
      correct: "I had gone to the store before dinner.",
      explanation: "El verbo principal debe estar en participio pasado. Para 'go', el participio es 'gone', no 'went' (que es el pasado simple)."
    },
    {
      incorrect: "She had ate lunch.",
      correct: "She had eaten lunch.",
      explanation: "El verbo 'eat' tiene como participio pasado 'eaten', no 'ate' (que es el pasado simple)."
    },
    {
      incorrect: "When he arrived, I already left.",
      correct: "When he arrived, I had already left.",
      explanation: "Se necesita el Past Perfect para una acción que ocurrió antes de otra acción en el pasado."
    },
    {
      incorrect: "They never had visited Spain before.",
      correct: "They had never visited Spain before.",
      explanation: "Los adverbios como 'never', 'already', 'just' van entre el auxiliar 'had' y el participio pasado."
    },
    {
      incorrect: "Had you have seen that movie?",
      correct: "Had you seen that movie?",
      explanation: "En las preguntas con Past Perfect, se usa 'had' seguido del sujeto y el participio pasado, sin otro auxiliar."
    },
    {
      incorrect: "After I had finished my work, I had gone home.",
      correct: "After I had finished my work, I went home.",
      explanation: "Generalmente, usamos Past Perfect solo para la acción más antigua, y Past Simple para la acción posterior."
    }
  ]
};
