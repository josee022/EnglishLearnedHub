import { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { 
  StudySession,
  Folder
} from '../../types';
import { 
  createStudySession, 
  getFolders,
  getVocabularyItemsDueForReview
} from '../../firebase/firestore';
import { 
  BookOpenIcon, 
  ClockIcon, 
  FolderIcon,
  LightBulbIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

interface StudySessionSetupProps {
  onStartSession: (session: StudySession) => void;
}

export default function StudySessionSetup({ onStartSession }: StudySessionSetupProps) {
  const { user } = useAuthContext();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [mode, setMode] = useState<'word-to-translation' | 'translation-to-word' | 'mixed'>('word-to-translation');
  const [itemLimit, setItemLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dueCounts, setDueCounts] = useState<Record<string, number>>({});
  
  // Cargar carpetas y contar elementos pendientes
  useEffect(() => {
    const loadFolders = async () => {
      if (!user) return;
      
      try {
        // Cargar carpetas
        const userFolders = await getFolders(user.uid);
        setFolders(userFolders);
        
        // Obtener recuentos de elementos pendientes
        const counts: Record<string, number> = {};
        
        // Contar elementos pendientes en total
        const allDueItems = await getVocabularyItemsDueForReview(user.uid);
        counts['all'] = allDueItems.length;
        
        // Contar elementos pendientes por carpeta
        for (const folder of userFolders) {
          const folderDueItems = await getVocabularyItemsDueForReview(user.uid, folder.id);
          counts[folder.id] = folderDueItems.length;
        }
        
        setDueCounts(counts);
      } catch (err) {
        console.error('Error loading folders:', err);
        setError('Error al cargar las carpetas. Por favor, intenta de nuevo.');
      }
    };
    
    loadFolders();
  }, [user]);

  // Inicio de una nueva sesión
  const handleCreateSession = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);
      
      // Garantizar que cuando se selecciona 'all', se envía undefined y no una cadena vacía
      const folderIdToUse = 
        !selectedFolder || selectedFolder === '' || selectedFolder === 'all' 
          ? undefined 
          : selectedFolder;
      
      console.log('Creando sesión con folderId:', folderIdToUse);
      
      const session = await createStudySession(
        user.uid,
        mode,
        folderIdToUse,
        itemLimit
      );
      
      // Si no hay palabras para estudiar, mostrar un error
      if (!session.itemsToReview.length) {
        throw new Error('No hay palabras disponibles para estudiar con los criterios seleccionados.');
      }
      
      onStartSession(session);
    } catch (err) {
      console.error('Error creating study session:', err);
      setError(`Error al crear la sesión de estudio: ${err instanceof Error ? err.message : 'Por favor, intenta de nuevo.'}`);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Configurar sesión de estudio
        </h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
            {error}
          </div>
        )}
        
        <div className="space-y-6">
          {/* Selección de carpeta */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Carpeta
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className={`
                  cursor-pointer p-4 rounded-lg border flex items-center space-x-3
                  transition-colors
                  ${selectedFolder === 'all' 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600' 
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                `}
                onClick={() => setSelectedFolder('all')}
              >
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <BookOpenIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Todo el vocabulario
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {dueCounts['all'] || 0} palabras pendientes
                  </div>
                </div>
              </div>
              
              {folders.map(folder => (
                <div
                  key={folder.id}
                  className={`
                    cursor-pointer p-4 rounded-lg border flex items-center space-x-3
                    transition-colors
                    ${selectedFolder === folder.id 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600' 
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                  `}
                  onClick={() => setSelectedFolder(folder.id)}
                >
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <FolderIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {folder.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {dueCounts[folder.id] || 0} palabras pendientes
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Modo de estudio */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Modo de estudio
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                className={`
                  cursor-pointer p-4 rounded-lg border flex flex-col items-center text-center
                  transition-colors
                  ${mode === 'word-to-translation' 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600' 
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                `}
                onClick={() => setMode('word-to-translation')}
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-2">
                  <ArrowPathIcon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Inglés → Español
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Ver la palabra en inglés, recordar la traducción
                </div>
              </div>
              
              <div
                className={`
                  cursor-pointer p-4 rounded-lg border flex flex-col items-center text-center
                  transition-colors
                  ${mode === 'translation-to-word' 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600' 
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                `}
                onClick={() => setMode('translation-to-word')}
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-2">
                  <ArrowPathIcon className="h-5 w-5 transform rotate-180" />
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Español → Inglés
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Ver la traducción en español, recordar la palabra en inglés
                </div>
              </div>
              
              <div
                className={`
                  cursor-pointer p-4 rounded-lg border flex flex-col items-center text-center
                  transition-colors
                  ${mode === 'mixed' 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600' 
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                `}
                onClick={() => setMode('mixed')}
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-2">
                  <LightBulbIcon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Modo mixto
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Combina ambas direcciones para un estudio más completo
                </div>
              </div>
            </div>
          </div>
          
          {/* Cantidad de tarjetas */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Cantidad de tarjetas
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={itemLimit}
                  onChange={(e) => setItemLimit(parseInt(e.target.value))}
                  className="w-full h-2 rounded-full accent-blue-500 bg-slate-200 dark:bg-slate-700"
                />
                <div className="flex justify-between mt-1 text-xs text-slate-500 dark:text-slate-400">
                  <span>5</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>
              <div className="w-16 text-center">
                <div className="flex items-center justify-center h-10 w-16 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md">
                  <span className="text-sm font-medium">{itemLimit}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tiempo estimado */}
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                <ClockIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Tiempo estimado
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Aproximadamente {Math.round(itemLimit * 0.5)} minutos
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={handleCreateSession}
            disabled={loading || !selectedFolder}
            className={`
              w-full py-3 px-4 rounded-lg font-medium text-white 
              ${loading 
                ? 'bg-blue-400 dark:bg-blue-600 cursor-not-allowed' 
                : !selectedFolder 
                  ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors'}
            `}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creando sesión...
              </span>
            ) : (
              'Iniciar sesión de estudio'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
