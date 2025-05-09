import { GrammarContent } from '../../../types/grammar';

export const questionsContent: GrammarContent = {
  id: 'questions',
  title: 'Preguntas en Reported Speech',
  introduction: {
    text: 'Reportar preguntas en estilo indirecto requiere una transformación especial, ya que debemos convertir las estructuras interrogativas directas en oraciones indirectas. Existen dos tipos principales de preguntas para reportar: las preguntas de sí/no (yes/no questions) y las preguntas con palabras interrogativas (wh-questions).',
    emoji: '❓'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Para preguntas de sí/no: Sujeto + asked/wondered + if/whether + cláusula</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Are</span> you coming to the party?"</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Do</span> you like jazz music?"</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Have</span> they finished their project?"</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Will</span> you help me tomorrow?"</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>She asked if/whether I <span class="text-green-600 dark:text-green-400 font-bold">was coming</span> to the party.</p>
            <p>He asked if/whether I <span class="text-green-600 dark:text-green-400 font-bold">liked</span> jazz music.</p>
            <p>She asked if/whether they <span class="text-green-600 dark:text-green-400 font-bold">had finished</span> their project.</p>
            <p>He asked if/whether I <span class="text-green-600 dark:text-green-400 font-bold">would help</span> him the next day.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura para preguntas de sí/no:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Se introduce con <strong>if</strong> o <strong>whether</strong> (si)</li>
            <li>La estructura se convierte de interrogativa a afirmativa</li>
            <li>El orden es: sujeto + verbo (no verbo + sujeto como en la pregunta directa)</li>
            <li>Los tiempos verbales cambian según las reglas del Reported Speech</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Para preguntas con palabras interrogativas (wh-questions): Sujeto + asked/wondered + palabra interrogativa + cláusula</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">Where</span> do you live?"</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">What</span> are you doing tonight?"</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">Why</span> didn't you call me?"</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">How</span> did she solve that problem?"</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>He asked <span class="text-red-600 dark:text-red-400 font-bold">where</span> I lived.</p>
            <p>She asked <span class="text-red-600 dark:text-red-400 font-bold">what</span> I was doing that night.</p>
            <p>He asked <span class="text-red-600 dark:text-red-400 font-bold">why</span> I hadn't called him.</p>
            <p>They wondered <span class="text-red-600 dark:text-red-400 font-bold">how</span> she had solved that problem.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Estructura para preguntas con palabras interrogativas:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La palabra interrogativa (<strong>what, where, when, why, how, who, which</strong>) se mantiene</li>
            <li>NO se usa <strong>if/whether</strong> con preguntas interrogativas</li>
            <li>La estructura de la oración cambia a orden afirmativo: sujeto + verbo</li>
            <li>Los tiempos verbales cambian según las reglas del Reported Speech</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Verbos usados para reportar preguntas</p>
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Verbos comunes para reportar preguntas</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              <div>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">ask</span> (preguntar)</p>
                <p class="text-slate-600 dark:text-slate-400 text-sm">She <span class="text-purple-600 dark:text-purple-400 font-bold">asked</span> where I lived.</p>
              </div>
              <div>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">inquire</span> (indagar, preguntar formalmente)</p>
                <p class="text-slate-600 dark:text-slate-400 text-sm">He <span class="text-purple-600 dark:text-purple-400 font-bold">inquired</span> if I would attend the meeting.</p>
              </div>
              <div>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">wonder</span> (preguntarse)</p>
                <p class="text-slate-600 dark:text-slate-400 text-sm">They <span class="text-purple-600 dark:text-purple-400 font-bold">wondered</span> why I was late.</p>
              </div>
              <div>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">want to know</span> (querer saber)</p>
                <p class="text-slate-600 dark:text-slate-400 text-sm">She <span class="text-purple-600 dark:text-purple-400 font-bold">wanted to know</span> how I had done it.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Consejos para reportar preguntas:</p>
          <div class="grid grid-cols-1 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400">1. Elige el verbo adecuado según el contexto y la intención del hablante original.</p>
              <p class="text-amber-800 dark:text-amber-400">2. No uses signos de interrogación en el estilo indirecto.</p>
              <p class="text-amber-800 dark:text-amber-400">3. Recuerda cambiar los tiempos verbales según corresponda.</p>
              <p class="text-amber-800 dark:text-amber-400">4. No olvides ajustar los pronombres y las expresiones de tiempo y lugar.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "\"Are you tired?\" → He asked if I was tired.", spanish: "\"¿Estás cansado?\" → Él preguntó si yo estaba cansado." },
      { english: "\"What time is it?\" → She asked what time it was.", spanish: "\"¿Qué hora es?\" → Ella preguntó qué hora era." },
      { english: "\"Have you seen my keys?\" → He wanted to know if I had seen his keys.", spanish: "\"¿Has visto mis llaves?\" → Él quería saber si yo había visto sus llaves." }
    ]
  },
  uses: {
    description: "Reportar preguntas en estilo indirecto es útil en diversas situaciones comunicativas donde necesitamos transmitir interrogantes formuladas por otros.",
    useCases: [
      {
        title: "Conversaciones y mensajes 🗣️",
        description: "Para reportar preguntas que otras personas han formulado.",
        examples: [
          { english: "My mother asked if I had eaten lunch.", spanish: "Mi madre preguntó si había comido el almuerzo." },
          { english: "The receptionist wanted to know when we would check out.", spanish: "La recepcionista quería saber cuándo nos íbamos a marchar." },
          { english: "John wondered why I hadn't called him.", spanish: "John se preguntó por qué no lo había llamado." }
        ]
      },
      {
        title: "Entornos académicos y profesionales 🏫",
        description: "Para transmitir preguntas en contextos formales.",
        examples: [
          { english: "The professor asked who had completed the assignment.", spanish: "El profesor preguntó quién había completado la tarea." },
          { english: "The interviewer inquired about my previous experience.", spanish: "El entrevistador preguntó sobre mi experiencia previa." },
          { english: "My supervisor asked how I planned to solve the problem.", spanish: "Mi supervisor preguntó cómo planeaba resolver el problema." }
        ]
      },
      {
        title: "Narración y escritura 📝",
        description: "En literatura y narraciones para reportar diálogos.",
        examples: [
          { english: "Sherlock asked where the victim had been that night.", spanish: "Sherlock preguntó dónde había estado la víctima esa noche." },
          { english: "The protagonist wondered if she would ever see him again.", spanish: "La protagonista se preguntó si alguna vez lo volvería a ver." },
          { english: "The child asked why the sky was blue.", spanish: "El niño preguntó por qué el cielo era azul." }
        ]
      },
      {
        title: "Periodismo y reportajes 📰",
        description: "Para reportar preguntas en entrevistas y declaraciones.",
        examples: [
          { english: "The reporter asked the politician why he had changed his position.", spanish: "El reportero preguntó al político por qué había cambiado su posición." },
          { english: "The journalist inquired about the company's future plans.", spanish: "El periodista indagó sobre los planes futuros de la empresa." },
          { english: "The fans wanted to know when the next album would be released.", spanish: "Los fans querían saber cuándo se lanzaría el próximo álbum." }
        ]
      }
    ]
  },
  examples: [
    { english: "Direct: \"Are you busy now?\" → Reported: She asked if I was busy then.", spanish: "Directo: \"¿Estás ocupado ahora?\" → Indirecto: Ella preguntó si yo estaba ocupado entonces." },
    { english: "Direct: \"Where do you live?\" → Reported: He asked me where I lived.", spanish: "Directo: \"¿Dónde vives?\" → Indirecto: Él me preguntó dónde vivía." },
    { english: "Direct: \"Why didn't you come to the party?\" → Reported: They wanted to know why I hadn't gone to the party.", spanish: "Directo: \"¿Por qué no viniste a la fiesta?\" → Indirecto: Querían saber por qué no había ido a la fiesta." },
    { english: "Direct: \"Have you ever been to Japan?\" → Reported: He inquired if I had ever been to Japan.", spanish: "Directo: \"¿Has estado alguna vez en Japón?\" → Indirecto: Preguntó si alguna vez había estado en Japón." },
    { english: "Direct: \"What time will the meeting start?\" → Reported: She asked what time the meeting would start.", spanish: "Directo: \"¿A qué hora empezará la reunión?\" → Indirecto: Preguntó a qué hora empezaría la reunión." },
    { english: "Direct: \"How much does this cost?\" → Reported: The customer wanted to know how much that cost.", spanish: "Directo: \"¿Cuánto cuesta esto?\" → Indirecto: El cliente quería saber cuánto costaba eso." },
    { english: "Direct: \"Can you help me?\" → Reported: He asked if I could help him.", spanish: "Directo: \"¿Puedes ayudarme?\" → Indirecto: Preguntó si podía ayudarlo." },
    { english: "Direct: \"Who sent this letter?\" → Reported: She wondered who had sent that letter.", spanish: "Directo: \"¿Quién envió esta carta?\" → Indirecto: Se preguntó quién había enviado esa carta." }
  ],
  timeExpressions: [
    { word: "now → then", description: "ahora → entonces" },
    { word: "today → that day", description: "hoy → ese día" },
    { word: "yesterday → the day before", description: "ayer → el día anterior" },
    { word: "tomorrow → the next day", description: "mañana → el día siguiente" },
    { word: "this → that", description: "esto/a → eso/a" },
    { word: "these → those", description: "estos/as → esos/as" },
    { word: "here → there", description: "aquí → allí" },
    { word: "next week → the following week", description: "la próxima semana → la semana siguiente" },
    { word: "last month → the previous month", description: "el mes pasado → el mes anterior" },
    { word: "ago → before", description: "hace (tiempo) → antes" }
  ],
  tips: [
    {
      title: "No uses signos de interrogación",
      content: "En el Reported Speech, las preguntas se convierten en afirmaciones sin signos de interrogación, incluso aunque sigan siendo preguntas semánticamente.",
      emoji: "❓"
    },
    {
      title: "Orden de palabras",
      content: "En las preguntas indirectas, el orden de palabras cambia al de una oración afirmativa: Sujeto + Verbo (en lugar de Verbo + Sujeto como en la pregunta directa).",
      emoji: "🔄"
    },
    {
      title: "Distingue entre preguntas sí/no y wh-questions",
      content: "Las preguntas de sí/no se reportan con 'if/whether' + cláusula, mientras que las preguntas con palabras interrogativas (what, where, etc.) mantienen la palabra interrogativa y no usan 'if/whether'.",
      emoji: "🔍"
    },
    {
      title: "Verbos alternativos para reportar preguntas",
      content: "Además de 'ask', puedes usar otros verbos como 'inquire', 'wonder', 'want to know', 'question', etc., según el contexto y la intención del hablante original.",
      emoji: "📝"
    }
  ],
  commonMistakes: [
    {
      incorrect: "She asked me why do I live here.",
      correct: "She asked me why I lived there.",
      explanation: "En el Reported Speech, el orden de palabras cambia a afirmativo (sujeto + verbo) y se deben ajustar los tiempos verbales y expresiones como 'here'→'there'."
    },
    {
      incorrect: "He asked if did I finish my homework.",
      correct: "He asked if I had finished my homework.",
      explanation: "No se mantiene la estructura interrogativa con auxiliar + sujeto. Se usa orden afirmativo y se ajusta el tiempo verbal."
    },
    {
      incorrect: "She asked what is my name.",
      correct: "She asked what my name was.",
      explanation: "El orden de palabras es incorrecto y no se ha cambiado el tiempo verbal."
    },
    {
      incorrect: "They asked where we are going tomorrow.",
      correct: "They asked where we were going the next day.",
      explanation: "No se ha cambiado el tiempo verbal de presente a pasado, ni la expresión temporal 'tomorrow' a 'the next day'."
    },
    {
      incorrect: "He asked me what time it is.",
      correct: "He asked me what time it was.",
      explanation: "El verbo 'is' debería cambiarse a 'was' en el Reported Speech."
    }
  ]
};
