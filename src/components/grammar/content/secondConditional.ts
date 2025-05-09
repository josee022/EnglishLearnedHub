import { GrammarContent } from '../../../types/grammar';

export const secondConditionalContent: GrammarContent = {
  id: 'second-conditional',
  title: 'Second Conditional',
  introduction: {
    text: 'El Second Conditional (Segundo Condicional) se utiliza para hablar de situaciones hipotéticas, improbables o imaginarias en el presente o futuro. Este condicional nos permite expresar qué pasaría en una situación que es poco probable que ocurra, o para hablar de situaciones contrarias a la realidad actual.',
    emoji: '💭'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + pasado simple, sujeto + would + infinitivo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I won the lottery</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would buy a big house</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I had more time</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would learn to play the piano</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we lived near the beach</span>, <span class="text-green-600 dark:text-green-400 font-bold">we would go swimming every day</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I spoke Chinese</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would move to Shanghai</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you had the chance</span>, <span class="text-green-600 dark:text-green-400 font-bold">you would travel the world</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it snowed here</span>, <span class="text-green-600 dark:text-green-400 font-bold">she would build a snowman</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he knew the truth</span>, <span class="text-green-600 dark:text-green-400 font-bold">he would be shocked</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If they offered me the job</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would take it</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>En la cláusula condicional (<em>if clause</em>) utilizamos el <strong>pasado simple</strong>.</li>
            <li>En la cláusula principal (<em>main clause</em>) utilizamos <strong>would + infinitivo</strong>.</li>
            <li>Aunque usamos el pasado simple en la cláusula con "if", no estamos hablando del pasado, sino de una situación hipotética en el presente o futuro.</li>
            <li>Las dos cláusulas pueden invertirse sin cambiar el significado:
              <ul class="list-disc pl-5 mt-1">
                <li>I would buy a big house if I won the lottery.</li>
                <li>She would build a snowman if it snowed here.</li>
              </ul>
            </li>
            <li>Cuando la cláusula condicional va primero, se separa de la principal por una coma. Si va después, normalmente no es necesaria la coma:
              <ul class="list-disc pl-5 mt-1">
                <li>If we lived near the beach, we would go swimming every day.</li>
                <li>We would go swimming every day if we lived near the beach.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'d</strong> es la forma contraída de <strong>would</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>would</strong> buy → I<strong>'d</strong> buy</li>
            <li>You <strong>would</strong> travel → You<strong>'d</strong> travel</li>
            <li>She <strong>would</strong> build → She<strong>'d</strong> build</li>
            <li>They <strong>would</strong> be → They<strong>'d</strong> be</li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
          <p class="font-medium text-purple-800 dark:text-purple-400">🔄 Alternativas a Would:</p>
          <p class="text-purple-800 dark:text-purple-400 mt-1">En lugar de <strong>would</strong>, podemos usar otros verbos modales con significado similar:</p>
          <ul class="list-disc pl-5 text-purple-800 dark:text-purple-400 mt-1">
            <li>If I had more money, I <strong>could</strong> buy a new car. (posibilidad)</li>
            <li>If you asked him, he <strong>might</strong> help you. (posibilidad menor)</li>
            <li>If I were you, I <strong>should</strong> apologize. (recomendación)</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + pasado simple, sujeto + wouldn't (would not) + infinitivo</p>
        <p class="font-medium">O: If + sujeto + pasado simple negativo, sujeto + would + infinitivo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en el resultado (main clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I won the lottery</span>, <span class="text-red-600 dark:text-red-400 font-bold">I wouldn't continue working</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you met a celebrity</span>, <span class="text-red-600 dark:text-red-400 font-bold">you would not be able to speak</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it rained</span>, <span class="text-red-600 dark:text-red-400 font-bold">we wouldn't go to the park</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she had more free time</span>, <span class="text-red-600 dark:text-red-400 font-bold">she wouldn't feel stressed</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en la condición (if clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I didn't have to work</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would travel the world</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you weren't so busy</span>, <span class="text-green-600 dark:text-green-400 font-bold">you would have more time for hobbies</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it didn't cost so much</span>, <span class="text-green-600 dark:text-green-400 font-bold">we would buy a new car</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he didn't live so far away</span>, <span class="text-green-600 dark:text-green-400 font-bold">I would visit him more often</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Caso especial: to be</p>
          <p class="text-amber-800 dark:text-amber-400 mt-1">Con el verbo "to be" en la primera o tercera persona del singular, tradicionalmente se usa <strong>were</strong> en lugar de <strong>was</strong>, especialmente en contextos formales:</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 mt-1">
            <li>If I <strong>were</strong> rich, I would buy a yacht.</li>
            <li>If he <strong>were</strong> here, he would help us.</li>
            <li>If she <strong>were</strong> older, she would understand.</li>
          </ul>
          <p class="text-amber-800 dark:text-amber-400 mt-2">Sin embargo, en inglés coloquial, también es común escuchar "was":</p>
          <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400 mt-1">
            <li>If I <strong>was</strong> rich, I would buy a yacht.</li>
            <li>If he <strong>was</strong> here, he would help us.</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Uso de Unless:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1"><strong>Unless</strong> significa "if not" (si no) y también se puede usar en el Second Conditional:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Unless</strong> I had a car, I would have to take the bus. (= If I didn't have a car, I would have to take the bus.)</li>
            <li>She would never find out <strong>unless</strong> you told her. (= She would never find out if you didn't tell her.)</li>
            <li>He would be happier <strong>unless</strong> he worked so much. (= He would be happier if he didn't work so much.)</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + pasado simple, would + sujeto + infinitivo?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas básicas</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you had a million dollars</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would you quit your job</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you could live anywhere</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would you stay in this country</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she learned to drive</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would she buy a car</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we had more space</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">would we get a dog</span>?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con partículas interrogativas</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What would you do</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you were the president</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Where would you go</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you could travel anywhere</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">How would she react</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if she knew the truth</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Who would you invite</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you had a party</span>?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>would</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>wouldn't</strong>.</p>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Expresión "If I were you":</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">Una expresión común para dar consejos es "If I were you..." (Si yo fuera tú...):</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>If I were you</strong>, I would apologize to her.</li>
            <li><strong>If I were you</strong>, I wouldn't worry about it.</li>
            <li><strong>If I were you</strong>, I would apply for that job.</li>
            <li><strong>What would you do if you were me</strong>?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "If I had more money, I would travel the world.", spanish: "Si tuviera más dinero, viajaría por todo el mundo." },
      { english: "She wouldn't be tired if she slept more.", spanish: "Ella no estaría cansada si durmiera más." },
      { english: "What would you do if you won the lottery?", spanish: "¿Qué harías si ganaras la lotería?" },
      { english: "If it wasn't so cold, we would go for a walk.", spanish: "Si no hiciera tanto frío, iríamos a dar un paseo." }
    ]
  },
  uses: {
    description: "El Second Conditional tiene varios usos específicos relacionados con situaciones hipotéticas en el presente o futuro:",
    useCases: [
      {
        title: "Situaciones imaginarias o hipotéticas 💭",
        description: "Para hablar de situaciones que no son reales, sino imaginarias o hipotéticas.",
        examples: [
          { english: "If I were a superhero, I would fly around the world.", spanish: "Si fuera un superhéroe, volaría alrededor del mundo." },
          { english: "If animals could talk, what would they say?", spanish: "Si los animales pudieran hablar, ¿qué dirían?" },
          { english: "We would live on a farm if we didn't have to work in the city.", spanish: "Viviríamos en una granja si no tuviéramos que trabajar en la ciudad." }
        ]
      },
      {
        title: "Situaciones improbables o poco realistas 🌟",
        description: "Para expresar situaciones que son posibles pero poco probables o realistas en el presente o futuro.",
        examples: [
          { english: "If I won the lottery, I would buy a private island.", spanish: "Si ganara la lotería, compraría una isla privada." },
          { english: "She would move to Paris if she could find a job there.", spanish: "Ella se mudaría a París si pudiera encontrar un trabajo allí." },
          { english: "If the company offered me a better salary, I would consider staying.", spanish: "Si la empresa me ofreciera un mejor salario, consideraría quedarme." }
        ]
      },
      {
        title: "Situaciones contrarias a la realidad actual 🔄",
        description: "Para hablar de situaciones que son contrarias a lo que es actualmente cierto.",
        examples: [
          { english: "If I had a car, I wouldn't have to take the bus. (Implica que no tengo un coche)", spanish: "Si tuviera un coche, no tendría que tomar el autobús. (Implica que no tengo un coche)" },
          { english: "If she lived closer, we would see each other more often. (Implica que no vive cerca)", spanish: "Si ella viviera más cerca, nos veríamos más a menudo. (Implica que no vive cerca)" },
          { english: "I would help you if I knew how to fix computers. (Implica que no sé arreglar ordenadores)", spanish: "Te ayudaría si supiera arreglar ordenadores. (Implica que no sé arreglar ordenadores)" }
        ]
      },
      {
        title: "Consejos o sugerencias hipotéticas 💡",
        description: "Para dar consejos o hacer sugerencias de manera indirecta o menos impositiva.",
        examples: [
          { english: "If I were you, I would apologize to her.", spanish: "Si yo fuera tú, le pediría disculpas." },
          { english: "I wouldn't say anything if I were in your position.", spanish: "No diría nada si estuviera en tu posición." },
          { english: "What would you do if you were me?", spanish: "¿Qué harías tú si fueras yo?" }
        ]
      },
      {
        title: "Deseos o anhelos 🌠",
        description: "Para expresar deseos o anhelos que son difíciles o imposibles de realizar.",
        examples: [
          { english: "If I had more free time, I would learn to play the guitar.", spanish: "Si tuviera más tiempo libre, aprendería a tocar la guitarra." },
          { english: "We would live in a bigger house if we could afford it.", spanish: "Viviríamos en una casa más grande si pudiéramos permitírnoslo." },
          { english: "If I were younger, I would study medicine.", spanish: "Si fuera más joven, estudiaría medicina." }
        ]
      },
      {
        title: "Posibilidades y decisiones especulativas 🤔",
        description: "Para especular sobre posibles acciones o decisiones en situaciones hipotéticas.",
        examples: [
          { english: "What would you do if you had to choose between your career and your family?", spanish: "¿Qué harías si tuvieras que elegir entre tu carrera y tu familia?" },
          { english: "If you could live anywhere in the world, where would you choose?", spanish: "Si pudieras vivir en cualquier lugar del mundo, ¿dónde elegirías?" },
          { english: "How would you react if someone offered you a million dollars to do something illegal?", spanish: "¿Cómo reaccionarías si alguien te ofreciera un millón de dólares para hacer algo ilegal?" }
        ]
      }
    ]
  },
  examples: [
    { english: "If I had more time, I would read more books.", spanish: "Si tuviera más tiempo, leería más libros." },
    { english: "She would travel more if she didn't have so many responsibilities.", spanish: "Ella viajaría más si no tuviera tantas responsabilidades." },
    { english: "What would you do if you found a wallet on the street?", spanish: "¿Qué harías si encontraras una cartera en la calle?" },
    { english: "If we weren't so busy, we would visit you more often.", spanish: "Si no estuviéramos tan ocupados, te visitaríamos más a menudo." },
    { english: "I would be happier if I lived near the beach.", spanish: "Sería más feliz si viviera cerca de la playa." },
    { english: "If I knew the answer, I would tell you.", spanish: "Si supiera la respuesta, te la diría." },
    { english: "Where would you go if you could go anywhere?", spanish: "¿Adónde irías si pudieras ir a cualquier lugar?" },
    { english: "They wouldn't sell their house if they didn't need the money.", spanish: "No venderían su casa si no necesitaran el dinero." }
  ],
  timeExpressions: [
    { word: "in an ideal world", description: "en un mundo ideal" },
    { word: "theoretically", description: "teóricamente" },
    { word: "hypothetically speaking", description: "hablando hipotéticamente" },
    { word: "in theory", description: "en teoría" },
    { word: "in a perfect situation", description: "en una situación perfecta" },
    { word: "in my imagination", description: "en mi imaginación" },
    { word: "in my dreams", description: "en mis sueños" },
    { word: "if it were possible", description: "si fuera posible" }
  ],
  tips: [
    {
      title: "Second Conditional vs. First Conditional",
      content: "El Second Conditional se usa para situaciones hipotéticas, improbables o irreales, mientras que el First Conditional se usa para situaciones posibles o probables en el futuro. Compara: 'If I won the lottery, I would buy a mansion' (improbable) vs. 'If I win the lottery, I will buy a mansion' (posible).",
      emoji: "⚖️"
    },
    {
      title: "Were vs. Was",
      content: "Tradicionalmente, con el verbo 'to be' en primera y tercera persona del singular se usa 'were' en lugar de 'was': 'If I were rich' (no 'If I was rich'). Sin embargo, en el inglés coloquial moderno, 'was' es ampliamente aceptado y usado.",
      emoji: "📝"
    },
    {
      title: "If I were you",
      content: "Una forma común de dar consejos es usar la expresión 'If I were you' (Si yo fuera tú), que siempre usa 'were' y no 'was': 'If I were you, I would study more'.",
      emoji: "💡"
    },
    {
      title: "No uses Would en la if clause",
      content: "Un error común es usar 'would' en ambas partes de la oración. Recuerda que en la cláusula con 'if' siempre usamos pasado simple: 'If I had more money, I would travel more' (no 'If I would have more money').",
      emoji: "⚠️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "If I would have more time, I would learn Japanese.",
      correct: "If I had more time, I would learn Japanese.",
      explanation: "No se usa 'would' en la cláusula condicional (después de 'if'), sino el pasado simple."
    },
    {
      incorrect: "If she would be here, she would help us.",
      correct: "If she were here, she would help us.",
      explanation: "No se usa 'would' en la cláusula condicional; con 'be' se usa 'were' (o 'was' en lenguaje más coloquial)."
    },
    {
      incorrect: "I would go to the party if I will have time.",
      correct: "I would go to the party if I had time.",
      explanation: "No se usa 'will' en la cláusula condicional del Second Conditional, sino el pasado simple."
    },
    {
      incorrect: "Unless I would work harder, I wouldn't get promoted.",
      correct: "Unless I worked harder, I wouldn't get promoted.",
      explanation: "No se usa 'would' después de 'unless', sino el pasado simple."
    },
    {
      incorrect: "If I was you, I would apply for that job.",
      correct: "If I were you, I would apply for that job.",
      explanation: "En la expresión 'If I were you', tradicionalmente se usa 'were', no 'was', aunque 'was' es común en lenguaje coloquial."
    },
    {
      incorrect: "I would help you if I will be free tomorrow.",
      correct: "I would help you if I were free tomorrow.",
      explanation: "En el Second Conditional, no usamos 'will', sino el pasado simple en la cláusula con 'if'."
    }
  ]
};
