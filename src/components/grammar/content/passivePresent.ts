import { GrammarContent } from '../../../types/grammar';

export const passivePresentContent: GrammarContent = {
  id: 'passive-present',
  title: 'Voz Pasiva en Presente',
  introduction: {
    text: 'La voz pasiva en presente se utiliza cuando queremos enfatizar la acción o el objeto que recibe la acción, en lugar del sujeto que la realiza. Es especialmente útil cuando el agente (quien realiza la acción) es desconocido, irrelevante o cuando queremos centrar la atención en el resultado o en quien recibe la acción.',
    emoji: '🔄'
  },
  formation: {
    affirmative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto (receptor) + am/is/are + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Present Simple Passive</p>
            <p>The letter <span class="text-green-600 dark:text-green-400 font-bold">is written</span> by John.</p>
            <p>These cars <span class="text-green-600 dark:text-green-400 font-bold">are made</span> in Germany.</p>
            <p>English <span class="text-green-600 dark:text-green-400 font-bold">is spoken</span> in many countries.</p>
            <p>The house <span class="text-green-600 dark:text-green-400 font-bold">is cleaned</span> every week.</p>
            <p>I <span class="text-green-600 dark:text-green-400 font-bold">am invited</span> to parties rarely.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Present Continuous Passive</p>
            <p>The letter <span class="text-green-600 dark:text-green-400 font-bold">is being written</span> right now.</p>
            <p>The house <span class="text-green-600 dark:text-green-400 font-bold">is being cleaned</span> at the moment.</p>
            <p>A new bridge <span class="text-green-600 dark:text-green-400 font-bold">is being built</span> in our city.</p>
            <p>The documents <span class="text-green-600 dark:text-green-400 font-bold">are being prepared</span> by my assistant.</p>
            <p>The issue <span class="text-green-600 dark:text-green-400 font-bold">is being discussed</span> by the committee.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔍 Estructura detallada:</p>
          <ul class="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-400">
            <li><strong>Present Simple Passive:</strong> sujeto + is/am/are + participio pasado</li>
            <li><strong>Present Continuous Passive:</strong> sujeto + is/am/are being + participio pasado</li>
            <li>Usamos <strong>am</strong> con I</li>
            <li>Usamos <strong>is</strong> con he, she, it y sustantivos singulares</li>
            <li>Usamos <strong>are</strong> con you, we, they y sustantivos plurales</li>
            <li>El agente (introducido por "by") es opcional y a menudo se omite si es obvio o desconocido</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Transformación de Activa a Pasiva:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (Present Simple):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>John writes the letter.</li>
                <li>They make these cars in Germany.</li>
                <li>People speak English in many countries.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (Present Simple):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The letter is written by John.</li>
                <li>These cars are made in Germany.</li>
                <li>English is spoken in many countries.</li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Activa (Present Continuous):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>He is writing the letter right now.</li>
                <li>They are cleaning the house at the moment.</li>
                <li>The company is building a new bridge.</li>
              </ul>
            </div>
            <div>
              <p class="text-blue-800 dark:text-blue-400"><strong>Voz Pasiva (Present Continuous):</strong></p>
              <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400">
                <li>The letter is being written right now.</li>
                <li>The house is being cleaned at the moment.</li>
                <li>A new bridge is being built by the company.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    negative: `
      <div class="space-y-2">
        <p class="font-medium">Sujeto (receptor) + am/is/are + not + participio pasado (+ by + agente)</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Present Simple Passive Negativo</p>
            <p>The letter <span class="text-red-600 dark:text-red-400 font-bold">is not written</span> by John.</p>
            <p>These cars <span class="text-red-600 dark:text-red-400 font-bold">aren't made</span> in China.</p>
            <p>French <span class="text-red-600 dark:text-red-400 font-bold">isn't spoken</span> in this region.</p>
            <p>The house <span class="text-red-600 dark:text-red-400 font-bold">is not cleaned</span> every day.</p>
            <p>I <span class="text-red-600 dark:text-red-400 font-bold">am not invited</span> to his parties.</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Present Continuous Passive Negativo</p>
            <p>The letter <span class="text-red-600 dark:text-red-400 font-bold">is not being written</span> right now.</p>
            <p>The house <span class="text-red-600 dark:text-red-400 font-bold">isn't being cleaned</span> at the moment.</p>
            <p>A new bridge <span class="text-red-600 dark:text-red-400 font-bold">is not being built</span> in our city.</p>
            <p>The documents <span class="text-red-600 dark:text-red-400 font-bold">aren't being prepared</span> by my assistant.</p>
            <p>The issue <span class="text-red-600 dark:text-red-400 font-bold">is not being discussed</span> today.</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">💡 Formas contraídas:</p>
          <p class="text-blue-800 dark:text-blue-400 mt-1">En el lenguaje hablado y escrito informal, se usan las siguientes contracciones:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li>is not → <strong>isn't</strong></li>
            <li>are not → <strong>aren't</strong></li>
            <li>am not → no tiene contracción, se usa completo: <strong>am not</strong></li>
          </ul>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
          <p class="font-medium text-amber-800 dark:text-amber-400">🔄 Transformación de Activa a Pasiva (negativa):</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Voz Activa (Present Simple Negativo):</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>John doesn't write the letter.</li>
                <li>They don't make these cars in China.</li>
                <li>People don't speak French in this region.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Voz Pasiva (Present Simple Negativo):</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>The letter isn't written by John.</li>
                <li>These cars aren't made in China.</li>
                <li>French isn't spoken in this region.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    question: `
      <div class="space-y-2">
        <p class="font-medium">Am/Is/Are + sujeto (receptor) + participio pasado (+ by + agente)?</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Present Simple Passive Interrogativo</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is the letter written</span> by John?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are these cars made</span> in Germany?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is English spoken</span> in that country?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is this book read</span> in schools?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Am I allowed</span> to enter?</p>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <p class="font-medium text-blue-600 dark:text-blue-400">Present Continuous Passive Interrogativo</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is the letter being written</span> now?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is the house being cleaned</span> at the moment?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are new bridges being built</span> in your city?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Are the documents being prepared</span> by your assistant?</p>
            <p><span class="text-purple-600 dark:text-purple-400 font-bold">Is this issue being discussed</span> by the committee?</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 mt-2">
          <p class="font-medium text-amber-800 dark:text-amber-400">📝 Respuestas cortas:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Afirmativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>Yes, it is.</li>
                <li>Yes, they are.</li>
                <li>Yes, I am.</li>
              </ul>
            </div>
            <div>
              <p class="text-amber-800 dark:text-amber-400"><strong>Negativas:</strong></p>
              <ul class="list-disc pl-5 text-amber-800 dark:text-amber-400">
                <li>No, it isn't.</li>
                <li>No, they aren't.</li>
                <li>No, I'm not.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p class="font-medium text-blue-800 dark:text-blue-400">🔍 Preguntas con partículas interrogativas:</p>
          <ul class="list-disc pl-5 text-blue-800 dark:text-blue-400 mt-1">
            <li><strong>Where are</strong> these products <strong>made</strong>?</li>
            <li><strong>How is</strong> this machine <strong>operated</strong>?</li>
            <li><strong>When is</strong> the building <strong>cleaned</strong>?</li>
            <li><strong>Why are</strong> these measures <strong>being taken</strong>?</li>
            <li><strong>How often is</strong> the newsletter <strong>published</strong>?</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { english: "This house is cleaned every week.", spanish: "Esta casa es limpiada cada semana." },
      { english: "Breakfast is served from 7 to 10 am.", spanish: "El desayuno se sirve de 7 a 10 de la mañana." },
      { english: "The windows are being washed right now.", spanish: "Las ventanas están siendo lavadas ahora mismo." },
      { english: "Is your car repaired by a professional mechanic?", spanish: "¿Tu coche es reparado por un mecánico profesional?" }
    ]
  },
  uses: {
    description: "La voz pasiva en presente tiene usos específicos que la hacen preferible a la voz activa en ciertas situaciones:",
    useCases: [
      {
        title: "Cuando el agente es desconocido o irrelevante 🕵️",
        description: "Se usa cuando no sabemos o no es importante quién realiza la acción.",
        examples: [
          { english: "My bike was stolen yesterday.", spanish: "Mi bicicleta fue robada ayer." },
          { english: "These shirts are made in Bangladesh.", spanish: "Estas camisas están hechas en Bangladesh." },
          { english: "Mistakes are often made in this process.", spanish: "A menudo se cometen errores en este proceso." }
        ]
      },
      {
        title: "Para enfatizar el objeto o resultado 🎯",
        description: "Cuando el foco de atención está en el objeto que recibe la acción o en el resultado, no en quién realiza la acción.",
        examples: [
          { english: "The Mona Lisa is displayed in the Louvre Museum.", spanish: "La Mona Lisa se exhibe en el Museo del Louvre." },
          { english: "All the tickets are sold out for tonight's concert.", spanish: "Todas las entradas están agotadas para el concierto de esta noche." },
          { english: "Coffee is grown in Colombia.", spanish: "El café se cultiva en Colombia." }
        ]
      },
      {
        title: "En contextos científicos y académicos 🔬",
        description: "En textos científicos, académicos y técnicos, para mantener un tono objetivo e impersonal.",
        examples: [
          { english: "Water is composed of hydrogen and oxygen.", spanish: "El agua está compuesta de hidrógeno y oxígeno." },
          { english: "The data is collected through interviews.", spanish: "Los datos se recopilan a través de entrevistas." },
          { english: "The experiment is being conducted under strict conditions.", spanish: "El experimento está siendo realizado bajo condiciones estrictas." }
        ]
      },
      {
        title: "En anuncios, reglas e instrucciones 📋",
        description: "Para dar indicaciones, instrucciones o comunicar reglas de manera formal.",
        examples: [
          { english: "Smoking is not permitted in this area.", spanish: "No se permite fumar en esta área." },
          { english: "Passengers are requested to fasten their seatbelts.", spanish: "Se solicita a los pasajeros que se abrochen los cinturones de seguridad." },
          { english: "Credit cards are accepted at all our stores.", spanish: "Las tarjetas de crédito son aceptadas en todas nuestras tiendas." }
        ]
      },
      {
        title: "En noticias y reportajes 📰",
        description: "En los medios de comunicación, para enfocarse en los eventos y no en quienes los realizan.",
        examples: [
          { english: "The new law is being debated in parliament today.", spanish: "La nueva ley está siendo debatida hoy en el parlamento." },
          { english: "Three people are injured in the accident.", spanish: "Tres personas están heridas en el accidente." },
          { english: "The ceremony is broadcast live on national television.", spanish: "La ceremonia es transmitida en vivo por la televisión nacional." }
        ]
      }
    ]
  },
  examples: [
    { english: "The house is cleaned twice a week.", spanish: "La casa es limpiada dos veces por semana." },
    { english: "These cookies are made with chocolate chips.", spanish: "Estas galletas están hechas con chispas de chocolate." },
    { english: "The roads are being repaired at the moment.", spanish: "Las carreteras están siendo reparadas en este momento." },
    { english: "Is this book written by a famous author?", spanish: "¿Este libro está escrito por un autor famoso?" },
    { english: "The movie isn't shown in theaters anymore.", spanish: "La película ya no se proyecta en los cines." },
    { english: "Coffee is grown in many countries.", spanish: "El café se cultiva en muchos países." },
    { english: "Are the documents being signed now?", spanish: "¿Los documentos están siendo firmados ahora?" },
    { english: "English is spoken in many countries around the world.", spanish: "El inglés se habla en muchos países alrededor del mundo." }
  ],
  timeExpressions: [
    { word: "every day/week/month/year", description: "cada día/semana/mes/año (para Present Simple Passive)" },
    { word: "regularly", description: "regularmente (para Present Simple Passive)" },
    { word: "always", description: "siempre (para Present Simple Passive)" },
    { word: "never", description: "nunca (para Present Simple Passive)" },
    { word: "at the moment", description: "en este momento (para Present Continuous Passive)" },
    { word: "right now", description: "ahora mismo (para Present Continuous Passive)" },
    { word: "currently", description: "actualmente (para Present Continuous Passive)" },
    { word: "today", description: "hoy (para Present Continuous Passive)" }
  ],
  tips: [
    {
      title: "Cambios de Objeto a Sujeto",
      content: "Al pasar de voz activa a pasiva, el objeto directo de la oración activa se convierte en el sujeto de la oración pasiva, y el sujeto original puede convertirse en un complemento agente introducido por 'by' (o puede omitirse).",
      emoji: "🔄"
    },
    {
      title: "Uso con Verbos Transitivos",
      content: "La voz pasiva solo funciona con verbos transitivos (verbos que pueden llevar un objeto directo). Verbos como 'happen', 'sleep', 'come', etc., que son intransitivos, no pueden usarse en voz pasiva.",
      emoji: "⚠️"
    },
    {
      title: "El Complemento Agente no es Obligatorio",
      content: "La parte 'by + agente' es opcional y a menudo se omite cuando el agente es desconocido, obvio por el contexto, o irrelevante. De hecho, una de las razones principales para usar la pasiva es precisamente cuando no queremos mencionar quién realiza la acción.",
      emoji: "👤"
    },
    {
      title: "Pasiva en Español vs. Inglés",
      content: "En español, además de la pasiva con 'ser' (similar a la inglesa), es muy común usar la pasiva refleja con 'se' ('se vende', 'se habla', etc.). En inglés, siempre se usa la estructura con el verbo 'to be' + participio pasado.",
      emoji: "🌐"
    }
  ],
  commonMistakes: [
    {
      incorrect: "The house is clean every day.",
      correct: "The house is cleaned every day.",
      explanation: "En la voz pasiva, se debe usar el participio pasado (cleaned), no el adjetivo (clean)."
    },
    {
      incorrect: "This book is writing by a famous author.",
      correct: "This book is written by a famous author.",
      explanation: "En Present Simple Passive, se usa el participio pasado (written), no la forma -ing (writing)."
    },
    {
      incorrect: "The documents are preparing at the moment.",
      correct: "The documents are being prepared at the moment.",
      explanation: "En Present Continuous Passive, la estructura es 'are being + participio pasado', no solo 'are + -ing'."
    },
    {
      incorrect: "My car repaired every year.",
      correct: "My car is repaired every year.",
      explanation: "Falta el verbo auxiliar 'is' para formar la voz pasiva."
    },
    {
      incorrect: "Football is playing all over the world.",
      correct: "Football is played all over the world.",
      explanation: "En Present Simple Passive, se usa el participio pasado (played), no la forma -ing (playing)."
    },
    {
      incorrect: "The house is being clean right now.",
      correct: "The house is being cleaned right now.",
      explanation: "En Present Continuous Passive, se debe usar el participio pasado (cleaned), no el adjetivo (clean)."
    }
  ]
};
