import { GrammarContent } from '../../../types/grammar';

export const thirdConditionalContent: GrammarContent = {
  id: 'third-conditional',
  title: 'Third Conditional',
  introduction: {
    text: 'El Third Conditional (Tercer Condicional) se utiliza para hablar de situaciones hipotéticas en el pasado, es decir, situaciones que no ocurrieron pero que nos permiten imaginar un resultado diferente si las circunstancias hubieran sido distintas. Expresamos arrepentimiento, crítica o simplemente especulamos sobre alternativas a eventos pasados.',
    emoji: '⏳'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + past perfect, sujeto + would + have + participio pasado</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had studied harder</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would have passed the exam</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we had known about the party</span>, <span class="text-green-600 dark:text-green-400 font-bold">we would have gone</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had taken the earlier train</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would have arrived on time</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we had saved more money</span>, <span class="text-green-600 dark:text-green-400 font-bold">we would have bought a better car</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she had applied for the job</span>, <span class="text-green-600 dark:text-green-400 font-bold">she would have gotten it</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If they had left earlier</span>, <span class="text-green-600 dark:text-green-400 font-bold">they wouldn't have missed the flight</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he had asked for help</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would have helped him</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If the weather had been better</span>, <span class="text-green-600 dark:text-green-400 font-bold">they would have gone sailing</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>En la cláusula condicional (<em>if clause</em>) utilizamos el <strong>past perfect</strong> (had + participio pasado).</li>
            <li>En la cláusula principal (<em>main clause</em>) utilizamos <strong>would have + participio pasado</strong>.</li>
            <li>Ambas partes de la oración se refieren a situaciones pasadas que no ocurrieron realmente.</li>
            <li>Las dos cláusulas pueden invertirse sin cambiar el significado:
              <ul class="list-disc pl-5 mt-1">
                <li>I would have passed the exam if I had studied harder.</li>
                <li>She would have gotten the job if she had applied for it.</li>
              </ul>
            </li>
            <li>Cuando la cláusula condicional va primero, se separa de la principal por una coma. Si va después, normalmente no es necesaria la coma:
              <ul class="list-disc pl-5 mt-1">
                <li>If we had known about the party, we would have gone.</li>
                <li>We would have gone if we had known about the party.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, se usan las siguientes contracciones:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>would have</strong> → I<strong>'d have</strong> o I<strong>'d've</strong></li>
            <li>You <strong>would have</strong> → You<strong>'d have</strong> o You<strong>'d've</strong></li>
            <li>She <strong>would have</strong> → She<strong>'d have</strong> o She<strong>'d've</strong></li>
            <li>They <strong>would have</strong> → They<strong>'d have</strong> o They<strong>'d've</strong></li>
          </ul>
          <p class="text-blue-800 dark:text-blue-400 mt-2">También se contraen los auxiliares en la cláusula condicional:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>If I <strong>had</strong> → If I<strong>'d</strong></li>
            <li>If you <strong>had</strong> → If you<strong>'d</strong></li>
            <li>If we <strong>had</strong> → If we<strong>'d</strong></li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
          <p class="font-medium text-purple-800 dark:text-purple-400">🔄 Alternativas a Would Have:</p>
          <p class="text-purple-800 dark:text-purple-400 mt-1">En lugar de <strong>would have</strong>, podemos usar otros verbos modales con significado similar:</p>
          <ul class="list-disc pl-5 text-purple-800 dark:text-purple-400 mt-1">
            <li>If I had seen him, I <strong>could have</strong> helped him. (posibilidad)</li>
            <li>If you had told me earlier, I <strong>might have</strong> done something. (posibilidad menor)</li>
            <li>If she had lied to me, I <strong>should have</strong> noticed. (expectativa/obligación)</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + past perfect, sujeto + wouldn't have (would not have) + participio pasado</p>
        <p class="font-medium">O: If + sujeto + hadn't (had not) + participio pasado, sujeto + would have + participio pasado</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en el resultado (main clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had studied harder</span>, <span class="text-red-600 dark:text-red-400 font-bold">I wouldn't have failed the exam</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we had left earlier</span>, <span class="text-red-600 dark:text-red-400 font-bold">we would not have been late</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she had followed the directions</span>, <span class="text-red-600 dark:text-red-400 font-bold">she wouldn't have gotten lost</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If they had listened to me</span>, <span class="text-red-600 dark:text-red-400 font-bold">this disaster wouldn't have happened</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en la condición (if clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I hadn't been so busy</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would have helped you</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it hadn't rained</span>, <span class="text-green-600 dark:text-green-400 font-bold">we would have gone to the beach</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she hadn't missed the bus</span>, <span class="text-green-600 dark:text-green-400 font-bold">she would have arrived on time</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he hadn't spent all his money</span>, <span class="text-green-600 dark:text-green-400 font-bold">he would have bought a new car</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Formas negativas contraídas:</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 mt-1">
            <li>would not have → <strong>wouldn't have</strong></li>
            <li>had not + participio → <strong>hadn't</strong> + participio</li>
          </ul>
          <p class="text-amber-800 dark:text-amber-400 mt-2">Ejemplos combinados:</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 mt-1">
            <li>If I <strong>hadn't been</strong> so busy, I <strong>wouldn't have forgotten</strong> your birthday.</li>
            <li>If you <strong>hadn't told</strong> me, I <strong>wouldn't have known</strong> about the meeting.</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Uso de Unless:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">También podemos usar <strong>unless</strong> (a menos que) en el Third Conditional:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Unless</strong> I had seen it with my own eyes, I wouldn't have believed it. (= If I hadn't seen it with my own eyes, I wouldn't have believed it.)</li>
            <li>She would have failed the test <strong>unless</strong> she had studied all night. (= She would have failed the test if she hadn't studied all night.)</li>
            <li>He would have lost his job <strong>unless</strong> he had apologized for his mistake. (= He would have lost his job if he hadn't apologized for his mistake.)</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + past perfect, would + sujeto + have + participio pasado?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas básicas</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you had won the lottery</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would you have quit your job</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she had known the truth</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would she have reacted differently</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had told you earlier</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would you have helped me</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we had taken a taxi</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would we have arrived sooner</span>?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con partículas interrogativas</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What would you have done</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you had been in my position</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Where would they have gone</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if they had had more vacation time</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">How would he have reacted</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if she had said no</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Why would she have left</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if she had been happy there</span>?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>would</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>would have</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>wouldn't</strong>.</p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>wouldn't have</strong>.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> Ambas formas de respuesta corta son aceptables, aunque "would have" es técnicamente más completa.</p>
        </div>
      </div>
    `,
    examples: [
      { english: "If I had known about the problem, I would have fixed it.", spanish: "Si hubiera sabido sobre el problema, lo habría arreglado." },
      { english: "She wouldn't have been angry if you had called her.", spanish: "Ella no se habría enfadado si la hubieras llamado." },
      { english: "Would you have come to the party if I had invited you?", spanish: "¿Habrías venido a la fiesta si te hubiera invitado?" },
      { english: "If we hadn't missed the train, we would have arrived on time.", spanish: "Si no hubiéramos perdido el tren, habríamos llegado a tiempo." }
    ]
  },
  uses: {
    description: "El Third Conditional tiene usos específicos relacionados con situaciones hipotéticas en el pasado:",
    useCases: [
      {
        title: "Arrepentimiento sobre el pasado 😔",
        description: "Para expresar arrepentimiento por algo que sucedió o no sucedió en el pasado.",
        examples: [
          { english: "If I had studied harder, I would have passed the exam.", spanish: "Si hubiera estudiado más, habría aprobado el examen." },
          { english: "If I hadn't eaten so much, I wouldn't have felt sick.", spanish: "Si no hubiera comido tanto, no me habría sentido mal." },
          { english: "If we had left earlier, we wouldn't have missed the train.", spanish: "Si hubiéramos salido antes, no habríamos perdido el tren." }
        ]
      },
      {
        title: "Crítica de decisiones pasadas 🧐",
        description: "Para criticar decisiones o acciones pasadas mostrando que habrían existido mejores alternativas.",
        examples: [
          { english: "If they had followed my advice, they wouldn't have lost all that money.", spanish: "Si hubieran seguido mi consejo, no habrían perdido todo ese dinero." },
          { english: "If she had been more careful, the accident wouldn't have happened.", spanish: "Si ella hubiera sido más cuidadosa, el accidente no habría ocurrido." },
          { english: "If he had asked for help, he would have finished on time.", spanish: "Si hubiera pedido ayuda, habría terminado a tiempo." }
        ]
      },
      {
        title: "Especulación sobre situaciones pasadas 🤔",
        description: "Para especular sobre cómo podrían haber sido diferentes las cosas si las circunstancias hubieran cambiado.",
        examples: [
          { english: "If the weather had been better, we would have gone to the beach.", spanish: "Si el tiempo hubiera sido mejor, habríamos ido a la playa." },
          { english: "What would you have done if you had been in my situation?", spanish: "¿Qué habrías hecho si hubieras estado en mi situación?" },
          { english: "If Columbus hadn't discovered America, how different would our world be?", spanish: "Si Colón no hubiera descubierto América, ¿cuán diferente sería nuestro mundo?" }
        ]
      },
      {
        title: "Explicación de consecuencias pasadas 📚",
        description: "Para explicar por qué algo ocurrió o no ocurrió como resultado de circunstancias pasadas.",
        examples: [
          { english: "I would have called you if I had known you were home.", spanish: "Te habría llamado si hubiera sabido que estabas en casa." },
          { english: "She would have gotten the job if she had been more qualified.", spanish: "Ella habría conseguido el trabajo si hubiera estado más cualificada." },
          { english: "We would have won the game if our best player hadn't been injured.", spanish: "Habríamos ganado el partido si nuestro mejor jugador no se hubiera lesionado." }
        ]
      },
      {
        title: "Reflexiones sobre eventos históricos 🏛️",
        description: "Para imaginar cómo podría haber cambiado la historia si ciertos eventos hubieran sido diferentes.",
        examples: [
          { english: "If the Titanic hadn't hit the iceberg, it would have completed its voyage successfully.", spanish: "Si el Titanic no hubiera chocado con el iceberg, habría completado su viaje con éxito." },
          { english: "If Einstein hadn't developed the theory of relativity, scientific progress might have been slower.", spanish: "Si Einstein no hubiera desarrollado la teoría de la relatividad, el progreso científico podría haber sido más lento." },
          { english: "How would the world have changed if the Internet had been invented 50 years earlier?", spanish: "¿Cómo habría cambiado el mundo si Internet se hubiera inventado 50 años antes?" }
        ]
      },
      {
        title: "Hablar de situaciones irreales completamente 🌀",
        description: "Para construir escenarios totalmente imaginarios sobre el pasado.",
        examples: [
          { english: "If dinosaurs hadn't become extinct, humans might never have evolved.", spanish: "Si los dinosaurios no se hubieran extinguido, los humanos podrían no haber evolucionado nunca." },
          { english: "If I had been born in the 18th century, I would have had a completely different life.", spanish: "Si hubiera nacido en el siglo XVIII, habría tenido una vida completamente diferente." },
          { english: "If aliens had visited Earth in ancient times, how would that have affected human civilization?", spanish: "Si los extraterrestres hubieran visitado la Tierra en la antigüedad, ¿cómo habría afectado eso a la civilización humana?" }
        ]
      }
    ]
  },
  examples: [
    { english: "If I had known you were coming, I would have prepared something special.", spanish: "Si hubiera sabido que venías, habría preparado algo especial." },
    { english: "She wouldn't have made that mistake if she had been more careful.", spanish: "Ella no habría cometido ese error si hubiera sido más cuidadosa." },
    { english: "Would he have applied for the job if he had seen the advertisement?", spanish: "¿Habría solicitado el trabajo si hubiera visto el anuncio?" },
    { english: "If it hadn't started raining, we would have finished the game.", spanish: "Si no hubiera empezado a llover, habríamos terminado el partido." },
    { english: "I would have bought the house if the price had been lower.", spanish: "Habría comprado la casa si el precio hubiera sido más bajo." },
    { english: "If you had told me about the problem earlier, I could have helped you.", spanish: "Si me hubieras contado sobre el problema antes, podría haberte ayudado." },
    { english: "What would you have done if you had witnessed the accident?", spanish: "¿Qué habrías hecho si hubieras presenciado el accidente?" },
    { english: "We would have arrived on time if we hadn't got stuck in traffic.", spanish: "Habríamos llegado a tiempo si no nos hubiéramos quedado atrapados en el tráfico." }
  ],
  timeExpressions: [
    { word: "back then", description: "en aquel entonces" },
    { word: "at that time", description: "en ese momento" },
    { word: "in those days", description: "en aquellos días" },
    { word: "that day", description: "aquel día" },
    { word: "last week/month/year", description: "la semana/el mes/el año pasado" },
    { word: "yesterday", description: "ayer" },
    { word: "in + año pasado (in 2010)", description: "en + año pasado (en 2010)" },
    { word: "before [evento pasado]", description: "antes de [evento pasado]" }
  ],
  tips: [
    {
      title: "Third Conditional vs. Second Conditional",
      content: "El Third Conditional se refiere exclusivamente a situaciones hipotéticas pasadas, mientras que el Second Conditional habla de situaciones hipotéticas presentes o futuras. Compara: 'If I had studied harder, I would have passed the exam' (pasado irreal) vs. 'If I studied harder, I would pass the exam' (presente/futuro hipotético).",
      emoji: "⚖️"
    },
    {
      title: "Contracciones comunes",
      content: "En el habla informal, es muy común escuchar contracciones como 'I'd've', 'you'd've', 'he'd've' (por 'I would have', 'you would have', 'he would have'). También 'If I'd known' (por 'If I had known').",
      emoji: "🗣️"
    },
    {
      title: "Cuidado con la estructura",
      content: "Nunca uses would have en la cláusula con if. El error más común es decir 'If I would have known...' en lugar del correcto 'If I had known...'.",
      emoji: "⚠️"
    },
    {
      title: "Expresando sentimientos sobre el pasado",
      content: "El Third Conditional es perfecto para expresar arrepentimiento, añoranza, crítica o especulación sobre decisiones y eventos del pasado que ya no pueden cambiarse.",
      emoji: "💭"
    }
  ],
  commonMistakes: [
    {
      incorrect: "If I would have known, I would have told you.",
      correct: "If I had known, I would have told you.",
      explanation: "No se usa 'would have' en la cláusula condicional (después de 'if'), sino 'had + participio pasado'."
    },
    {
      incorrect: "If she had came earlier, she would have seen him.",
      correct: "If she had come earlier, she would have seen him.",
      explanation: "Después de 'had' en el past perfect, siempre se usa el participio pasado (come), no el pasado simple (came)."
    },
    {
      incorrect: "If they would of arrived on time, we wouldn't have missed the train.",
      correct: "If they had arrived on time, we wouldn't have missed the train.",
      explanation: "La expresión 'would of' es incorrecta y surge de la pronunciación similar a 'would've'. La forma correcta es 'would have' o 'had', según la cláusula."
    },
    {
      incorrect: "If I would have been you, I would have accepted the offer.",
      correct: "If I had been you, I would have accepted the offer.",
      explanation: "No se usa 'would have' en la cláusula condicional, sino 'had + participio pasado'."
    },
    {
      incorrect: "Unless I hadn't seen it with my own eyes, I wouldn't have believed it.",
      correct: "Unless I had seen it with my own eyes, I wouldn't have believed it.",
      explanation: "'Unless' ya implica negación ('if not'), así que no se usa con 'hadn't'."
    },
    {
      incorrect: "If he had studied, he will have passed the exam.",
      correct: "If he had studied, he would have passed the exam.",
      explanation: "En el Third Conditional, la cláusula principal debe usar 'would have + participio pasado', no 'will have'."
    }
  ]
};
