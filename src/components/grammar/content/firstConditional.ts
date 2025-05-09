import { GrammarContent } from '../../../types/grammar';

export const firstConditionalContent: GrammarContent = {
  id: 'first-conditional',
  title: 'First Conditional',
  introduction: {
    text: 'El First Conditional (Primer Condicional) se utiliza para hablar de situaciones posibles o probables en el futuro. Expresamos una condición que, si se cumple, resultará en una consecuencia futura. Es un condicional "real" porque la situación tiene posibilidades razonables de ocurrir.',
    emoji: '🔮'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + presente simple, sujeto + will + infinitivo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con sujetos en primera persona</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I study hard</span>, <span class="text-green-600 dark:text-green-400 font-bold">I will pass the exam</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I have enough money</span>, <span class="text-green-600 dark:text-green-400 font-bold">I will buy a new car</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we finish early</span>, <span class="text-green-600 dark:text-green-400 font-bold">we will go to the cinema</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I get the job</span>, <span class="text-green-600 dark:text-green-400 font-bold">I'll move to London</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Con otros sujetos</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you work hard</span>, <span class="text-green-600 dark:text-green-400 font-bold">you will succeed</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it rains</span>, <span class="text-green-600 dark:text-green-400 font-bold">she will take an umbrella</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he apologizes</span>, <span class="text-green-600 dark:text-green-400 font-bold">they will forgive him</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If the weather is nice</span>, <span class="text-green-600 dark:text-green-400 font-bold">they'll have a picnic</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>En la cláusula condicional (<em>if clause</em>) utilizamos el <strong>presente simple</strong>.</li>
            <li>En la cláusula principal (<em>main clause</em>) utilizamos <strong>will + infinitivo</strong>.</li>
            <li>Las dos cláusulas pueden invertirse sin cambiar el significado:
              <ul class="list-disc pl-5 mt-1">
                <li>I will pass the exam if I study hard.</li>
                <li>She will take an umbrella if it rains.</li>
              </ul>
            </li>
            <li>Cuando la cláusula condicional va primero, se separa de la principal por una coma. Si va después, no es necesaria la coma:
              <ul class="list-disc pl-5 mt-1">
                <li>If we arrive early, we'll get good seats.</li>
                <li>We'll get good seats if we arrive early.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, <strong>'ll</strong> es la forma contraída de <strong>will</strong>:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>I <strong>will</strong> pass → I<strong>'ll</strong> pass</li>
            <li>You <strong>will</strong> succeed → You<strong>'ll</strong> succeed</li>
            <li>She <strong>will</strong> take → She<strong>'ll</strong> take</li>
            <li>They <strong>will</strong> have → They<strong>'ll</strong> have</li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
          <p class="font-medium text-purple-800 dark:text-purple-400">🔄 Alternativas a Will:</p>
          <p class="text-purple-800 dark:text-purple-400 mt-1">En lugar de <strong>will</strong>, podemos usar otros verbos modales con significado similar:</p>
          <ul class="list-disc pl-5 text-purple-800 dark:text-purple-400 mt-1">
            <li>If it rains, you <strong>should</strong> take an umbrella. (recomendación)</li>
            <li>If you finish early, you <strong>can</strong> go home. (permiso/posibilidad)</li>
            <li>If he asks for help, I <strong>might</strong> assist him. (posibilidad menor)</li>
            <li>If they don't hurry, they <strong>must</strong> miss the train. (obligación/certeza)</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + presente simple, sujeto + won't (will not) + infinitivo</p>
        <p class="font-medium">O: If + sujeto + presente simple negativo, sujeto + will + infinitivo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en el resultado (main clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I study hard</span>, <span class="text-red-600 dark:text-red-400 font-bold">I won't fail the exam</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you help me</span>, <span class="text-red-600 dark:text-red-400 font-bold">I will not be late</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it rains</span>, <span class="text-red-600 dark:text-red-400 font-bold">we won't go to the beach</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If he calls</span>, <span class="text-red-600 dark:text-red-400 font-bold">she won't answer</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en la condición (if clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I don't study</span>, <span class="text-green-600 dark:text-green-400 font-bold">I will fail the exam</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you don't hurry</span>, <span class="text-green-600 dark:text-green-400 font-bold">you will miss the train</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it doesn't rain</span>, <span class="text-green-600 dark:text-green-400 font-bold">we will go for a walk</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she doesn't apologize</span>, <span class="text-green-600 dark:text-green-400 font-bold">I will be upset</span>.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Uso de Unless:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1"><strong>Unless</strong> significa "if not" (si no) y es útil para simplificar oraciones negativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Unless</strong> I study hard, I will fail the exam. (= If I don't study hard, I will fail the exam.)</li>
            <li>You will miss the train <strong>unless</strong> you hurry. (= You will miss the train if you don't hurry.)</li>
            <li>We will go for a walk <strong>unless</strong> it rains. (= We will go for a walk if it doesn't rain.)</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">If + sujeto + presente simple, will + sujeto + infinitivo?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas básicas</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you win the lottery</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">will you quit your job</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it snows</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">will they cancel the event</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If she studies medicine</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">will she become a doctor</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If we leave now</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">will we arrive on time</span>?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con partículas interrogativas</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What will you do</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you miss the bus</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Where will she go</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if she gets the job</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">How will they travel</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if there's a strike</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">When will you call me</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you hear the news</span>?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, I/you/he/she/it/we/they <strong>will</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, I/you/he/she/it/we/they <strong>won't</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      { english: "If I have time, I'll call you.", spanish: "Si tengo tiempo, te llamaré." },
      { english: "She won't come to the party if she has to work late.", spanish: "Ella no vendrá a la fiesta si tiene que trabajar hasta tarde." },
      { english: "Will you help me if I need it?", spanish: "¿Me ayudarás si lo necesito?" },
      { english: "If the weather doesn't improve, we'll cancel the trip.", spanish: "Si el tiempo no mejora, cancelaremos el viaje." }
    ]
  },
  uses: {
    description: "El First Conditional tiene varios usos específicos relacionados con situaciones posibles en el futuro:",
    useCases: [
      {
        title: "Resultados futuros probables 🎯",
        description: "Para hablar de situaciones que probablemente ocurrirán en el futuro si se cumple una condición.",
        examples: [
          { english: "If I study, I will pass the exam.", spanish: "Si estudio, aprobaré el examen." },
          { english: "If it rains tomorrow, we'll stay home.", spanish: "Si llueve mañana, nos quedaremos en casa." },
          { english: "If you don't hurry, you'll be late.", spanish: "Si no te das prisa, llegarás tarde." }
        ]
      },
      {
        title: "Consecuencias de acciones 🔄",
        description: "Para indicar las consecuencias lógicas que seguirán a ciertas acciones o condiciones.",
        examples: [
          { english: "If you eat all that chocolate, you'll feel sick.", spanish: "Si te comes todo ese chocolate, te sentirás mal." },
          { english: "If we don't leave now, we'll miss the train.", spanish: "Si no nos vamos ahora, perderemos el tren." },
          { english: "If she practices every day, she'll improve quickly.", spanish: "Si practica todos los días, mejorará rápidamente." }
        ]
      },
      {
        title: "Planes o decisiones condicionales 📋",
        description: "Para expresar planes o intenciones futuras que dependen de que se cumpla una condición.",
        examples: [
          { english: "If I get the job, I'll move to London.", spanish: "Si consigo el trabajo, me mudaré a Londres." },
          { english: "We'll buy a new car if we save enough money.", spanish: "Compraremos un coche nuevo si ahorramos suficiente dinero." },
          { english: "If the hotel is too expensive, we'll look for another one.", spanish: "Si el hotel es demasiado caro, buscaremos otro." }
        ]
      },
      {
        title: "Advertencias y consejos 🚨",
        description: "Para dar advertencias o consejos sobre posibles consecuencias futuras.",
        examples: [
          { english: "If you don't wear sunscreen, you'll get sunburned.", spanish: "Si no usas protector solar, te quemarás." },
          { english: "You'll regret it if you don't take this opportunity.", spanish: "Te arrepentirás si no aprovechas esta oportunidad." },
          { english: "If you keep eating fast food, you'll gain weight.", spanish: "Si sigues comiendo comida rápida, engordarás." }
        ]
      },
      {
        title: "Promesas y amenazas 🤝",
        description: "Para hacer promesas o amenazas que dependen de que se cumpla una condición.",
        examples: [
          { english: "If you help me now, I'll help you later.", spanish: "Si me ayudas ahora, te ayudaré más tarde." },
          { english: "I'll give you a reward if you finish your homework.", spanish: "Te daré una recompensa si terminas tus deberes." },
          { english: "If you don't stop making noise, I'll tell your parents.", spanish: "Si no dejas de hacer ruido, se lo diré a tus padres." }
        ]
      },
      {
        title: "Toma de decisiones 🤔",
        description: "Para expresar cómo se tomará una decisión basada en una condición futura.",
        examples: [
          { english: "If the weather is nice, we'll go to the beach.", spanish: "Si hace buen tiempo, iremos a la playa." },
          { english: "I'll let you know if I hear any news.", spanish: "Te lo haré saber si oigo alguna noticia." },
          { english: "If the restaurant is full, we'll go somewhere else.", spanish: "Si el restaurante está lleno, iremos a otro sitio." }
        ]
      }
    ]
  },
  examples: [
    { english: "If I finish work early, I'll go to the gym.", spanish: "Si termino el trabajo temprano, iré al gimnasio." },
    { english: "He won't pass the exam if he doesn't study more.", spanish: "No aprobará el examen si no estudia más." },
    { english: "Will your parents be upset if you don't visit them?", spanish: "¿Se molestarán tus padres si no los visitas?" },
    { english: "If it doesn't rain this weekend, we'll go hiking.", spanish: "Si no llueve este fin de semana, iremos a hacer senderismo." },
    { english: "Unless you apologize, she won't forgive you.", spanish: "A menos que te disculpes, ella no te perdonará." },
    { english: "I'll help you with your homework if you help me clean the house.", spanish: "Te ayudaré con tus deberes si me ayudas a limpiar la casa." },
    { english: "What will happen if we miss the deadline?", spanish: "¿Qué pasará si no cumplimos el plazo?" },
    { english: "If you take this medicine, you'll feel better soon.", spanish: "Si tomas esta medicina, te sentirás mejor pronto." }
  ],
  timeExpressions: [
    { word: "tomorrow", description: "mañana" },
    { word: "next week/month/year", description: "la semana/el mes/el año que viene" },
    { word: "in the future", description: "en el futuro" },
    { word: "soon", description: "pronto" },
    { word: "later", description: "más tarde" },
    { word: "eventually", description: "con el tiempo, finalmente" },
    { word: "in a few days/weeks", description: "en unos días/semanas" },
    { word: "in [time period]", description: "en [período de tiempo]" }
  ],
  tips: [
    {
      title: "First Conditional vs. Zero Conditional",
      content: "El First Conditional se usa para situaciones posibles o probables en el futuro, mientras que el Zero Conditional se usa para verdades generales. Compara: 'If it rains tomorrow, I will stay at home' (futuro posible) vs. 'If it rains, the ground gets wet' (verdad general).",
      emoji: "⚖️"
    },
    {
      title: "No uses Will en la if clause",
      content: "Un error común es usar 'will' en ambas partes de la oración. Recuerda que en la cláusula con 'if' siempre usamos presente simple: 'If it rains, I will stay home' (no 'If it will rain').",
      emoji: "⚠️"
    },
    {
      title: "Alternativas a Will",
      content: "Aunque 'will' es lo más común en el First Conditional, también puedes usar otros modales como 'can', 'may', 'might', 'should', o imperativos para expresar diferentes matices de significado: 'If you finish early, you can go home', 'If it rains, take an umbrella'.",
      emoji: "🔄"
    },
    {
      title: "First Conditional en lenguaje formal",
      content: "En contextos formales o académicos, a veces se usa 'should' en la cláusula con 'if' para expresar una condición menos probable: 'If you should need any assistance, please contact the reception' (en lugar de 'If you need').",
      emoji: "👔"
    }
  ],
  commonMistakes: [
    {
      incorrect: "If it will rain, I will stay at home.",
      correct: "If it rains, I will stay at home.",
      explanation: "No se usa 'will' en la cláusula condicional (después de 'if')."
    },
    {
      incorrect: "If I will see him, I will tell him the news.",
      correct: "If I see him, I will tell him the news.",
      explanation: "En la cláusula con 'if' usamos presente simple, no futuro con 'will'."
    },
    {
      incorrect: "If you will help me, I will finish earlier.",
      correct: "If you help me, I will finish earlier.",
      explanation: "No se usa 'will' en la cláusula condicional (después de 'if')."
    },
    {
      incorrect: "Unless it will rain, we will go to the park.",
      correct: "Unless it rains, we will go to the park.",
      explanation: "Después de 'unless', al igual que con 'if', usamos presente simple, no futuro con 'will'."
    },
    {
      incorrect: "I go to the beach if the weather will be nice.",
      correct: "I will go to the beach if the weather is nice.",
      explanation: "En el First Conditional, la cláusula principal (la que no tiene 'if') debe llevar 'will' u otro modal de futuro."
    },
    {
      incorrect: "Unless you won't study, you'll fail the exam.",
      correct: "Unless you study, you'll fail the exam.",
      explanation: "'Unless' ya implica negación (significa 'if not'), así que no añadimos otra negación con 'won't'."
    }
  ]
};
