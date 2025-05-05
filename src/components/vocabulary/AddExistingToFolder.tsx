import { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { getVocabularyItems, updateVocabularyItem } from '../../firebase/firestore';
import { VocabularyItem } from '../../types';
import { XMarkIcon, ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';

interface AddExistingToFolderProps {
  folderId: string;
  onClose: () => void;
  onAddComplete: () => void;
}

export default function AddExistingToFolder({ folderId, onClose, onAddComplete }: AddExistingToFolderProps) {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [availableItems, setAvailableItems] = useState<VocabularyItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  
  // Cargar elementos que NO están en la carpeta actual
  useEffect(() => {
    const fetchAvailableItems = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const items = await getVocabularyItems(user.uid);
        // Filtrar para mostrar solo los que no están en esta carpeta
        const filteredItems = items.filter(item => item.folderId !== folderId);
        setAvailableItems(filteredItems);
      } catch (err) {
        console.error('Error al cargar elementos disponibles:', err);
        setError('No se pudieron cargar los elementos disponibles. Inténtalo nuevamente.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchAvailableItems();
  }, [user, folderId]);
  
  // Filtrar elementos según término de búsqueda
  const filteredItems = availableItems.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.notes && item.notes.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Manejar la selección de un elemento
  const handleToggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };
  
  // Mover elementos seleccionados a la carpeta actual
  const handleAddToFolder = async () => {
    if (!user || selectedItems.length === 0) return;
    
    try {
      setIsAdding(true);
      setError(null);
      
      // Actualizar cada elemento seleccionado
      const promises = selectedItems.map(itemId => {
        const item = availableItems.find(item => item.id === itemId);
        if (!item) return Promise.resolve();
        
        return updateVocabularyItem(user.uid, itemId, {
          folderId: folderId
        });
      });
      
      await Promise.all(promises);
      
      // Notificar éxito
      onAddComplete();
      onClose();
    } catch (err) {
      console.error('Error al añadir elementos a la carpeta:', err);
      setError('Ocurrió un error al añadir los elementos seleccionados a la carpeta.');
    } finally {
      setIsAdding(false);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col">
        {/* Encabezado */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Añadir palabras existentes a esta carpeta
          </h3>
          <button 
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            onClick={onClose}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        
        {/* Contenido */}
        <div className="p-4 overflow-hidden flex-grow flex flex-col">
          {/* Buscador */}
          <div className="relative mb-4 flex-shrink-0">
            <input
              type="text"
              placeholder="Buscar palabra, traducción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Mensaje de error si existe */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {/* Lista de palabras */}
          <div className="overflow-y-auto flex-grow">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                {searchTerm 
                  ? 'No se encontraron palabras que coincidan con tu búsqueda.'
                  : 'No hay palabras disponibles para añadir a esta carpeta.'}
              </div>
            ) : (
              <ul className="space-y-2">
                {filteredItems.map(item => (
                  <li 
                    key={item.id}
                    className={`
                      border rounded-lg p-3 cursor-pointer transition-colors
                      ${selectedItems.includes(item.id) 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
                    `}
                    onClick={() => handleToggleItem(item.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-800 dark:text-slate-200">{item.word}</div>
                        <div className="text-slate-500 dark:text-slate-400">{item.translation}</div>
                      </div>
                      <div className="flex-shrink-0">
                        {selectedItems.includes(item.id) ? (
                          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {/* Pie */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {selectedItems.length} {selectedItems.length === 1 ? 'palabra seleccionada' : 'palabras seleccionadas'}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              Cancelar
            </button>
            <button
              onClick={handleAddToFolder}
              disabled={selectedItems.length === 0 || isAdding}
              className={`
                px-4 py-2 rounded-lg text-white flex items-center space-x-1
                ${selectedItems.length === 0 || isAdding
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'}
              `}
            >
              {isAdding ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  <span>Añadiendo...</span>
                </>
              ) : (
                <>
                  <PlusIcon className="h-4 w-4" />
                  <span>Añadir a carpeta</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
