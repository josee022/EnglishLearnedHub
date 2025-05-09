import { GrammarContent } from '../../../types/grammar';

export const statementsContent: GrammarContent = {
  id: 'statements',
  title: 'Afirmaciones en Reported Speech',
  introduction: {
    text: 'El Reported Speech o estilo indirecto se utiliza para reportar lo que alguien ha dicho sin citar sus palabras exactas. Las afirmaciones son el tipo más común de Reported Speech y requieren cambios en tiempos verbales, pronombres y expresiones de tiempo.',
    emoji: '💬'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + verbo de reporte (said/told) + complemento + that + cláusula</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>"I <span class="text-green-600 dark:text-green-400 font-bold">am</span> happy."</p>
            <p>"I <span class="text-green-600 dark:text-green-400 font-bold">like</span> chocolate."</p>
            <p>"We <span class="text-green-600 dark:text-green-400 font-bold">are going</span> to the cinema."</p>
            <p>"They <span class="text-green-600 dark:text-green-400 font-bold">have finished</span> their work."</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>She said (that) she <span class="text-green-600 dark:text-green-400 font-bold">was</span> happy.</p>
            <p>He said (that) he <span class="text-green-600 dark:text-green-400 font-bold">liked</span> chocolate.</p>
            <p>They told me (that) they <span class="text-green-600 dark:text-green-400 font-bold">were going</span> to the cinema.</p>
            <p>She said (that) they <span class="text-green-600 dark:text-green-400 font-bold">had finished</span> their work.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Cambios principales para afirmaciones:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>El verbo principal "retrocede un tiempo" en la mayoría de los casos</li>
            <li>Los pronombres cambian según el contexto</li>
            <li>Después de <strong>say</strong>, usamos <strong>that</strong> + cláusula</li>
            <li>Después de <strong>tell</strong>, necesitamos un objeto (a quién se lo dijeron)</li>
            <li>El <strong>that</strong> a menudo es opcional y se puede omitir</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + verbo de reporte (said/told) + complemento + that + cláusula negativa</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>"I <span class="text-red-600 dark:text-red-400 font-bold">don't understand</span> this."</p>
            <p>"She <span class="text-red-600 dark:text-red-400 font-bold">isn't coming</span> tonight."</p>
            <p>"We <span class="text-red-600 dark:text-red-400 font-bold">haven't seen</span> that movie."</p>
            <p>"They <span class="text-red-600 dark:text-red-400 font-bold">didn't go</span> to the party."</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>He said (that) he <span class="text-red-600 dark:text-red-400 font-bold">didn't understand</span> that.</p>
            <p>He told me (that) she <span class="text-red-600 dark:text-red-400 font-bold">wasn't coming</span> that night.</p>
            <p>They said (that) they <span class="text-red-600 dark:text-red-400 font-bold">hadn't seen</span> that movie.</p>
            <p>She told us (that) they <span class="text-red-600 dark:text-red-400 font-bold">hadn't gone</span> to the party.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Recuerda:</p>
          <p class="text-amber-800 dark:text-amber-400">La negación se mantiene en la cláusula reportada, pero sigue las reglas de cambio de tiempo verbal:</p>
          <p class="text-amber-800 dark:text-amber-400 mt-1">❌ <del>He said that he doesn't understand.</del></p>
          <p class="text-amber-800 dark:text-amber-400">✅ He said that he didn't understand.</p>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto + asked/wondered + if/whether + cláusula</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Para reportar preguntas sobre afirmaciones</p>
            <p>"<span class="text-purple-600 dark:text-purple-400 font-bold">Does</span> she like music?"</p>
            <p>"<span class="text-purple-600 dark:text-purple-400 font-bold">Are</span> they coming tomorrow?"</p>
            <p>"<span class="text-purple-600 dark:text-purple-400 font-bold">Have</span> you finished your work?"</p>
            <p>"<span class="text-purple-600 dark:text-purple-400 font-bold">Did</span> he travel last summer?"</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>He asked if/whether she <span class="text-purple-600 dark:text-purple-400 font-bold">liked</span> music.</p>
            <p>She asked if/whether they <span class="text-purple-600 dark:text-purple-400 font-bold">were coming</span> the next day.</p>
            <p>She asked if/whether I <span class="text-purple-600 dark:text-purple-400 font-bold">had finished</span> my work.</p>
            <p>We asked if/whether he <span class="text-purple-600 dark:text-purple-400 font-bold">had traveled</span> the previous summer.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Para preguntas sobre afirmaciones:</p>
          <p class="text-amber-800 dark:text-amber-400">Las preguntas de sí/no (yes/no questions) en estilo indirecto:</p>
          <p class="text-amber-800 dark:text-amber-400">- Se introducen con <strong>if</strong> o <strong>whether</strong> (si)</p>
          <p class="text-amber-800 dark:text-amber-400">- Se convierten en oraciones afirmativas pero con cambio de tiempo verbal</p>
        </div>
      </div>
    `,
    examples: [
      { english: "I'm studying English.", spanish: "Direct: \"I'm studying English.\" → Reported: She said (that) she was studying English." },
      { english: "We don't live in Madrid.", spanish: "Direct: \"We don't live in Madrid.\" → Reported: They said (that) they didn't live in Madrid." },
      { english: "Tom has visited Paris twice.", spanish: "Direct: \"Tom has visited Paris twice.\" → Reported: She said (that) Tom had visited Paris twice." }
    ]
  },
  uses: {
    description: "El Reported Speech para afirmaciones se utiliza en diversas situaciones comunicativas, especialmente cuando necesitamos transmitir lo que alguien dijo sin citar sus palabras exactas.",
    useCases: [
      {
        title: "Transmitir información 📋",
        description: "Para comunicar a otros lo que alguien ha dicho, especialmente cuando las palabras exactas no son importantes.",
        examples: [
          { english: "The teacher said that the exam would be on Friday.", spanish: "El profesor dijo que el examen sería el viernes." },
          { english: "My mother told me that dinner was ready.", spanish: "Mi madre me dijo que la cena estaba lista." },
          { english: "The news report said that the storm had caused significant damage.", spanish: "El informe de noticias decía que la tormenta había causado daños significativos." }
        ]
      },
      {
        title: "Redactar mensajes y correos 📧",
        description: "En comunicación escrita para transmitir mensajes de terceros.",
        examples: [
          { english: "John said that he would email us the details tomorrow.", spanish: "John dijo que nos enviaría los detalles por correo electrónico mañana." },
          { english: "The company announced that they were launching a new product.", spanish: "La empresa anunció que estaban lanzando un nuevo producto." },
          { english: "She mentioned that she had already sent the documents.", spanish: "Mencionó que ya había enviado los documentos." }
        ]
      },
      {
        title: "Narrar historias o eventos pasados 📚",
        description: "En narraciones para contar lo que los personajes dijeron.",
        examples: [
          { english: "Romeo told Juliet that he loved her.", spanish: "Romeo le dijo a Julieta que la amaba." },
          { english: "The witness testified that he had seen the suspect near the crime scene.", spanish: "El testigo declaró que había visto al sospechoso cerca de la escena del crimen." },
          { english: "She wrote in her diary that she had had the most wonderful day.", spanish: "Escribió en su diario que había tenido el día más maravilloso." }
        ]
      },
      {
        title: "Reportar en contextos académicos y profesionales 🏢",
        description: "Para presentar información, opiniones o hallazgos de otros.",
        examples: [
          { english: "The researcher concluded that the results were statistically significant.", spanish: "El investigador concluyó que los resultados eran estadísticamente significativos." },
          { english: "Our manager said that sales had increased by 20% last quarter.", spanish: "Nuestro gerente dijo que las ventas habían aumentado un 20% en el último trimestre." },
          { english: "The survey found that most people believed climate change was a serious threat.", spanish: "La encuesta encontró que la mayoría de las personas creían que el cambio climático era una amenaza seria." }
        ]
      }
    ]
  },
  examples: [
    { english: "Direct: \"I work in a bank.\" → Reported: She said (that) she worked in a bank.", spanish: "Directo: \"Trabajo en un banco.\" → Indirecto: Ella dijo que trabajaba en un banco." },
    { english: "Direct: \"We are moving to London.\" → Reported: They told me (that) they were moving to London.", spanish: "Directo: \"Nos mudamos a Londres.\" → Indirecto: Me dijeron que se mudaban a Londres." },
    { english: "Direct: \"I have never been to Paris.\" → Reported: He said (that) he had never been to Paris.", spanish: "Directo: \"Nunca he estado en París.\" → Indirecto: Él dijo que nunca había estado en París." },
    { english: "Direct: \"I will call you tomorrow.\" → Reported: She promised (that) she would call me the next day.", spanish: "Directo: \"Te llamaré mañana.\" → Indirecto: Ella prometió que me llamaría al día siguiente." },
    { english: "Direct: \"I can't come to the party.\" → Reported: He said (that) he couldn't come to the party.", spanish: "Directo: \"No puedo venir a la fiesta.\" → Indirecto: Él dijo que no podía venir a la fiesta." },
    { english: "Direct: \"I don't understand this question.\" → Reported: The student admitted (that) he didn't understand that question.", spanish: "Directo: \"No entiendo esta pregunta.\" → Indirecto: El estudiante admitió que no entendía esa pregunta." },
    { english: "Direct: \"We have already eaten.\" → Reported: They said (that) they had already eaten.", spanish: "Directo: \"Ya hemos comido.\" → Indirecto: Dijeron que ya habían comido." },
    { english: "Direct: \"I was studying when you called.\" → Reported: She explained (that) she had been studying when I called.", spanish: "Directo: \"Estaba estudiando cuando llamaste.\" → Indirecto: Ella explicó que había estado estudiando cuando llamé." }
  ],
  timeExpressions: [
    { word: "today → that day", description: "hoy → ese día" },
    { word: "yesterday → the day before/the previous day", description: "ayer → el día anterior" },
    { word: "tomorrow → the next day/the following day", description: "mañana → el día siguiente" },
    { word: "now → then", description: "ahora → entonces" },
    { word: "this week → that week", description: "esta semana → esa semana" },
    { word: "last week → the week before/the previous week", description: "la semana pasada → la semana anterior" },
    { word: "next week → the following week", description: "la próxima semana → la semana siguiente" },
    { word: "here → there", description: "aquí → allí" },
    { word: "this → that", description: "esto → eso" },
    { word: "these → those", description: "estos → esos" }
  ],
  tips: [
    {
      title: "Uso de 'say' y 'tell'",
      content: "Recuerda que 'say' no necesita un objeto, mientras que 'tell' siempre va seguido de un objeto indirecto (a quién se lo dijeron). Ejemplo: 'He said that...' vs 'He told me that...'",
      emoji: "🗣️"
    },
    {
      title: "La palabra 'that' es opcional",
      content: "En inglés, la conjunción 'that' después de los verbos de reporte (said, told, etc.) es opcional y a menudo se omite en el habla informal.",
      emoji: "💭"
    },
    {
      title: "No siempre hay que cambiar el tiempo verbal",
      content: "Si lo que se reporta sigue siendo verdad o si fue dicho muy recientemente, a veces no es necesario cambiar el tiempo verbal. Ejemplo: 'She said she is pregnant' (si aún lo está).",
      emoji: "⏰"
    },
    {
      title: "Verbos de reporte alternativos",
      content: "Usa verbos más específicos para enriquecer tu discurso: 'admit', 'deny', 'explain', 'suggest', 'promise', 'claim', etc., según la intención del hablante original.",
      emoji: "📝"
    }
  ],
  commonMistakes: [
    {
      incorrect: "She said me that she was tired.",
      correct: "She told me that she was tired. / She said that she was tired.",
      explanation: "Con 'say' no se usa objeto directo. O usamos 'told me' o simplemente 'said'."
    },
    {
      incorrect: "He told that he would come later.",
      correct: "He told us/me that he would come later. / He said that he would come later.",
      explanation: "Después de 'tell' siempre necesitamos especificar a quién."
    },
    {
      incorrect: "She said that she will help us tomorrow.",
      correct: "She said that she would help us the next day.",
      explanation: "El tiempo verbal y las expresiones temporales deben cambiar en el estilo indirecto en pasado."
    },
    {
      incorrect: "They said me they had finished.",
      correct: "They told me they had finished. / They said they had finished.",
      explanation: "El verbo 'say' no puede ir seguido directamente de un objeto personal."
    },
    {
      incorrect: "He told he was busy.",
      correct: "He told us/me he was busy. / He said he was busy.",
      explanation: "El verbo 'tell' necesita un objeto (a quién se lo dijo)."
    }
  ]
};
