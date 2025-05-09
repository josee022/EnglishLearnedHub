import { GrammarContent } from '../../../types/grammar';

export const mustHaveToContent: GrammarContent = {
  id: 'must-have-to',
  title: 'Must / Have to',
  introduction: {
    text: 'Los modales "must" y "have to" expresan obligación, necesidad o deducción lógica. Aunque tienen significados similares cuando indican obligación, "must" tiende a expresar una obligación interna (decisión personal), mientras que "have to" suele indicar una obligación externa (reglas o circunstancias). Para deducciones lógicas, generalmente se prefiere "must".',
    emoji: '⚠️'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Must: Sujeto + must + verbo en forma base</p>
        <p class="font-medium">Have to: Sujeto + have/has to + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Must (presente)</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">must finish</span> this report today.</p>
            <p>You <span class="text-green-600 dark:text-green-400 font-bold">must be</span> quiet in the library.</p>
            <p>She <span class="text-green-600 dark:text-green-400 font-bold">must attend</span> the meeting.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">must follow</span> the rules.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Have to (presente y otros tiempos)</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">have to work</span> on weekends.</p>
            <p>He <span class="text-green-600 dark:text-green-400 font-bold">has to study</span> for his exam.</p>
            <p>We <span class="text-green-600 dark:text-green-400 font-bold">had to leave</span> early yesterday.</p>
            <p>They <span class="text-green-600 dark:text-green-400 font-bold">will have to wait</span> until tomorrow.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Características importantes:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Must</strong> solo tiene forma presente; para otros tiempos verbales se usa <strong>have to</strong></li>
            <li><strong>Must</strong> expresa principalmente obligación personal o deducción lógica</li>
            <li><strong>Have to</strong> puede usarse en todos los tiempos verbales y se conjuga como un verbo normal</li>
            <li><strong>Have to</strong> generalmente indica obligación externa (impuesta por reglas, leyes, circunstancias)</li>
            <li>Para deducciones lógicas (ej. "Debe ser el cartero") se usa casi siempre <strong>must</strong>, no <strong>have to</strong></li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Must not/mustn't: Sujeto + mustn't + verbo en forma base</p>
        <p class="font-medium">Don't/doesn't have to: Sujeto + don't/doesn't have to + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Mustn't (prohibición)</p>
            <p>You <span class="text-red-600 dark:text-red-400 font-bold">mustn't tell</span> anyone about this.</p>
            <p>Students <span class="text-red-600 dark:text-red-400 font-bold">mustn't use</span> phones in class.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">mustn't forget</span> to lock the door.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">mustn't enter</span> this area.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Don't have to (ausencia de obligación)</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">don't have to work</span> tomorrow.</p>
            <p>He <span class="text-red-600 dark:text-red-400 font-bold">doesn't have to pay</span> for the course.</p>
            <p>We <span class="text-red-600 dark:text-red-400 font-bold">didn't have to wait</span> long.</p>
            <p>They <span class="text-red-600 dark:text-red-400 font-bold">won't have to finish</span> the project today.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">⚠️ Diferencia fundamental:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Mustn't</strong> significa prohibición: "no debes/está prohibido" (no es opcional)</li>
            <li><strong>Don't have to</strong> significa ausencia de obligación: "no es necesario" (es opcional)</li>
            <li>Esta diferencia es crucial y a menudo causa confusión entre los estudiantes de inglés</li>
          </ul>
          <p class="text-amber-800 dark:text-amber-400 mt-2">Compara:</p>
          <p class="text-amber-800 dark:text-amber-400">- "You <strong>mustn't park</strong> here." (Está prohibido aparcar aquí, es ilegal)</p>
          <p class="text-amber-800 dark:text-amber-400">- "You <strong>don't have to park</strong> here." (No es necesario aparcar aquí, puedes aparcar en otro sitio)</p>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Must: Must + sujeto + verbo en forma base</p>
        <p class="font-medium">Have to: Do/Does/Did + sujeto + have to + verbo en forma base</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Must</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Must I attend</span> the meeting?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Must you leave</span> so early?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Must we finish</span> this today?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Must they all come</span>?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Have to</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Do I have to pay</span> for this service?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Does she have to work</span> on weekends?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Did they have to wait</span> long?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Will we have to register</span> in advance?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Para Must:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, you must. / No, you mustn't.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, she must. / No, she mustn't.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Para Have to:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/we/they do. / No, I/you/we/they don't.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, he/she/it does. / No, he/she/it doesn't.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2">Nota: Las preguntas con <strong>must</strong> son menos comunes que las preguntas con <strong>have to</strong>, especialmente en inglés americano.</p>
        </div>
      </div>
    `,
    examples: [
      { english: "I must finish this report by tomorrow.", spanish: "Debo terminar este informe para mañana." },
      { english: "You don't have to wear formal clothes.", spanish: "No tienes que llevar ropa formal." },
      { english: "Students mustn't use their phones during the exam.", spanish: "Los estudiantes no deben usar sus teléfonos durante el examen." },
      { english: "Do we have to register in advance?", spanish: "¿Tenemos que registrarnos con antelación?" }
    ]
  },
  uses: {
    description: "Must y have to tienen usos específicos que, aunque a veces se solapan, muestran matices importantes en la expresión de obligación, necesidad y deducción.",
    useCases: [
      {
        title: "Obligación personal/interna 🧠",
        description: "Expresar una obligación que viene de uno mismo (decisión personal).",
        examples: [
          { english: "I must call my mother today.", spanish: "Debo llamar a mi madre hoy." },
          { english: "I must remember to take my medicine.", spanish: "Debo recordar tomar mi medicina." },
          { english: "I must try harder next time.", spanish: "Debo esforzarme más la próxima vez." }
        ]
      },
      {
        title: "Obligación externa/reglas 📜",
        description: "Expresar obligación impuesta por reglas, leyes o circunstancias externas.",
        examples: [
          { english: "In the UK, you have to drive on the left.", spanish: "En el Reino Unido, tienes que conducir por la izquierda." },
          { english: "She has to work on Saturdays at her new job.", spanish: "Ella tiene que trabajar los sábados en su nuevo trabajo." },
          { english: "Students have to wear a uniform at this school.", spanish: "Los estudiantes tienen que llevar uniforme en esta escuela." }
        ]
      },
      {
        title: "Prohibición estricta 🚫",
        description: "Expresar que algo está prohibido o no debe hacerse (solo mustn't, no don't have to).",
        examples: [
          { english: "You mustn't tell anyone about this secret.", spanish: "No debes contarle a nadie sobre este secreto." },
          { english: "Passengers mustn't smoke on the plane.", spanish: "Los pasajeros no deben fumar en el avión." },
          { english: "You mustn't touch that button.", spanish: "No debes tocar ese botón." }
        ]
      },
      {
        title: "Ausencia de obligación 🆓",
        description: "Expresar que algo no es necesario o no es obligatorio (solo don't have to, no mustn't).",
        examples: [
          { english: "You don't have to pay for this service.", spanish: "No tienes que pagar por este servicio." },
          { english: "I don't have to get up early tomorrow.", spanish: "No tengo que levantarme temprano mañana." },
          { english: "She doesn't have to finish the report today.", spanish: "Ella no tiene que terminar el informe hoy." }
        ]
      },
      {
        title: "Deducción lógica 🧩",
        description: "Expresar una conclusión lógica basada en evidencias (principalmente con must).",
        examples: [
          { english: "It's 10:00 PM. They must be home by now.", spanish: "Son las 10:00 PM. Deben estar en casa a estas horas." },
          { english: "She knows a lot about this topic. She must have studied it for years.", spanish: "Ella sabe mucho sobre este tema. Debe haberlo estudiado durante años." },
          { english: "You've been working all day. You must be tired.", spanish: "Has estado trabajando todo el día. Debes estar cansado." }
        ]
      }
    ]
  },
  examples: [
    { english: "I must go now or I'll be late.", spanish: "Debo irme ahora o llegaré tarde." },
    { english: "You have to fill out this form before proceeding.", spanish: "Tienes que rellenar este formulario antes de continuar." },
    { english: "Children mustn't play with matches.", spanish: "Los niños no deben jugar con cerillas." },
    { english: "Do I have to submit the application online?", spanish: "¿Tengo que enviar la solicitud en línea?" },
    { english: "We must respect other people's opinions.", spanish: "Debemos respetar las opiniones de otras personas." },
    { english: "She had to work overtime last week.", spanish: "Ella tuvo que trabajar horas extras la semana pasada." },
    { english: "You don't have to attend if you don't want to.", spanish: "No tienes que asistir si no quieres." },
    { english: "That must be John's car. He always parks there.", spanish: "Ese debe ser el coche de John. Él siempre aparca ahí." }
  ],
  timeExpressions: [
    { word: "now/right away/immediately", description: "ahora/enseguida/inmediatamente (para obligaciones urgentes)" },
    { word: "today/tomorrow/next week", description: "hoy/mañana/la próxima semana (para obligaciones con plazo)" },
    { word: "always/never", description: "siempre/nunca (para reglas permanentes)" },
    { word: "yesterday/last week", description: "ayer/la semana pasada (con had to para obligaciones pasadas)" },
    { word: "by + time/date", description: "para + hora/fecha (para plazos límite)" },
    { word: "every day/week/month", description: "cada día/semana/mes (para obligaciones regulares)" },
    { word: "in the future", description: "en el futuro (con will have to para obligaciones futuras)" },
    { word: "before + time/action", description: "antes de + hora/acción (para secuencias de obligaciones)" },
    { word: "during", description: "durante (para obligaciones en períodos específicos)" },
    { word: "when necessary", description: "cuando sea necesario (para obligaciones condicionales)" }
  ],
  tips: [
    {
      title: "Mustn't vs. Don't have to",
      content: "La confusión más común es entre 'mustn't' (prohibición: está prohibido hacerlo) y 'don't have to' (ausencia de obligación: no es necesario hacerlo, pero puedes si quieres).",
      emoji: "⚠️"
    },
    {
      title: "Must para otros tiempos verbales",
      content: "Must solo tiene forma de presente. Para pasado, futuro u otros tiempos, usa las formas de 'have to': 'had to' (pasado), 'will have to' (futuro), etc.",
      emoji: "⏱️"
    },
    {
      title: "Have got to",
      content: "En inglés coloquial, especialmente británico, 'have got to' se usa de manera similar a 'have to': 'I've got to go' = 'I have to go'. Sin embargo, 'have got to' generalmente no se usa en tiempos diferentes al presente.",
      emoji: "🇬🇧"
    },
    {
      title: "Must para deducciones",
      content: "Para expresar deducciones lógicas, usa 'must' y no 'have to': 'It's raining, so the ground must be wet' (no 'has to be wet').",
      emoji: "🧠"
    }
  ],
  commonMistakes: [
    {
      incorrect: "I must to study tonight.",
      correct: "I must study tonight.",
      explanation: "Después de 'must', el verbo va en forma base, sin 'to'."
    },
    {
      incorrect: "You don't must go there.",
      correct: "You mustn't go there. / You don't have to go there.",
      explanation: "La forma negativa de 'must' es 'mustn't', no 'don't must'. 'Don't have to' expresa ausencia de obligación, no prohibición."
    },
    {
      incorrect: "They musted leave early yesterday.",
      correct: "They had to leave early yesterday.",
      explanation: "Must no tiene forma de pasado. Se debe usar 'had to' para obligaciones en el pasado."
    },
    {
      incorrect: "She must can solve this problem.",
      correct: "She must be able to solve this problem.",
      explanation: "No se pueden usar dos modales juntos. Se debe usar 'be able to' en lugar de 'can' después de otro modal."
    },
    {
      incorrect: "You mustn't take an umbrella. It's not raining.",
      correct: "You don't have to take an umbrella. It's not raining.",
      explanation: "Para expresar que algo no es necesario (pero es opcional), se usa 'don't have to', no 'mustn't'."
    }
  ]
};
