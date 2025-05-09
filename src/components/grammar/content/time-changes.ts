import { GrammarContent } from '../../../types/grammar';

export const timeChangesContent: GrammarContent = {
  id: 'time-changes',
  title: 'Cambios Temporales en Reported Speech',
  introduction: {
    text: 'Al transformar discurso directo a indirecto, es crucial entender cómo se modifican los tiempos verbales y las expresiones de tiempo y lugar. Estos cambios dependen principalmente de si estamos reportando algo desde el pasado, lo cual es el caso más común.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Cambios de tiempos verbales en Reported Speech</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>Present Simple: "I <span class="text-green-600 dark:text-green-400 font-bold">work</span> here."</p>
            <p>Present Continuous: "I <span class="text-green-600 dark:text-green-400 font-bold">am working</span> now."</p>
            <p>Present Perfect: "I <span class="text-green-600 dark:text-green-400 font-bold">have finished</span> it."</p>
            <p>Past Simple: "I <span class="text-green-600 dark:text-green-400 font-bold">visited</span> Paris."</p>
            <p>Future (will): "I <span class="text-green-600 dark:text-green-400 font-bold">will help</span> you."</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>→ Past Simple: She said she <span class="text-green-600 dark:text-green-400 font-bold">worked</span> there.</p>
            <p>→ Past Continuous: He said he <span class="text-green-600 dark:text-green-400 font-bold">was working</span> then.</p>
            <p>→ Past Perfect: She said she <span class="text-green-600 dark:text-green-400 font-bold">had finished</span> it.</p>
            <p>→ Past Perfect: He said he <span class="text-green-600 dark:text-green-400 font-bold">had visited</span> Paris.</p>
            <p>→ Conditional: She said she <span class="text-green-600 dark:text-green-400 font-bold">would help</span> me.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Reglas generales para los cambios de tiempo:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Present Simple → Past Simple</li>
            <li>Present Continuous → Past Continuous</li>
            <li>Present Perfect → Past Perfect</li>
            <li>Past Simple → Past Perfect</li>
            <li>Past Continuous → Past Perfect Continuous</li>
            <li>Will → Would</li>
            <li>Can → Could</li>
            <li>May → Might</li>
            <li>Must → Had to</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Cambios en expresiones de tiempo y lugar</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Expresiones de tiempo en discurso directo</p>
            <p>Today → <span class="text-red-600 dark:text-red-400 font-bold">that day</span></p>
            <p>Now → <span class="text-red-600 dark:text-red-400 font-bold">then</span></p>
            <p>Yesterday → <span class="text-red-600 dark:text-red-400 font-bold">the day before/the previous day</span></p>
            <p>Tomorrow → <span class="text-red-600 dark:text-red-400 font-bold">the next day/the following day</span></p>
            <p>This week → <span class="text-red-600 dark:text-red-400 font-bold">that week</span></p>
            <p>Last week → <span class="text-red-600 dark:text-red-400 font-bold">the week before/the previous week</span></p>
            <p>Next week → <span class="text-red-600 dark:text-red-400 font-bold">the following week</span></p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Expresiones de lugar y demostrativos</p>
            <p>Here → <span class="text-red-600 dark:text-red-400 font-bold">there</span></p>
            <p>This → <span class="text-red-600 dark:text-red-400 font-bold">that</span></p>
            <p>These → <span class="text-red-600 dark:text-red-400 font-bold">those</span></p>
            <p>Come → <span class="text-red-600 dark:text-red-400 font-bold">go</span></p>
            <p>Bring → <span class="text-red-600 dark:text-red-400 font-bold">take</span></p>
            <p>Ago → <span class="text-red-600 dark:text-red-400 font-bold">before</span></p>
            <p>Tonight → <span class="text-red-600 dark:text-red-400 font-bold">that night</span></p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Recuerda:</p>
          <p class="text-amber-800 dark:text-amber-400">Los cambios en expresiones de tiempo y lugar son necesarios cuando reportamos desde un momento temporal diferente o desde un lugar diferente. Si las circunstancias siguen siendo las mismas, puede que no sea necesario cambiar ciertas expresiones.</p>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Excepciones a las reglas de cambio temporal</p>
        <div class="grid grid-cols-1 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Situaciones donde no es necesario cambiar el tiempo verbal</p>
            
            <p class="mt-2 font-medium text-purple-600 dark:text-purple-400">1. Cuando reportamos algo que sigue siendo verdad:</p>
            <div class="pl-4">
              <p>Direct: "The Earth revolves around the Sun."</p>
              <p>Reported: <span class="text-purple-600 dark:text-purple-400 font-bold">She said that the Earth revolves around the Sun.</span> (Sigue siendo verdad)</p>
            </div>
            
            <p class="mt-2 font-medium text-purple-600 dark:text-purple-400">2. Cuando reportamos algo muy reciente:</p>
            <div class="pl-4">
              <p>Direct: "I'm tired." (Hace unos minutos)</p>
              <p>Reported: <span class="text-purple-600 dark:text-purple-400 font-bold">She said she is tired.</span> (Si aún es relevante)</p>
            </div>
            
            <p class="mt-2 font-medium text-purple-600 dark:text-purple-400">3. Con cláusulas condicionales tipo 2 y 3:</p>
            <div class="pl-4">
              <p>Direct: "If I had the money, I would buy a house."</p>
              <p>Reported: <span class="text-purple-600 dark:text-purple-400 font-bold">He said that if he had the money, he would buy a house.</span> (No cambia)</p>
            </div>
            
            <p class="mt-2 font-medium text-purple-600 dark:text-purple-400">4. Cuando el verbo de reporte está en presente:</p>
            <div class="pl-4">
              <p>Direct: "I will call you tomorrow."</p>
              <p>Reported (hoy mismo): <span class="text-purple-600 dark:text-purple-400 font-bold">She says she will call me tomorrow.</span> (No es necesario cambiar)</p>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Nota importante:</p>
          <p class="text-amber-800 dark:text-amber-400">El contexto es crucial para determinar si se deben aplicar cambios temporales. La regla básica es: si estamos reportando desde un tiempo o lugar diferente, y lo que se dijo ya no es válido o ha cambiado, aplicamos los cambios. Si reportamos algo inmediato o que sigue siendo cierto, podemos mantener el tiempo original.</p>
        </div>
      </div>
    `,
    examples: [
      { english: "Direct: \"I am working now.\" → Reported: She said she was working then.", spanish: "Directo: \"Estoy trabajando ahora.\" → Indirecto: Ella dijo que estaba trabajando entonces." },
      { english: "Direct: \"We visited Paris last summer.\" → Reported: They said they had visited Paris the previous summer.", spanish: "Directo: \"Visitamos París el verano pasado.\" → Indirecto: Dijeron que habían visitado París el verano anterior." },
      { english: "Direct: \"I will see you tomorrow.\" → Reported: He said he would see me the next day.", spanish: "Directo: \"Te veré mañana.\" → Indirecto: Él dijo que me vería al día siguiente." }
    ]
  },
  uses: {
    description: "Los cambios temporales en el Reported Speech son esenciales para mantener la coherencia lógica y temporal cuando reportamos lo que alguien dijo en un momento diferente al actual.",
    useCases: [
      {
        title: "Reportar declaraciones pasadas 📜",
        description: "Para transmitir correctamente lo que alguien dijo en el pasado.",
        examples: [
          { english: "Direct: \"I work in a bank.\" → Reported: She told me she worked in a bank.", spanish: "Directo: \"Trabajo en un banco.\" → Indirecto: Ella me dijo que trabajaba en un banco." },
          { english: "Direct: \"I've never been to Africa.\" → Reported: He said he had never been to Africa.", spanish: "Directo: \"Nunca he estado en África.\" → Indirecto: Él dijo que nunca había estado en África." },
          { english: "Direct: \"I'll finish it tomorrow.\" → Reported: She promised she would finish it the next day.", spanish: "Directo: \"Lo terminaré mañana.\" → Indirecto: Ella prometió que lo terminaría al día siguiente." }
        ]
      },
      {
        title: "Narración de eventos 📖",
        description: "Para incorporar discurso directo en una narración en pasado.",
        examples: [
          { english: "Direct: \"I am feeling sick.\" → Reported: She said she was feeling sick, so she went home.", spanish: "Directo: \"Me siento enferma.\" → Indirecto: Dijo que se sentía enferma, así que se fue a casa." },
          { english: "Direct: \"We will help you.\" → Reported: They said they would help me, but they never did.", spanish: "Directo: \"Te ayudaremos.\" → Indirecto: Dijeron que me ayudarían, pero nunca lo hicieron." },
          { english: "Direct: \"I can't come tonight.\" → Reported: John said he couldn't come that night because he was busy.", spanish: "Directo: \"No puedo venir esta noche.\" → Indirecto: John dijo que no podía venir esa noche porque estaba ocupado." }
        ]
      },
      {
        title: "Transmitir información precisa ✓",
        description: "Para mantener el significado exacto y las implicaciones temporales de lo dicho.",
        examples: [
          { english: "Direct: \"I'll see you here tomorrow.\" → Reported: She said she would see me there the next day.", spanish: "Directo: \"Te veré aquí mañana.\" → Indirecto: Ella dijo que me vería allí al día siguiente." },
          { english: "Direct: \"I visited Rome last year.\" → Reported: He told me he had visited Rome the previous year.", spanish: "Directo: \"Visité Roma el año pasado.\" → Indirecto: Él me dijo que había visitado Roma el año anterior." },
          { english: "Direct: \"I have lived here for ten years.\" → Reported: She said she had lived there for ten years.", spanish: "Directo: \"He vivido aquí durante diez años.\" → Indirecto: Ella dijo que había vivido allí durante diez años." }
        ]
      },
      {
        title: "Comunicación académica y profesional 📚",
        description: "Para reportar estudios, informes o declaraciones en contextos formales.",
        examples: [
          { english: "Direct: \"Our research shows significant results.\" → Reported: The scientists said their research showed significant results.", spanish: "Directo: \"Nuestra investigación muestra resultados significativos.\" → Indirecto: Los científicos dijeron que su investigación mostraba resultados significativos." },
          { english: "Direct: \"We will launch the product next month.\" → Reported: The company announced they would launch the product the following month.", spanish: "Directo: \"Lanzaremos el producto el próximo mes.\" → Indirecto: La compañía anunció que lanzarían el producto el mes siguiente." },
          { english: "Direct: \"I am working on a new project.\" → Reported: She mentioned she was working on a new project.", spanish: "Directo: \"Estoy trabajando en un nuevo proyecto.\" → Indirecto: Mencionó que estaba trabajando en un nuevo proyecto." }
        ]
      }
    ]
  },
  examples: [
    { english: "Direct: \"I am studying.\" → Reported: She said she was studying.", spanish: "Directo: \"Estoy estudiando.\" → Indirecto: Ella dijo que estaba estudiando." },
    { english: "Direct: \"I have finished my homework.\" → Reported: He said he had finished his homework.", spanish: "Directo: \"He terminado mi tarea.\" → Indirecto: Él dijo que había terminado su tarea." },
    { english: "Direct: \"I went to the cinema yesterday.\" → Reported: She told me she had gone to the cinema the day before.", spanish: "Directo: \"Fui al cine ayer.\" → Indirecto: Ella me dijo que había ido al cine el día anterior." },
    { english: "Direct: \"I will call you tomorrow.\" → Reported: He said he would call me the next day.", spanish: "Directo: \"Te llamaré mañana.\" → Indirecto: Él dijo que me llamaría al día siguiente." },
    { english: "Direct: \"I can help you.\" → Reported: She said she could help me.", spanish: "Directo: \"Puedo ayudarte.\" → Indirecto: Ella dijo que podía ayudarme." },
    { english: "Direct: \"I must finish this today.\" → Reported: He said he had to finish that that day.", spanish: "Directo: \"Debo terminar esto hoy.\" → Indirecto: Él dijo que tenía que terminar eso ese día." },
    { english: "Direct: \"I should study more.\" → Reported: She said she should study more.", spanish: "Directo: \"Debería estudiar más.\" → Indirecto: Ella dijo que debería estudiar más." },
    { english: "Direct: \"I might come later.\" → Reported: He said he might come later.", spanish: "Directo: \"Puede que venga más tarde.\" → Indirecto: Él dijo que puede que viniera más tarde." }
  ],
  timeExpressions: [
    { word: "now → then", description: "ahora → entonces" },
    { word: "today → that day", description: "hoy → ese día" },
    { word: "yesterday → the day before/the previous day", description: "ayer → el día anterior" },
    { word: "tomorrow → the next day/the following day", description: "mañana → el día siguiente" },
    { word: "this week → that week", description: "esta semana → esa semana" },
    { word: "last month → the previous month/the month before", description: "el mes pasado → el mes anterior" },
    { word: "next year → the following year", description: "el próximo año → el año siguiente" },
    { word: "ago → before", description: "hace → antes" },
    { word: "here → there", description: "aquí → allí" },
    { word: "this/these → that/those", description: "este(os) → ese(os)" }
  ],
  tips: [
    {
      title: "Contexto es clave",
      content: "No siempre es necesario cambiar los tiempos verbales. Si lo que se reporta sigue siendo verdad, o si se reporta muy poco después, a veces se pueden mantener los tiempos originales.",
      emoji: "🔑"
    },
    {
      title: "Backshift (retroceso temporal)",
      content: "La regla general es 'retroceder un tiempo' en la escala temporal. Si el tiempo original ya es pasado, se usa el Past Perfect para mostrar un 'pasado del pasado'.",
      emoji: "⏪"
    },
    {
      title: "Modales que no cambian",
      content: "Algunos verbos modales no cambian en Reported Speech: would, should, could, might, ought to. Por ejemplo: 'I should go' → 'He said he should go'.",
      emoji: "🔄"
    },
    {
      title: "Verbo de reporte en presente",
      content: "Si el verbo que introduce el Reported Speech está en presente (says, tells, etc.), generalmente no se aplican cambios temporales: 'She says she will come tomorrow'.",
      emoji: "⏱️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "She said she is happy.",
      correct: "She said she was happy.",
      explanation: "Si estamos reportando desde el pasado y no sabemos si sigue siendo verdad, debemos cambiar el presente 'is' por pasado 'was'."
    },
    {
      incorrect: "He told me he will come tomorrow.",
      correct: "He told me he would come the next day.",
      explanation: "Tanto el tiempo verbal 'will→would' como la expresión temporal 'tomorrow→the next day' deben cambiar."
    },
    {
      incorrect: "They said they have finished the project.",
      correct: "They said they had finished the project.",
      explanation: "El Present Perfect 'have finished' debe cambiarse a Past Perfect 'had finished'."
    },
    {
      incorrect: "She said she went to Paris last week.",
      correct: "She said she had gone to Paris the previous week.",
      explanation: "El Past Simple 'went' debe cambiarse a Past Perfect 'had gone', y 'last week' a 'the previous week'."
    },
    {
      incorrect: "He told me he must leave early.",
      correct: "He told me he had to leave early.",
      explanation: "El modal 'must' cambia a 'had to' en Reported Speech."
    }
  ]
};
