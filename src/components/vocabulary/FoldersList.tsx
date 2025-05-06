import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFolders, addFolder } from '../../firebase';
import { useAuthContext } from '../../context/AuthContext';
import { Folder } from '../../types';
import { FolderIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

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
      <button
        onClick={navigateToVocabulary}
        className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Volver a Vocabulario
      </button>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Mis Carpetas</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsAddingFolder(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-sm"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Nueva Carpeta
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md border border-red-200 dark:border-red-800">
          {error}
        </div>
      )}

      {isAddingFolder && (
        <div className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4">Nueva Carpeta</h2>
          <form onSubmit={handleAddFolder}>
            <div className="mb-4">
              <label htmlFor="folderName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Nombre*
              </label>
              <input
                type="text"
                id="folderName"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Ej. Verbos irregulares"
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="folderDescription" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Descripción
              </label>
              <textarea
                id="folderDescription"
                value={newFolderDescription}
                onChange={(e) => setNewFolderDescription(e.target.value)}
                placeholder="Descripción opcional de la carpeta"
                rows={3}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAddingFolder(false)}
                className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm"
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
        <div className="text-center py-16 border border-dashed border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 shadow-sm">
          <FolderIcon className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500" />
          <p className="mt-2 text-slate-600 dark:text-slate-400">No tienes carpetas aún.</p>
          <button
            onClick={() => setIsAddingFolder(true)}
            className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-sm"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Crear nueva carpeta
          </button>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {folders.map(folder => (
            <div 
              key={folder.id}
              className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-white dark:bg-slate-800 hover:translate-y-[-2px]"
              onClick={() => navigate(`/vocabulary?folder=${folder.id}`)}
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <FolderIcon className="w-6 h-6 text-blue-600 dark:text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">{folder.name}</h3>
                </div>
                {folder.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{folder.description}</p>
                )}
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 inline-block px-2 py-1 rounded">
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
