import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon,
  FireIcon,
  ArrowPathIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface StudySessionSummaryProps {
  results: {
    totalItems: number;
    correctItems: number;
    averageTime: number;
  };
  onStartNewSession: () => void;
}

export default function StudySessionSummary({ results, onStartNewSession }: StudySessionSummaryProps) {
  const navigate = useNavigate();
  
  // Calcular métricas
  const incorrectItems = results.totalItems - results.correctItems;
  const successRate = results.totalItems > 0 
    ? Math.round((results.correctItems / results.totalItems) * 100) 
    : 0;
  const formattedTime = (results.averageTime / 1000).toFixed(1);
  
  // Determinar el mensaje de resumen
  const getSummaryMessage = () => {
    if (successRate >= 90) return '¡Excelente! Estás dominando este vocabulario.';
    if (successRate >= 70) return '¡Muy bien! Continúa practicando.';
    if (successRate >= 50) return 'Buen esfuerzo. Sigue practicando para mejorar.';
    return 'Continúa practicando. ¡No te rindas!';
  };
  
  // Obtener color según el porcentaje de aciertos
  const getSuccessColor = () => {
    if (successRate >= 80) return 'text-emerald-500 dark:text-emerald-400';
    if (successRate >= 60) return 'text-blue-500 dark:text-blue-400';
    if (successRate >= 40) return 'text-amber-500 dark:text-amber-400';
    return 'text-red-500 dark:text-red-400';
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Sesión completada</h2>
          <p className="opacity-90">{getSummaryMessage()}</p>
        </div>
        
        {/* Resumen principal */}
        <div className="p-6">
          {/* Puntuación principal */}
          <div className="text-center mb-8">
            <div className={`text-5xl font-bold ${getSuccessColor()}`}>
              {successRate}%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Tasa de éxito
            </div>
          </div>
          
          {/* Métricas detalladas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 flex items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mr-3">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {results.correctItems}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Respuestas correctas
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 flex items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">
                <XCircleIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {incorrectItems}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Respuestas incorrectas
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 flex items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                <ClockIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {formattedTime}s
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Tiempo promedio por tarjeta
                </div>
              </div>
            </div>
          </div>
          
          {/* Sugerencias */}
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 mb-8">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
              <FireIcon className="h-5 w-5 text-amber-500 mr-2" />
              Sugerencias para mejorar
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 text-emerald-500 mr-2">•</span>
                Revisa las palabras que te resultaron más difíciles.
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 text-emerald-500 mr-2">•</span>
                Practica con sesiones regulares para mejorar tu retención.
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 text-emerald-500 mr-2">•</span>
                Intenta alternar entre los modos de estudio para un aprendizaje más completo.
              </li>
            </ul>
          </div>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onStartNewSession}
              className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              <ArrowPathIcon className="h-5 w-5 mr-2" />
              Nueva sesión
            </button>
            
            <button
              onClick={() => navigate('/vocabulary')}
              className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Añadir más palabras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
