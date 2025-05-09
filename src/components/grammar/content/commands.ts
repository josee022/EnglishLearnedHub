import { GrammarContent } from '../../../types/grammar';

export const commandsContent: GrammarContent = {
  id: 'commands',
  title: 'Órdenes y Peticiones en Reported Speech',
  introduction: {
    text: 'En Reported Speech, las órdenes, peticiones, consejos y sugerencias se reportan utilizando estructuras específicas. Estas formas emplean principalmente verbos como "tell", "ask", "advise", "recommend" seguidos de infinitivo con "to" o estructuras con "not to" para las prohibiciones.',
    emoji: '📢'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Para órdenes o peticiones afirmativas: Sujeto + told/asked + objeto + to + infinitivo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Close</span> the door."</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Please help</span> me with this."</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Turn off</span> the lights when you leave."</p>
            <p>"<span class="text-green-600 dark:text-green-400 font-bold">Wait</span> for me here."</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>She told me <span class="text-green-600 dark:text-green-400 font-bold">to close</span> the door.</p>
            <p>He asked me <span class="text-green-600 dark:text-green-400 font-bold">to help</span> him with that.</p>
            <p>She told me <span class="text-green-600 dark:text-green-400 font-bold">to turn off</span> the lights when I left.</p>
            <p>He asked me <span class="text-green-600 dark:text-green-400 font-bold">to wait</span> for him there.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura para órdenes afirmativas:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Se utiliza <strong>tell/ask + objeto + to + infinitivo</strong></li>
            <li>"tell" se usa para órdenes más directas o fuertes</li>
            <li>"ask" se usa para peticiones más corteses o suaves</li>
            <li>El imperativo directo se convierte en infinitivo con "to"</li>
            <li>Las expresiones de tiempo y lugar cambian según las reglas habituales</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Para órdenes o peticiones negativas: Sujeto + told/asked + objeto + not to + infinitivo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Directo (Direct Speech)</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">Don't touch</span> that."</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">Please don't be</span> late again."</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">Don't forget</span> your passport."</p>
            <p>"<span class="text-red-600 dark:text-red-400 font-bold">Never tell</span> anyone about this."</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estilo Indirecto (Reported Speech)</p>
            <p>She told me <span class="text-red-600 dark:text-red-400 font-bold">not to touch</span> that.</p>
            <p>He asked me <span class="text-red-600 dark:text-red-400 font-bold">not to be</span> late again.</p>
            <p>She reminded me <span class="text-red-600 dark:text-red-400 font-bold">not to forget</span> my passport.</p>
            <p>He told me <span class="text-red-600 dark:text-red-400 font-bold">never to tell</span> anyone about that.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Estructura para órdenes negativas:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Se utiliza <strong>tell/ask + objeto + not to + infinitivo</strong></li>
            <li>La negación "don't/doesn't" del imperativo directo se convierte en "not to"</li>
            <li>"never" puede mantenerse: "never to tell" o convertirse en "not to...ever"</li>
            <li>Al igual que en las afirmativas, se cambian expresiones de tiempo y lugar si es necesario</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Otros verbos y estructuras para reportar órdenes, peticiones y sugerencias</p>
        <div class="grid grid-cols-1 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Verbos específicos según la función comunicativa</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              <div>
                <p class="font-medium text-purple-600 dark:text-purple-400">Para dar órdenes/instrucciones:</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">order</span>: She <span class="text-purple-600 dark:text-purple-400">ordered</span> me to be quiet.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">command</span>: He <span class="text-purple-600 dark:text-purple-400">commanded</span> us to stand up.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">instruct</span>: The teacher <span class="text-purple-600 dark:text-purple-400">instructed</span> us to open our books.</p>
              </div>
              <div>
                <p class="font-medium text-purple-600 dark:text-purple-400">Para hacer peticiones:</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">beg</span>: She <span class="text-purple-600 dark:text-purple-400">begged</span> me to help her.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">implore</span>: He <span class="text-purple-600 dark:text-purple-400">implored</span> us not to leave.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">urge</span>: They <span class="text-purple-600 dark:text-purple-400">urged</span> me to reconsider.</p>
              </div>
              <div>
                <p class="font-medium text-purple-600 dark:text-purple-400">Para dar consejos/sugerencias:</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">advise</span>: She <span class="text-purple-600 dark:text-purple-400">advised</span> me to study more.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">recommend</span>: He <span class="text-purple-600 dark:text-purple-400">recommended</span> taking the train.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">suggest</span>: They <span class="text-purple-600 dark:text-purple-400">suggested</span> going to the beach.</p>
              </div>
              <div>
                <p class="font-medium text-purple-600 dark:text-purple-400">Para prohibiciones/advertencias:</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">warn</span>: She <span class="text-purple-600 dark:text-purple-400">warned</span> me not to touch the wire.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">forbid</span>: He <span class="text-purple-600 dark:text-purple-400">forbade</span> us to enter the room.</p>
                <p><span class="text-purple-600 dark:text-purple-400 font-bold">prohibit</span>: The sign <span class="text-purple-600 dark:text-purple-400">prohibited</span> smoking.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Estructuras especiales:</p>
          <div class="grid grid-cols-1 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>suggest/recommend + gerundio:</strong> "Let's go to the beach" → He suggested going to the beach.</p>
              <p class="text-amber-800 dark:text-amber-400"><strong>forbid/prohibit + gerundio:</strong> "Don't smoke here" → They prohibited smoking there.</p>
              <p class="text-amber-800 dark:text-amber-400"><strong>warn + about/against + gerundio:</strong> "Be careful with the traffic" → She warned me about driving in heavy traffic.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "\"Open the window.\" → She asked me to open the window.", spanish: "\"Abre la ventana.\" → Ella me pidió que abriera la ventana." },
      { english: "\"Don't be late.\" → My mother told me not to be late.", spanish: "\"No llegues tarde.\" → Mi madre me dijo que no llegara tarde." },
      { english: "\"Please help me.\" → He asked me to help him.", spanish: "\"Por favor, ayúdame.\" → Él me pidió que le ayudara." }
    ]
  },
  uses: {
    description: "Reportar órdenes, peticiones y sugerencias en estilo indirecto es crucial para transmitir correctamente las instrucciones, solicitudes y recomendaciones de otras personas.",
    useCases: [
      {
        title: "Transmitir instrucciones 📋",
        description: "Para comunicar órdenes o instrucciones recibidas de otra persona.",
        examples: [
          { english: "The teacher told us to submit our assignments by Friday.", spanish: "El profesor nos dijo que entregáramos nuestras tareas para el viernes." },
          { english: "My boss asked me to prepare a presentation for next week.", spanish: "Mi jefe me pidió que preparara una presentación para la próxima semana." },
          { english: "The doctor instructed me to take the medicine twice a day.", spanish: "El médico me indicó que tomara la medicina dos veces al día." }
        ]
      },
      {
        title: "Reportar peticiones 🙏",
        description: "Para comunicar solicitudes de ayuda o favores.",
        examples: [
          { english: "She asked me to lend her some money.", spanish: "Ella me pidió que le prestara algo de dinero." },
          { english: "My neighbor requested me to water his plants while he was away.", spanish: "Mi vecino me solicitó que regara sus plantas mientras estaba fuera." },
          { english: "He begged me to keep his secret.", spanish: "Me suplicó que guardara su secreto." }
        ]
      },
      {
        title: "Comunicar consejos y sugerencias 💡",
        description: "Para transmitir recomendaciones y consejos recibidos.",
        examples: [
          { english: "The financial advisor recommended investing in diversified funds.", spanish: "El asesor financiero recomendó invertir en fondos diversificados." },
          { english: "My friend suggested trying the new restaurant downtown.", spanish: "Mi amigo sugirió probar el nuevo restaurante del centro." },
          { english: "The guide advised us to take warm clothes for the mountain trip.", spanish: "El guía nos aconsejó llevar ropa abrigada para el viaje a la montaña." }
        ]
      },
      {
        title: "Reportar advertencias y prohibiciones ⚠️",
        description: "Para comunicar avisos de peligro o restricciones.",
        examples: [
          { english: "The lifeguard warned us not to swim too far from the shore.", spanish: "El socorrista nos advirtió que no nadáramos demasiado lejos de la orilla." },
          { english: "The sign prohibited taking photographs inside the museum.", spanish: "El cartel prohibía tomar fotografías dentro del museo." },
          { english: "The police officer told everyone not to cross the line.", spanish: "El oficial de policía dijo a todos que no cruzaran la línea." }
        ]
      }
    ]
  },
  examples: [
    { english: "Direct: \"Sit down.\" → Reported: She told me to sit down.", spanish: "Directo: \"Siéntate.\" → Indirecto: Ella me dijo que me sentara." },
    { english: "Direct: \"Please wait here.\" → Reported: He asked me to wait there.", spanish: "Directo: \"Por favor, espera aquí.\" → Indirecto: Él me pidió que esperara allí." },
    { english: "Direct: \"Don't open that door.\" → Reported: She warned me not to open that door.", spanish: "Directo: \"No abras esa puerta.\" → Indirecto: Ella me advirtió que no abriera esa puerta." },
    { english: "Direct: \"Call me tomorrow.\" → Reported: He asked me to call him the next day.", spanish: "Directo: \"Llámame mañana.\" → Indirecto: Él me pidió que lo llamara al día siguiente." },
    { english: "Direct: \"Let's go to the cinema.\" → Reported: She suggested going to the cinema.", spanish: "Directo: \"Vamos al cine.\" → Indirecto: Ella sugirió ir al cine." },
    { english: "Direct: \"You should study more.\" → Reported: He advised me to study more.", spanish: "Directo: \"Deberías estudiar más.\" → Indirecto: Él me aconsejó que estudiara más." },
    { english: "Direct: \"Never talk to strangers.\" → Reported: My mother warned me never to talk to strangers.", spanish: "Directo: \"Nunca hables con extraños.\" → Indirecto: Mi madre me advirtió que nunca hablara con extraños." },
    { english: "Direct: \"Please don't tell anyone.\" → Reported: She begged me not to tell anyone.", spanish: "Directo: \"Por favor, no se lo digas a nadie.\" → Indirecto: Ella me suplicó que no se lo dijera a nadie." }
  ],
  timeExpressions: [
    { word: "now → then", description: "ahora → entonces" },
    { word: "today → that day", description: "hoy → ese día" },
    { word: "tomorrow → the next day", description: "mañana → el día siguiente" },
    { word: "yesterday → the day before", description: "ayer → el día anterior" },
    { word: "next week → the following week", description: "la próxima semana → la semana siguiente" },
    { word: "here → there", description: "aquí → allí" },
    { word: "this → that", description: "esto → eso" },
    { word: "these → those", description: "estos → esos" },
    { word: "come → go", description: "venir → ir" },
    { word: "bring → take", description: "traer → llevar" }
  ],
  tips: [
    {
      title: "Utiliza el verbo adecuado",
      content: "Elige el verbo de reporte según la fuerza o intención de la orden o petición original: 'tell' para órdenes más directas, 'ask' para peticiones más educadas, 'suggest' para sugerencias, etc.",
      emoji: "🎯"
    },
    {
      title: "Estructura específica con 'suggest'",
      content: "El verbo 'suggest' normalmente va seguido de gerundio (no de infinitivo): 'He suggested going to the beach' (no 'to go'). También puede usarse con 'that + should + infinitivo': 'He suggested that we should go to the beach.'",
      emoji: "💡"
    },
    {
      title: "Let's → suggested/proposed",
      content: "Las sugerencias con 'Let's...' normalmente se reportan con 'suggested/proposed + gerundio': 'Let's go out' → 'He suggested going out.'",
      emoji: "👥"
    },
    {
      title: "Cambios de tiempo y lugar",
      content: "Al igual que en otros tipos de Reported Speech, recuerda cambiar las expresiones de tiempo y lugar si es necesario: 'Wait here' → 'He told me to wait there'.",
      emoji: "🕒"
    }
  ],
  commonMistakes: [
    {
      incorrect: "She told me don't open the window.",
      correct: "She told me not to open the window.",
      explanation: "Las órdenes negativas se reportan con 'not to + infinitivo', no con 'don't'."
    },
    {
      incorrect: "He asked me that I help him.",
      correct: "He asked me to help him.",
      explanation: "Después de 'ask' en el sentido de pedir algo, se usa 'to + infinitivo', no una cláusula con 'that'."
    },
    {
      incorrect: "The teacher suggested to go to the museum.",
      correct: "The teacher suggested going to the museum.",
      explanation: "Después de 'suggest' se usa gerundio, no infinitivo con 'to'."
    },
    {
      incorrect: "My mother told to be careful.",
      correct: "My mother told me to be careful.",
      explanation: "El verbo 'tell' necesita un objeto que indique a quién se dio la orden."
    },
    {
      incorrect: "She advised me that I should study harder.",
      correct: "She advised me to study harder.",
      explanation: "Aunque 'advise that + should' es posible, es más común y natural usar 'advise + objeto + to + infinitivo'."
    }
  ]
};
