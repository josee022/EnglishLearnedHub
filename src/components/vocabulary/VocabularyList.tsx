import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getVocabularyItems, deleteVocabularyItem, getFolderById } from '../../firebase';
import { useAuthContext } from '../../context/AuthContext';
import { VocabularyItem } from '../../types';
import VocabularyListItem from './VocabularyListItem';
import AddExistingToFolder from './AddExistingToFolder';
import { PlusIcon, FolderIcon, ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';

export default function VocabularyList() {
  const [vocabularyItems, setVocabularyItems] = useState<VocabularyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const folderId = searchParams.get('folder');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(folderId);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [folderName, setFolderName] = useState<string>('Todo el vocabulario');
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const [showAddExistingModal, setShowAddExistingModal] = useState(false);
  
  const handleToggleDetails = (itemId: string) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };
  
  const handleAddExistingComplete = () => {
    // Recargar la lista después de añadir palabras a la carpeta
    if (user) {
      fetchVocabulary();
    }
  };
  
  const fetchVocabulary = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const items = await getVocabularyItems(user.uid);
        
        // Filtrar por carpeta si hay una seleccionada
        if (selectedFolder) {
          setVocabularyItems(items.filter(item => item.folderId === selectedFolder));
          
          // Obtener el nombre de la carpeta seleccionada
          const folder = await getFolderById(user.uid, selectedFolder);
          if (folder) {
            setFolderName(folder.name);
          }
        } else {
          setVocabularyItems(items);
          setFolderName('Todo el vocabulario');
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching vocabulary:', err);
        setError('Error al cargar el vocabulario. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

  // Cargar vocabulario al iniciar o cuando cambia la carpeta seleccionada
  useEffect(() => {
    fetchVocabulary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, selectedFolder]);
  
  // Actualizar la selección de carpeta cuando cambia la URL
  useEffect(() => {
    setSelectedFolder(folderId);
  }, [folderId]);

  const handleDelete = async (itemId: string) => {
    if (!user) return;
    
    if (window.confirm('¿Estás seguro de que quieres eliminar esta palabra?')) {
      try {
        await deleteVocabularyItem(user.uid, itemId);
        setVocabularyItems(prev => prev.filter(item => item.id !== itemId));
      } catch (err) {
        console.error('Error deleting vocabulary item:', err);
        setError('Error al eliminar la palabra. Por favor, intenta de nuevo.');
      }
    }
  };

  const handleEdit = (itemId: string) => {
    navigate(`/vocabulary/edit/${itemId}`);
  };

  const navigateToAddVocabulary = () => {
    navigate('/vocabulary/add');
  };

  const navigateToFolders = () => {
    navigate('/vocabulary/folders');
  };

  // Filtrar por búsqueda y carpeta
  const filteredItems = vocabularyItems.filter(item => {
    const matchesSearch = 
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFolder = selectedFolder === null || item.folderId === selectedFolder;
    
    return matchesSearch && matchesFolder;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando vocabulario...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Mi Vocabulario</h1>
          <div className="flex items-center justify-between mt-2">
            <p className="text-slate-600 dark:text-slate-300 font-medium text-lg">
              {folderName}
            </p>
            
            {/* Mostrar botón de añadir existentes solo cuando se está en una carpeta */}
            {selectedFolder && (
              <button
                onClick={() => setShowAddExistingModal(true)}
                className="inline-flex items-center px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors text-sm gap-1 ml-4"
              >
                <ArrowDownOnSquareIcon className="h-4 w-4" />
                <span>Añadir existentes</span>
              </button>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          {selectedFolder && (
            <button
              onClick={() => navigate('/vocabulary')}
              className="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100 rounded-md transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Todo mi vocabulario
            </button>
          )}
          <button
            onClick={navigateToFolders}
            className="inline-flex items-center px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:text-indigo-100 rounded-md transition-colors shadow-sm"
          >
            <FolderIcon className="w-5 h-5 mr-2" />
            Carpetas
          </button>
          <button
            onClick={navigateToAddVocabulary}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-sm"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Añadir
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className="w-5 h-5 text-slate-400 dark:text-slate-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Buscar palabra, traducción o notas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md">
          {error}
        </div>
      )}

      {filteredItems.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 mb-8 border border-slate-200 dark:border-slate-700">
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Filtrar por nivel de dominio:
          </div>
          <svg
            className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          {searchTerm || selectedFolder ? (
            <p className="mt-2 text-gray-500 dark:text-gray-400">No se encontraron palabras que coincidan con tu búsqueda.</p>
          ) : (
            <>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Aún no has añadido ninguna palabra a tu vocabulario.</p>
              <button
                onClick={navigateToAddVocabulary}
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                Añadir palabra
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map(item => (
            <VocabularyListItem
              key={item.id}
              item={item}
              isExpanded={expandedItemId === item.id}
              onToggleDetails={() => handleToggleDetails(item.id)}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => handleEdit(item.id)}
            />
          ))}
        </div>
      )}
      
      {/* Modal para añadir palabras existentes */}
      {showAddExistingModal && selectedFolder && (
        <AddExistingToFolder
          folderId={selectedFolder}
          onClose={() => setShowAddExistingModal(false)}
          onAddComplete={handleAddExistingComplete}
        />
      )}
    </div>
  );
}