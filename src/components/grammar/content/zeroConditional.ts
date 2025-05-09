import { GrammarContent } from '../../../types/grammar';

export const zeroConditionalContent: GrammarContent = {
  id: 'zero-conditional',
  title: 'Zero Conditional',
  introduction: {
    text: 'El Zero Conditional (Condicional Cero) se utiliza para hablar de situaciones que son siempre verdaderas, como hechos científicos, leyes naturales o verdades generales. Expresa una relación directa e inevitable de causa y efecto, donde un resultado siempre sigue a una condición.',
    emoji: '⚖️'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">If/When + sujeto + presente simple, sujeto + presente simple</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estructura con If</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you heat water to 100°C</span>, <span class="text-green-600 dark:text-green-400 font-bold">it boils</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you don't water plants</span>, <span class="text-green-600 dark:text-green-400 font-bold">they die</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If I eat too much</span>, <span class="text-green-600 dark:text-green-400 font-bold">I get sick</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If it rains</span>, <span class="text-green-600 dark:text-green-400 font-bold">the ground gets wet</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Estructura con When</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When I'm tired</span>, <span class="text-green-600 dark:text-green-400 font-bold">I go to bed</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When you mix yellow and blue</span>, <span class="text-green-600 dark:text-green-400 font-bold">you get green</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When it snows</span>, <span class="text-green-600 dark:text-green-400 font-bold">schools often close</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When water freezes</span>, <span class="text-green-600 dark:text-green-400 font-bold">it expands</span>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li>Tanto en la cláusula condicional (<em>if clause</em>) como en la cláusula principal (<em>main clause</em>) se utiliza el <strong>presente simple</strong>.</li>
            <li>Se usa <strong>if</strong> cuando el resultado no es siempre cierto o inevitable.</li>
            <li>Se usa <strong>when</strong> cuando el resultado siempre ocurre, sin excepciones.</li>
            <li>Las dos cláusulas pueden invertirse sin cambiar el significado:
              <ul class="list-disc pl-5 mt-1">
                <li>Water boils if you heat it to 100°C.</li>
                <li>I go to bed when I'm tired.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Usos alternativos:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">También se pueden usar otras conjunciones similares a "if/when":</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>As soon as</strong> the bell rings, students leave the classroom.</li>
            <li><strong>Unless</strong> you brush your teeth regularly, you get cavities. (= If you don't brush...)</li>
            <li><strong>As long as</strong> you follow the recipe, the cake turns out well.</li>
            <li><strong>Every time</strong> I drink coffee late, I can't sleep.</li>
          </ul>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">If/When + sujeto + presente simple negativo, sujeto + presente simple</p>
        <p class="font-medium">O: If/When + sujeto + presente simple, sujeto + presente simple negativo</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en la condición (if/when clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you don't wear a coat in winter</span>, <span class="text-green-600 dark:text-green-400 font-bold">you feel cold</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If plants don't get enough water</span>, <span class="text-green-600 dark:text-green-400 font-bold">they die</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When we don't sleep enough</span>, <span class="text-green-600 dark:text-green-400 font-bold">we feel tired</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If children don't eat well</span>, <span class="text-green-600 dark:text-green-400 font-bold">they get sick more often</span>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Negación en el resultado (main clause)</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you study regularly</span>, <span class="text-red-600 dark:text-red-400 font-bold">you don't fail exams</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When oil floats on water</span>, <span class="text-red-600 dark:text-red-400 font-bold">it doesn't sink</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you exercise daily</span>, <span class="text-red-600 dark:text-red-400 font-bold">your muscles don't weaken</span>.</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When it's freezing outside</span>, <span class="text-red-600 dark:text-red-400 font-bold">people don't wear sandals</span>.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Uso de Unless:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1"><strong>Unless</strong> significa "if not" (si no) y es muy común en el Zero Conditional:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Unless</strong> you water plants, they die. (= If you don't water plants, they die.)</li>
            <li>The ice cream melts <strong>unless</strong> you put it in the freezer. (= The ice cream melts if you don't put it in the freezer.)</li>
            <li>Children get bored <strong>unless</strong> they have something to do. (= Children get bored if they don't have something to do.)</li>
          </ul>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">If/When + sujeto + presente simple, [auxiliar] + sujeto + verbo principal?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con la estructura básica</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If you heat water to 100°C</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">does it always boil</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When children eat too much sugar</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">do they become hyperactive</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">If plants don't get water</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">do they die immediately</span>?</p>
            <p><span class="text-amber-600 dark:text-amber-400 font-bold">When you mix red and blue</span>, <span class="text-purple-600 dark:text-purple-400 font-bold">do you get purple</span>?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Preguntas con partículas interrogativas</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">What happens</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if you mix oil and water</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Why do plants die</span> <span class="text-amber-600 dark:text-amber-400 font-bold">if they don't get sunlight</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">How does the body react</span> <span class="text-amber-600 dark:text-amber-400 font-bold">when the temperature rises</span>?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Where do most people go</span> <span class="text-amber-600 dark:text-amber-400 font-bold">when it gets too hot</span>?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">Yes, it/they <strong>do/does</strong>.</p>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <p class="text-amber-800 dark:text-amber-400">No, it/they <strong>don't/doesn't</strong>.</p>
            </div>
          </div>
          <p class="text-amber-800 dark:text-amber-400 mt-2"><strong>Nota:</strong> Las respuestas cortas siguen las reglas normales del presente simple.</p>
        </div>
      </div>
    `,
    examples: [
      { english: "If you don't brush your teeth, you get cavities.", spanish: "Si no te cepillas los dientes, te salen caries." },
      { english: "When ice melts, it turns into water.", spanish: "Cuando el hielo se derrite, se convierte en agua." },
      { english: "Plants die if they don't get water.", spanish: "Las plantas mueren si no reciben agua." },
      { english: "Do fish die when they are out of water?", spanish: "¿Mueren los peces cuando están fuera del agua?" }
    ]
  },
  uses: {
    description: "El Zero Conditional tiene usos específicos y limitados, básicamente para hablar de verdades generales y relaciones causa-efecto consistentes:",
    useCases: [
      {
        title: "Leyes científicas y naturales 🔬",
        description: "Para expresar hechos científicos o naturales que siempre son verdad.",
        examples: [
          { english: "If you heat ice, it melts.", spanish: "Si calientas hielo, se derrite." },
          { english: "When water reaches 0°C, it freezes.", spanish: "Cuando el agua alcanza los 0°C, se congela." },
          { english: "If you drop something, it falls to the ground.", spanish: "Si dejas caer algo, cae al suelo." }
        ]
      },
      {
        title: "Verdades generales 📚",
        description: "Para hablar de cosas que son generalmente ciertas en casi todas las circunstancias.",
        examples: [
          { english: "If you don't eat, you get hungry.", spanish: "Si no comes, tienes hambre." },
          { english: "When people are tired, they sleep.", spanish: "Cuando la gente está cansada, duerme." },
          { english: "If babies are hungry, they cry.", spanish: "Si los bebés tienen hambre, lloran." }
        ]
      },
      {
        title: "Hábitos y rutinas 🔄",
        description: "Para describir patrones habituales de comportamiento o rutinas.",
        examples: [
          { english: "When I finish work, I go to the gym.", spanish: "Cuando termino de trabajar, voy al gimnasio." },
          { english: "If John has free time, he plays the guitar.", spanish: "Si John tiene tiempo libre, toca la guitarra." },
          { english: "When we visit my parents, we always eat cake.", spanish: "Cuando visitamos a mis padres, siempre comemos pastel." }
        ]
      },
      {
        title: "Instrucciones y procedimientos 📋",
        description: "Para dar instrucciones paso a paso o explicar cómo funciona algo.",
        examples: [
          { english: "If you press this button, the machine starts.", spanish: "Si presionas este botón, la máquina comienza a funcionar." },
          { english: "When you add salt to food, it tastes better.", spanish: "Cuando añades sal a la comida, sabe mejor." },
          { english: "If you turn the key clockwise, the door unlocks.", spanish: "Si giras la llave en sentido horario, la puerta se desbloquea." }
        ]
      },
      {
        title: "Causa y efecto en general ⚡",
        description: "Para establecer relaciones causa-efecto que son consistentes o predecibles.",
        examples: [
          { english: "If you work hard, you achieve your goals.", spanish: "Si trabajas duro, logras tus objetivos." },
          { english: "When you smile at people, they usually smile back.", spanish: "Cuando le sonríes a la gente, normalmente te devuelven la sonrisa." },
          { english: "If you speak to people in their language, they appreciate it.", spanish: "Si hablas con la gente en su idioma, lo aprecian." }
        ]
      }
    ]
  },
  examples: [
    { english: "If you mix blue and yellow, you get green.", spanish: "Si mezclas azul y amarillo, obtienes verde." },
    { english: "When oil is heated, it expands.", spanish: "Cuando el aceite se calienta, se expande." },
    { english: "If you touch fire, you get burned.", spanish: "Si tocas fuego, te quemas." },
    { english: "I get a headache when I don't drink enough water.", spanish: "Me da dolor de cabeza cuando no bebo suficiente agua." },
    { english: "The dog barks if someone knocks on the door.", spanish: "El perro ladra si alguien llama a la puerta." },
    { english: "Unless you have a ticket, you can't enter the concert.", spanish: "A menos que tengas una entrada, no puedes entrar al concierto." },
    { english: "Children learn quickly when they are interested in something.", spanish: "Los niños aprenden rápido cuando están interesados en algo." },
    { english: "What happens if you don't follow the rules?", spanish: "¿Qué pasa si no sigues las reglas?" }
  ],
  timeExpressions: [
    { word: "always", description: "siempre" },
    { word: "usually", description: "normalmente, por lo general" },
    { word: "never", description: "nunca" },
    { word: "every time", description: "cada vez que" },
    { word: "whenever", description: "siempre que, cuando sea que" },
    { word: "all the time", description: "todo el tiempo" },
    { word: "in general", description: "en general" },
    { word: "normally", description: "normalmente" },
    { word: "as a rule", description: "por regla general" }
  ],
  tips: [
    {
      title: "Zero Conditional vs. First Conditional",
      content: "El Zero Conditional se usa para verdades generales y resultados 100% seguros, mientras que el First Conditional se usa para situaciones posibles o probables en el futuro. Compara: 'If you heat water to 100°C, it boils' (siempre cierto) vs. 'If it rains tomorrow, I will stay at home' (posibilidad futura).",
      emoji: "⚖️"
    },
    {
      title: "When vs. If",
      content: "Aunque a menudo son intercambiables en Zero Conditional, 'when' implica mayor certeza o frecuencia que 'if'. 'When' sugiere que algo definitivamente ocurre, mientras que 'if' implica una condición que puede o no cumplirse.",
      emoji: "🔄"
    },
    {
      title: "Unless como alternativa",
      content: "'Unless' significa 'if not' (si no) y es útil para expresar excepciones. 'Unless you water plants, they die' = 'If you don't water plants, they die'. Es una forma más concisa de expresar la misma idea.",
      emoji: "💡"
    },
    {
      title: "Tiempo presente, no futuro",
      content: "Aunque a veces se refiere a acciones futuras, el Zero Conditional siempre usa presente simple en ambas partes. No uses 'will' ni otros tiempos de futuro: 'If it rains, the ground gets wet' (no 'will get wet').",
      emoji: "⏱️"
    }
  ],
  commonMistakes: [
    {
      incorrect: "If you heat water to 100°C, it will boil.",
      correct: "If you heat water to 100°C, it boils.",
      explanation: "En el Zero Conditional, usamos presente simple en ambas partes, no 'will' en la cláusula principal."
    },
    {
      incorrect: "When I will finish work, I go to the gym.",
      correct: "When I finish work, I go to the gym.",
      explanation: "No se usa 'will' en la cláusula condicional (después de 'when')."
    },
    {
      incorrect: "If you are heating ice, it melts.",
      correct: "If you heat ice, it melts.",
      explanation: "Generalmente usamos presente simple, no presente continuo, para verdades generales."
    },
    {
      incorrect: "If you don't watering plants, they die.",
      correct: "If you don't water plants, they die.",
      explanation: "Después de 'don't', usamos la forma base del verbo, no gerundio (-ing)."
    },
    {
      incorrect: "Unless you don't water plants, they die.",
      correct: "Unless you water plants, they die.",
      explanation: "'Unless' ya implica negación (significa 'if not'), así que no añadimos otra negación con 'don't'."
    },
    {
      incorrect: "When it's raining, the ground gets wet.",
      correct: "When it rains, the ground gets wet.",
      explanation: "Para verdades generales, preferimos el presente simple al presente continuo."
    }
  ]
};
