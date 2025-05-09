import { GrammarContent } from '../../../types/grammar';

export const mixedConditionalContent: GrammarContent = {
  id: 'mixed-conditional',
  title: 'Mixed Conditional',
  introduction: {
    text: 'El Mixed Conditional (Condicional Mixto) combina elementos de diferentes tipos de condicionales, principalmente del Second y Third Conditional. Se utiliza cuando queremos relacionar una situación hipotética pasada con un resultado presente, o una situación hipotética presente con un resultado pasado. Este tipo de condicional nos permite expresar relaciones temporales más complejas entre condiciones y consecuencias.',
    emoji: '🔄'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Tipo 1: If + sujeto + past perfect, sujeto + would + infinitivo</p>
        <p class="font-medium">Tipo 2: If + sujeto + pasado simple, sujeto + would + have + participio pasado</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Tipo 1: Pasado → Presente</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had studied medicine</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would be a doctor now</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she had saved her money</span>, <span class="text-green-600 dark:text-green-400 font-bold">she wouldn't be in debt now</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we hadn't missed that flight</span>, <span class="text-green-600 dark:text-green-400 font-bold">we would be in Paris now</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had taken that job</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would live in another country</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Tipo 2: Presente → Pasado</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I were more organized</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would have finished the project on time</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she spoke French</span>, <span class="text-green-600 dark:text-green-400 font-bold">she would have applied for that job</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he weren't so shy</span>, <span class="text-green-600 dark:text-green-400 font-bold">he would have asked her out</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I knew how to swim</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would have joined you at the beach</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada del Tipo 1 (Pasado → Presente):</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>La cláusula condicional (<em>if clause</em>) usa el <strong>past perfect</strong> (had + participio pasado) para una acción o situación hipotética en el pasado.</li>
            <li>La cláusula principal (<em>main clause</em>) usa <strong>would + infinitivo</strong> para un resultado hipotético en el presente.</li>
            <li>Este tipo expresa cómo una situación pasada que no ocurrió afecta al presente.</li>
            <li>Se combina la forma condicional del Third Conditional (en la if clause) con la forma principal del Second Conditional.</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Estructura detallada del Tipo 2 (Presente → Pasado):</p>
          <ul class="list-disc pl-5 space-y-1 text-blue-800 dark:text-blue-400">
            <li>La cláusula condicional (<em>if clause</em>) usa el <strong>pasado simple</strong> para una situación hipotética en el presente.</li>
            <li>La cláusula principal (<em>main clause</em>) usa <strong>would have + participio pasado</strong> para un resultado hipotético en el pasado.</li>
            <li>Este tipo expresa cómo una situación presente que no es real habría afectado a un evento pasado.</li>
            <li>Se combina la forma condicional del Second Conditional (en la if clause) con la forma principal del Third Conditional.</li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
          <p class="font-medium text-purple-800 dark:text-purple-400">💡 Consejo importante:</p>
          <p class="text-purple-800 dark:text-purple-400 mt-1">La clave para entender los Mixed Conditionals es identificar a <strong>qué tiempo</strong> se refiere cada parte de la oración:</p>
          <ul class="list-disc pl-5 text-purple-800 dark:text-purple-400 mt-1">
            <li>En "If I had studied medicine (pasado), I would be a doctor now (presente)", la condición es pasada pero el resultado es presente.</li>
            <li>En "If I were more organized (presente), I would have finished the project on time (pasado)", la condición es presente pero el resultado es pasado.</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Tipo 1: If + sujeto + hadn't + participio pasado, sujeto + wouldn't + infinitivo</p>
        <p class="font-medium">Tipo 2: If + sujeto + pasado simple negativo, sujeto + wouldn't + have + participio pasado</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en Tipo 1 (Pasado → Presente)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I hadn't quit my job</span>, <span class="text-red-600 dark:text-red-400 font-bold">I wouldn't be looking for work now</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she hadn't moved to London</span>, <span class="text-red-600 dark:text-red-400 font-bold">she wouldn't be fluent in English</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If they hadn't invested all their money</span>, <span class="text-red-600 dark:text-red-400 font-bold">they wouldn't be broke now</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he hadn't eaten that seafood</span>, <span class="text-red-600 dark:text-red-400 font-bold">he wouldn't be sick today</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en Tipo 2 (Presente → Pasado)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I weren't so busy</span>, <span class="text-red-600 dark:text-red-400 font-bold">I wouldn't have missed your party</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she didn't live so far away</span>, <span class="text-red-600 dark:text-red-400 font-bold">she wouldn't have been late for the meeting</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we weren't such good friends</span>, <span class="text-red-600 dark:text-red-400 font-bold">I wouldn't have told you the truth</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I didn't have so many responsibilities</span>, <span class="text-red-600 dark:text-red-400 font-bold">I wouldn't have declined your invitation</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Alternancia de negación:</p>
          <p class="text-amber-800 dark:text-amber-400 mt-1">Podemos negar cualquiera de las dos cláusulas o ambas, según lo que queramos expresar:</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 mt-1">
            <li><strong>Condición negativa, resultado afirmativo:</strong> If I hadn't studied medicine, I would be working in a different field now.</li>
            <li><strong>Condición afirmativa, resultado negativo:</strong> If I had studied medicine, I wouldn't be in this job now.</li>
            <li><strong>Ambas negativas:</strong> If I hadn't wasted my time, I wouldn't be behind on my work now.</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas negativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>had not → <strong>hadn't</strong></li>
            <li>would not → <strong>wouldn't</strong></li>
            <li>was not / were not → <strong>wasn't / weren't</strong></li>
            <li>did not → <strong>didn't</strong></li>
          </ul>
          <p class="text-blue-800 dark:text-blue-400 mt-2">Estas contracciones son muy comunes tanto en el lenguaje hablado como en el escrito informal.</p>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Tipo 1: If + sujeto + past perfect, would + sujeto + infinitivo?</p>
        <p class="font-medium">Tipo 2: If + sujeto + pasado simple, would + sujeto + have + participio pasado?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Tipo 1 (Pasado → Presente)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you had taken that job offer</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would you be living in New York now</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she had married him</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would she be happy</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If they had invested in that company</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would they be millionaires today</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had learned to play an instrument as a child</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would I be able to play in a band now</span>?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con Tipo 2 (Presente → Pasado)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you were more confident</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would you have asked for a promotion</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he weren't so stubborn</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would he have apologized</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she spoke better English</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would she have gotten that international job</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If they lived closer</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would they have visited us more often</span>?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 mt-1">
            <li>Tipo 1: <strong>Where would you be working now</strong> if you had accepted that job offer?</li>
            <li>Tipo 1: <strong>How different would your life be</strong> if you had studied abroad?</li>
            <li>Tipo 2: <strong>What would you have done</strong> if you were in charge of the project?</li>
            <li>Tipo 2: <strong>How would she have reacted</strong> if she knew the truth?</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Afirmativas:</strong></p>
              <p class="text-blue-800 dark:text-blue-400">Yes, I/you/he/she/it/we/they <strong>would</strong>.</p>
              <p class="text-blue-800 dark:text-blue-400">Para Tipo 2: Yes, I/you/he/she/it/we/they <strong>would have</strong>.</p>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Negativas:</strong></p>
              <p class="text-blue-800 dark:text-blue-400">No, I/you/he/she/it/we/they <strong>wouldn't</strong>.</p>
              <p class="text-blue-800 dark:text-blue-400">Para Tipo 2: No, I/you/he/she/it/we/they <strong>wouldn't have</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "If I had saved my money, I would be able to afford a car now.", spanish: "Si hubiera ahorrado mi dinero, ahora podría permitirme un coche." },
      { english: "If he weren't so lazy, he would have finished his degree.", spanish: "Si no fuera tan perezoso, habría terminado su carrera." },
      { english: "Would you be living here if you had gotten that job in London?", spanish: "¿Estarías viviendo aquí si hubieras conseguido ese trabajo en Londres?" },
      { english: "If I knew how to cook, I wouldn't have ordered takeaway so often.", spanish: "Si supiera cocinar, no habría pedido comida para llevar tan a menudo." }
    ]
  },
  uses: {
    description: "El Mixed Conditional tiene varios usos específicos que nos permiten conectar diferentes momentos temporales:",
    useCases: [
      {
        title: "Efectos presentes de acciones pasadas 🔄",
        description: "Para hablar de cómo una acción o situación pasada que no ocurrió afecta nuestra realidad presente (Tipo 1).",
        examples: [
          { english: "If I had accepted that job offer, I would be living in Tokyo now.", spanish: "Si hubiera aceptado esa oferta de trabajo, estaría viviendo en Tokio ahora." },
          { english: "If she had studied medicine, she would be a doctor now.", spanish: "Si ella hubiera estudiado medicina, sería médica ahora." },
          { english: "If we hadn't sold our house, we wouldn't be renting an apartment now.", spanish: "Si no hubiéramos vendido nuestra casa, no estaríamos alquilando un apartamento ahora." }
        ]
      },
      {
        title: "Acciones pasadas afectadas por circunstancias presentes 🔄",
        description: "Para hablar de cómo una circunstancia o característica presente (que es contraria a la realidad) habría afectado a acciones pasadas (Tipo 2).",
        examples: [
          { english: "If I weren't so shy, I would have asked her out when I had the chance.", spanish: "Si no fuera tan tímido, la habría invitado a salir cuando tuve la oportunidad." },
          { english: "If she spoke better English, she would have understood the lecture yesterday.", spanish: "Si ella hablara mejor inglés, habría entendido la conferencia ayer." },
          { english: "If I had more free time, I would have visited you last weekend.", spanish: "Si tuviera más tiempo libre, te habría visitado el fin de semana pasado." }
        ]
      },
      {
        title: "Expresar arrepentimiento por decisiones pasadas y sus consecuencias actuales 😔",
        description: "Para expresar cómo nos arrepentimos de decisiones pasadas que ahora afectan nuestro presente (Tipo 1).",
        examples: [
          { english: "If I had studied harder in school, I would have a better job now.", spanish: "Si hubiera estudiado más en la escuela, tendría un mejor trabajo ahora." },
          { english: "If I hadn't spent all my money, I wouldn't be broke now.", spanish: "Si no hubiera gastado todo mi dinero, no estaría arruinado ahora." },
          { english: "If we had invested in that company, we would be rich today.", spanish: "Si hubiéramos invertido en esa empresa, seríamos ricos hoy." }
        ]
      },
      {
        title: "Situaciones permanentes que afectan eventos pasados 🧩",
        description: "Para hablar de características o situaciones permanentes (presentes) que habrían cambiado el resultado de eventos pasados (Tipo 2).",
        examples: [
          { english: "If I were taller, I would have become a basketball player.", spanish: "Si fuera más alto, me habría convertido en jugador de baloncesto." },
          { english: "If she weren't allergic to dogs, she would have adopted one last month.", spanish: "Si ella no fuera alérgica a los perros, habría adoptado uno el mes pasado." },
          { english: "If he spoke Spanish, he would have enjoyed his trip to Mexico more.", spanish: "Si él hablara español, habría disfrutado más de su viaje a México." }
        ]
      },
      {
        title: "Alternativas de vida 🛣️",
        description: "Para especular sobre cómo sería nuestra vida ahora si hubiéramos tomado diferentes decisiones en el pasado (Tipo 1).",
        examples: [
          { english: "If I had gone to university, I would be in a different career now.", spanish: "Si hubiera ido a la universidad, estaría en una carrera diferente ahora." },
          { english: "If we had moved to Australia, our children would speak English fluently now.", spanish: "Si nos hubiéramos mudado a Australia, nuestros hijos hablarían inglés con fluidez ahora." },
          { english: "If I had learned to play the piano as a child, I would be able to play that song now.", spanish: "Si hubiera aprendido a tocar el piano de niño, podría tocar esa canción ahora." }
        ]
      }
    ]
  },
  examples: [
    { english: "If I had taken better care of my health, I wouldn't have these problems now.", spanish: "Si hubiera cuidado mejor de mi salud, no tendría estos problemas ahora." },
    { english: "If she were more confident, she would have applied for that promotion.", spanish: "Si ella tuviera más confianza, habría solicitado ese ascenso." },
    { english: "If I hadn't wasted so much time, I would be finished with the project by now.", spanish: "Si no hubiera perdido tanto tiempo, ya habría terminado el proyecto." },
    { english: "If they weren't so disorganized, they would have submitted the application before the deadline.", spanish: "Si no fueran tan desorganizados, habrían enviado la solicitud antes de la fecha límite." },
    { english: "If I had known you better then, I would trust you more now.", spanish: "Si te hubiera conocido mejor entonces, confiaría más en ti ahora." },
    { english: "If I were a better cook, I would have prepared a special dinner for your birthday.", spanish: "Si fuera mejor cocinero, habría preparado una cena especial para tu cumpleaños." },
    { english: "If you had gone to bed earlier, you wouldn't be so tired now.", spanish: "Si te hubieras acostado antes, no estarías tan cansado ahora." },
    { english: "If he were more patient, he wouldn't have reacted so badly to the news.", spanish: "Si él fuera más paciente, no habría reaccionado tan mal a la noticia." }
  ],
  timeExpressions: [
    { word: "now", description: "ahora (usado en el resultado presente del Tipo 1)" },
    { word: "these days", description: "estos días (para el resultado presente)" },
    { word: "currently", description: "actualmente (para el resultado presente)" },
    { word: "today", description: "hoy (para el resultado presente)" },
    { word: "yesterday/last week/last month", description: "ayer/la semana pasada/el mes pasado (para el resultado pasado del Tipo 2)" },
    { word: "when I had the chance", description: "cuando tuve la oportunidad (para el resultado pasado)" },
    { word: "back then", description: "en aquel entonces (para eventos pasados)" },
    { word: "by now", description: "a estas alturas (para resultados presentes)" }
  ],
  tips: [
    {
      title: "Identificar la relación temporal",
      content: "La clave para usar correctamente los Mixed Conditionals es identificar la relación temporal entre la condición y el resultado: si una condición pasada afecta al presente (Tipo 1) o si una condición presente afecta al pasado (Tipo 2).",
      emoji: "⏱️"
    },
    {
      title: "No confundir con Second o Third Conditional",
      content: "Recuerda que el Mixed Conditional siempre conecta dos tiempos diferentes, mientras que el Second Conditional conecta presente-futuro hipotético y el Third Conditional conecta pasado-pasado hipotético.",
      emoji: "⚠️"
    },
    {
      title: "Elegir el tipo adecuado",
      content: "Usa el Tipo 1 (If + past perfect, would + infinitivo) cuando quieras expresar cómo una acción pasada afecta al presente. Usa el Tipo 2 (If + pasado simple, would have + participio) cuando quieras expresar cómo una situación presente habría afectado al pasado.",
      emoji: "🧩"
    },
    {
      title: "Cuidado con were/was",
      content: "Al igual que en el Second Conditional, tradicionalmente se usa 'were' en lugar de 'was' con la primera y tercera persona del singular: 'If I were more organized...' (no 'If I was more organized...'). Sin embargo, 'was' es cada vez más aceptado en el inglés coloquial.",
      emoji: "📝"
    }
  ],
  commonMistakes: [
    {
      incorrect: "If I would have studied medicine, I would be a doctor now.",
      correct: "If I had studied medicine, I would be a doctor now.",
      explanation: "No se usa 'would have' en la cláusula condicional (después de 'if') del Tipo 1, sino 'had + participio pasado'."
    },
    {
      incorrect: "If I would be more confident, I would have applied for that job.",
      correct: "If I were more confident, I would have applied for that job.",
      explanation: "No se usa 'would be' en la cláusula condicional (después de 'if') del Tipo 2, sino el pasado simple."
    },
    {
      incorrect: "If I had studied harder, I will have a better job now.",
      correct: "If I had studied harder, I would have a better job now.",
      explanation: "No se usa 'will' en el resultado del Mixed Conditional Tipo 1, sino 'would'."
    },
    {
      incorrect: "If I was more ambitious, I would have started my own business.",
      correct: "If I were more ambitious, I would have started my own business.",
      explanation: "Tradicionalmente se usa 'were' en lugar de 'was' en la primera y tercera persona del singular, aunque 'was' es cada vez más aceptado en el inglés coloquial."
    },
    {
      incorrect: "If I were rich, I would bought a yacht last year.",
      correct: "If I were rich, I would have bought a yacht last year.",
      explanation: "Falta 'have' entre 'would' y el participio pasado en el resultado del Tipo 2."
    },
    {
      incorrect: "If I didn't broke my leg, I would be playing in the tournament now.",
      correct: "If I hadn't broken my leg, I would be playing in the tournament now.",
      explanation: "Para hablar de una condición pasada, usamos 'hadn't + participio pasado', no 'didn't + verbo en pasado'."
    }
  ]
};
