import { GrammarContent } from '../../../types/grammar';

export const passiveModalsContent: GrammarContent = {
  id: 'passive-modals',
  title: 'Voz Pasiva con Verbos Modales',
  introduction: {
    text: 'La voz pasiva con verbos modales combina la estructura de la voz pasiva con verbos modales como can, could, must, should, may, might y otros. Esta construcción permite expresar ideas como posibilidad, necesidad, obligación, permiso, prohibición, recomendación o capacidad, manteniendo el enfoque en quien recibe la acción en lugar de en quien la realiza.',
    emoji: '🔧'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto (receptor) + verbo modal + be + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Can / Could</p>
            <p>The document <span class="text-green-600 dark:text-green-400 font-bold">can be downloaded</span> from our website.</p>
            <p>English <span class="text-green-600 dark:text-green-400 font-bold">can be learned</span> at any age.</p>
            <p>The message <span class="text-green-600 dark:text-green-400 font-bold">could be sent</span> by email instead.</p>
            <p>More information <span class="text-green-600 dark:text-green-400 font-bold">could be found</span> in the library.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Must / Should</p>
            <p>All visitors <span class="text-green-600 dark:text-green-400 font-bold">must be accompanied</span> by a staff member.</p>
            <p>The form <span class="text-green-600 dark:text-green-400 font-bold">must be completed</span> before Friday.</p>
            <p>This report <span class="text-green-600 dark:text-green-400 font-bold">should be finished</span> by tomorrow.</p>
            <p>Children <span class="text-green-600 dark:text-green-400 font-bold">should be supervised</span> at all times.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">May / Might</p>
            <p>Your application <span class="text-green-600 dark:text-green-400 font-bold">may be rejected</span> if incomplete.</p>
            <p>The concert <span class="text-green-600 dark:text-green-400 font-bold">may be cancelled</span> due to bad weather.</p>
            <p>Some details <span class="text-green-600 dark:text-green-400 font-bold">might be changed</span> before publication.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">might be asked</span> to provide additional information.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Have to / Need to</p>
            <p>The car <span class="text-green-600 dark:text-green-400 font-bold">has to be serviced</span> every year.</p>
            <p>These documents <span class="text-green-600 dark:text-green-400 font-bold">have to be signed</span> by all participants.</p>
            <p>The kitchen <span class="text-green-600 dark:text-green-400 font-bold">needs to be cleaned</span> before the guests arrive.</p>
            <p>The data <span class="text-green-600 dark:text-green-400 font-bold">needs to be analyzed</span> carefully.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La estructura básica es: <strong>verbo modal + be + participio pasado</strong></li>
            <li>A diferencia de otros tiempos de la voz pasiva, el verbo auxiliar "be" siempre va en su forma base después del modal</li>
            <li>No existe "been" después de un modal; siempre usamos la forma base "be"</li>
            <li>El verbo principal siempre va en participio pasado</li>
            <li>El agente (introducido por "by") es opcional y a menudo se omite si es obvio o desconocido</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Transformación de Activa a Pasiva:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (con modales):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>You can download the document from our website.</li>
                <li>A staff member must accompany all visitors.</li>
                <li>We might change some details before publication.</li>
                <li>Someone should finish this report by tomorrow.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (con modales):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The document can be downloaded from our website.</li>
                <li>All visitors must be accompanied by a staff member.</li>
                <li>Some details might be changed before publication.</li>
                <li>This report should be finished by tomorrow.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto (receptor) + verbo modal + not + be + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Can't / Couldn't</p>
            <p>This document <span class="text-red-600 dark:text-red-400 font-bold">cannot be shared</span> with third parties.</p>
            <p>The window <span class="text-red-600 dark:text-red-400 font-bold">can't be opened</span> because it's stuck.</p>
            <p>The problem <span class="text-red-600 dark:text-red-400 font-bold">couldn't be solved</span> yesterday.</p>
            <p>Her handwriting <span class="text-red-600 dark:text-red-400 font-bold">couldn't be read</span> by anyone.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Mustn't / Shouldn't</p>
            <p>This information <span class="text-red-600 dark:text-red-400 font-bold">must not be disclosed</span> to anyone.</p>
            <p>The door <span class="text-red-600 dark:text-red-400 font-bold">mustn't be left</span> unlocked overnight.</p>
            <p>These chemicals <span class="text-red-600 dark:text-red-400 font-bold">shouldn't be mixed</span> together.</p>
            <p>Children <span class="text-red-600 dark:text-red-400 font-bold">shouldn't be allowed</span> to play near the road.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">May not / Might not</p>
            <p>Your request <span class="text-red-600 dark:text-red-400 font-bold">may not be approved</span> by the committee.</p>
            <p>The exhibit <span class="text-red-600 dark:text-red-400 font-bold">may not be photographed</span> by visitors.</p>
            <p>The package <span class="text-red-600 dark:text-red-400 font-bold">might not be delivered</span> on time.</p>
            <p>All the tickets <span class="text-red-600 dark:text-red-400 font-bold">might not be sold</span> before the event.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Don't have to / Don't need to</p>
            <p>This form <span class="text-red-600 dark:text-red-400 font-bold">doesn't have to be completed</span> in advance.</p>
            <p>The assignment <span class="text-red-600 dark:text-red-400 font-bold">doesn't have to be submitted</span> until Friday.</p>
            <p>These papers <span class="text-red-600 dark:text-red-400 font-bold">don't need to be translated</span> into English.</p>
            <p>The computer <span class="text-red-600 dark:text-red-400 font-bold">doesn't need to be turned off</span> at night.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, se usan las siguientes contracciones:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>cannot → <strong>can't</strong></li>
            <li>could not → <strong>couldn't</strong></li>
            <li>must not → <strong>mustn't</strong></li>
            <li>should not → <strong>shouldn't</strong></li>
            <li>does not have to → <strong>doesn't have to</strong></li>
            <li>do not need to → <strong>don't need to</strong></li>
          </ul>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Significados diferentes:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Mustn't be (prohibición):</strong></p>
              <p class="text-amber-800 dark:text-amber-400">The door mustn't be left open. (Está prohibido dejar la puerta abierta)</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Doesn't have to be (ausencia de necesidad):</strong></p>
              <p class="text-amber-800 dark:text-amber-400">The door doesn't have to be locked. (No es necesario cerrar la puerta con llave)</p>
            </div>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Verbo modal + sujeto (receptor) + be + participio pasado (+ by + agente)?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Can / Could</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Can this problem be solved</span> without additional resources?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Can English be learned</span> without a teacher?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Could the meeting be rescheduled</span> for next week?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Could more information be provided</span> about this issue?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Should / Must</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Should this document be signed</span> by both parties?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Should all the data be backed up</span> before the update?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Must these instructions be followed</span> exactly?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Must permission be obtained</span> in advance?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>Yes, it can.</li>
                <li>Yes, they should.</li>
                <li>Yes, it must.</li>
                <li>Yes, they might.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>No, it can't.</li>
                <li>No, they shouldn't.</li>
                <li>No, it mustn't.</li>
                <li>No, they might not.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>How can</strong> this problem <strong>be solved</strong>?</li>
            <li><strong>When should</strong> the application <strong>be submitted</strong>?</li>
            <li><strong>Where must</strong> the form <strong>be sent</strong>?</li>
            <li><strong>What might</strong> <strong>be done</strong> to improve the situation?</li>
            <li><strong>Why can't</strong> the meeting <strong>be postponed</strong>?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "This medicine must be taken after meals.", spanish: "Este medicamento debe ser tomado después de las comidas." },
      { english: "The window can't be opened because it's stuck.", spanish: "La ventana no puede ser abierta porque está atascada." },
      { english: "Should these documents be translated into Spanish?", spanish: "¿Deberían estos documentos ser traducidos al español?" },
      { english: "The concert might be cancelled due to bad weather.", spanish: "El concierto podría ser cancelado debido al mal tiempo." }
    ]
  },
  uses: {
    description: "La voz pasiva con verbos modales tiene usos específicos dependiendo del verbo modal utilizado:",
    useCases: [
      {
        title: "Expresar posibilidad o capacidad (Can/Could) 💡",
        description: "Para indicar que algo es posible o que existe la capacidad de hacer algo.",
        examples: [
          { english: "The problem can be solved in different ways.", spanish: "El problema puede ser resuelto de diferentes maneras." },
          { english: "The car could be repaired by next week.", spanish: "El coche podría ser reparado para la próxima semana." },
          { english: "More information can be found on our website.", spanish: "Más información puede ser encontrada en nuestro sitio web." }
        ]
      },
      {
        title: "Expresar obligación o necesidad (Must/Have to) ⚠️",
        description: "Para indicar que algo es obligatorio o necesario.",
        examples: [
          { english: "All visitors must be accompanied by a staff member.", spanish: "Todos los visitantes deben ser acompañados por un miembro del personal." },
          { english: "Seatbelts must be worn at all times during the flight.", spanish: "Los cinturones de seguridad deben ser usados en todo momento durante el vuelo." },
          { english: "The form has to be completed before submission.", spanish: "El formulario tiene que ser completado antes de su presentación." }
        ]
      },
      {
        title: "Dar recomendaciones o consejos (Should) 💬",
        description: "Para expresar lo que se recomienda o aconseja hacer.",
        examples: [
          { english: "Children should be supervised at all times near water.", spanish: "Los niños deberían ser supervisados en todo momento cerca del agua." },
          { english: "The email should be sent as soon as possible.", spanish: "El correo electrónico debería ser enviado lo antes posible." },
          { english: "These instructions should be followed carefully.", spanish: "Estas instrucciones deberían ser seguidas cuidadosamente." }
        ]
      },
      {
        title: "Expresar probabilidad (May/Might) 🎲",
        description: "Para hablar de algo que posiblemente ocurra.",
        examples: [
          { english: "The flight may be delayed due to fog.", spanish: "El vuelo puede ser retrasado debido a la niebla." },
          { english: "Your application might be considered for the next round.", spanish: "Tu solicitud podría ser considerada para la próxima ronda." },
          { english: "The project may be completed ahead of schedule.", spanish: "El proyecto puede ser completado antes de lo previsto." }
        ]
      },
      {
        title: "Expresar prohibición (Mustn't) 🚫",
        description: "Para indicar algo que está prohibido o no debe hacerse.",
        examples: [
          { english: "This information mustn't be shared with anyone outside the company.", spanish: "Esta información no debe ser compartida con nadie fuera de la empresa." },
          { english: "The door mustn't be left unlocked overnight.", spanish: "La puerta no debe dejarse sin llave durante la noche." },
          { english: "These chemicals mustn't be mixed together.", spanish: "Estos productos químicos no deben ser mezclados juntos." }
        ]
      },
      {
        title: "Expresar ausencia de necesidad (Don't have to/Don't need to) 🆓",
        description: "Para indicar que algo no es necesario o no es obligatorio.",
        examples: [
          { english: "The report doesn't have to be finished today.", spanish: "El informe no tiene que ser terminado hoy." },
          { english: "These documents don't need to be translated into French.", spanish: "Estos documentos no necesitan ser traducidos al francés." },
          { english: "The form doesn't have to be filled out in duplicate.", spanish: "El formulario no tiene que ser rellenado por duplicado." }
        ]
      }
    ]
  },
  examples: [
    { english: "The door can be opened with this key.", spanish: "La puerta puede ser abierta con esta llave." },
    { english: "Your application should be submitted before the deadline.", spanish: "Tu solicitud debería ser presentada antes de la fecha límite." },
    { english: "Mobile phones must be switched off during the exam.", spanish: "Los teléfonos móviles deben ser apagados durante el examen." },
    { english: "Can this problem be solved without additional costs?", spanish: "¿Puede este problema ser resuelto sin costos adicionales?" },
    { english: "The concert might be cancelled if it rains.", spanish: "El concierto podría ser cancelado si llueve." },
    { english: "These materials shouldn't be exposed to direct sunlight.", spanish: "Estos materiales no deberían ser expuestos a la luz solar directa." },
    { english: "All passengers must be seated during takeoff and landing.", spanish: "Todos los pasajeros deben estar sentados durante el despegue y el aterrizaje." },
    { english: "The document doesn't have to be signed today.", spanish: "El documento no tiene que ser firmado hoy." }
  ],
  timeExpressions: [
    { word: "always", description: "siempre" },
    { word: "never", description: "nunca" },
    { word: "sometimes", description: "a veces" },
    { word: "often", description: "a menudo" },
    { word: "before + [evento/tiempo]", description: "antes de + [evento/tiempo]" },
    { word: "after + [evento/tiempo]", description: "después de + [evento/tiempo]" },
    { word: "by + [tiempo límite]", description: "para + [tiempo límite]" },
    { word: "during + [período/evento]", description: "durante + [período/evento]" }
  ],
  tips: [
    {
      title: "La forma del verbo 'be' nunca cambia",
      content: "A diferencia de otros tiempos de la voz pasiva, después de un verbo modal siempre usamos la forma base 'be', nunca 'am', 'is', 'are', 'was', 'were' o 'been'. Por ejemplo: 'The window must be closed' (no 'must is closed' ni 'must been closed').",
      emoji: "⚠️"
    },
    {
      title: "Diferencia entre mustn't y don't have to",
      content: "'Mustn't be' expresa prohibición (algo que no está permitido), mientras que 'doesn't have to be' expresa ausencia de necesidad (algo que no es obligatorio pero está permitido). Compara: 'The door mustn't be left open' (está prohibido dejarla abierta) vs. 'The door doesn't have to be locked' (no es necesario cerrarla con llave, pero puedes hacerlo si quieres).",
      emoji: "🔄"
    },
    {
      title: "Modales perfectos en pasiva",
      content: "Para referirse a acciones pasadas, puedes usar modales perfectos en voz pasiva: 'modal + have + been + participio pasado'. Por ejemplo: 'The mistake could have been avoided' (El error podría haberse evitado), 'The documents must have been stolen' (Los documentos deben haber sido robados).",
      emoji: "🕒"
    },
    {
      title: "Verbos modales en pasiva para sugerencias",
      content: "La combinación 'could be + participio pasado' es muy útil para hacer sugerencias de forma cortés: 'The meeting could be postponed until next week' (La reunión podría ser pospuesta hasta la próxima semana), 'More chairs could be added to the room' (Se podrían añadir más sillas a la habitación).",
      emoji: "💬"
    }
  ],
  commonMistakes: [
    {
      incorrect: "The form must is completed.",
      correct: "The form must be completed.",
      explanation: "Después de un verbo modal, siempre usamos la forma base 'be', no las formas conjugadas como 'is', 'are', etc."
    },
    {
      incorrect: "This problem can solved easily.",
      correct: "This problem can be solved easily.",
      explanation: "Falta el verbo 'be' entre el modal 'can' y el participio pasado."
    },
    {
      incorrect: "All visitors should been accompanied.",
      correct: "All visitors should be accompanied.",
      explanation: "Después de un modal, usamos 'be', no 'been'."
    },
    {
      incorrect: "The windows must being cleaned weekly.",
      correct: "The windows must be cleaned weekly.",
      explanation: "Usamos 'be' y no 'being' después del modal."
    },
    {
      incorrect: "The report might will be finished tomorrow.",
      correct: "The report might be finished tomorrow.",
      explanation: "No se pueden usar dos verbos modales juntos ('might' y 'will')."
    },
    {
      incorrect: "The book can to be borrowed from the library.",
      correct: "The book can be borrowed from the library.",
      explanation: "No se usa 'to' después de un verbo modal."
    }
  ]
};
