import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFolders, addFolder } from '../../firebase/firestore';
import { useAuthContext } from '../../context/AuthContext';
import { Folder } from '../../types';
import { FolderIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function FoldersList() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [newFolderDescription, setNewFolderDescription] = useState('');
  
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFolders = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const fetchedFolders = await getFolders(user.uid);
        setFolders(fetchedFolders);
        setError(null);
      } catch (err) {
        console.error('Error fetching folders:', err);
        setError('Error al cargar las carpetas. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, [user]);

  const handleAddFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    if (!newFolderName.trim()) {
      setError('El nombre de la carpeta es obligatorio.');
      return;
    }
    
    try {
      const newFolder: Omit<Folder, 'id'> = {
        name: newFolderName.trim(),
        description: newFolderDescription.trim(),
        userId: user.uid,
        createdAt: new Date()
      };
      
      const folderId = await addFolder(user.uid, newFolder);
      
      // Añadir la nueva carpeta al estado
      setFolders(prev => [...prev, { ...newFolder, id: folderId }]);
      
      // Limpiar el formulario y ocultarlo
      setNewFolderName('');
      setNewFolderDescription('');
      setIsAddingFolder(false);
      setError(null);
    } catch (err) {
      console.error('Error adding folder:', err);
      setError('Error al crear la carpeta. Por favor, intenta de nuevo.');
    }
  };

  const navigateToVocabulary = () => {
    navigate('/vocabulary');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando carpetas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Mis Carpetas</h1>
        <div className="flex space-x-2">
          <button
            onClick={navigateToVocabulary}
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md transition-colors"
          >
            Volver a Vocabulario
          </button>
          <button
            onClick={() => setIsAddingFolder(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Nueva Carpeta
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md">
          {error}
        </div>
      )}

      {isAddingFolder && (
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Nueva Carpeta</h2>
          <form onSubmit={handleAddFolder}>
            <div className="mb-4">
              <label htmlFor="folderName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre*
              </label>
              <input
                type="text"
                id="folderName"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Ej. Verbos irregulares"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="folderDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Descripción
              </label>
              <textarea
                id="folderDescription"
                value={newFolderDescription}
                onChange={(e) => setNewFolderDescription(e.target.value)}
                placeholder="Descripción opcional de la carpeta"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAddingFolder(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}

      {folders.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-gray-300 dark:border-gray-700 rounded-md">
          <FolderIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
          <p className="mt-2 text-gray-500 dark:text-gray-400">No tienes carpetas aún.</p>
          <button
            onClick={() => setIsAddingFolder(true)}
            className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Crear nueva carpeta
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {folders.map(folder => (
            <div 
              key={folder.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/vocabulary?folder=${folder.id}`)}
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <FolderIcon className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{folder.name}</h3>
                </div>
                {folder.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{folder.description}</p>
                )}
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Creada el {new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }).format(folder.createdAt)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
