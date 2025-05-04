import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addVocabularyItem, updateVocabularyItem, getVocabularyItem, getFolders } from '../../firebase/firestore';
import { useAuthContext } from '../../context/AuthContext';
import { VocabularyItem, Folder } from '../../types';
import { PlusIcon, XMarkIcon, FolderIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface VocabularyFormProps {
  isEditing?: boolean;
}

const emptyVocabularyItem: Omit<VocabularyItem, 'id'> = {
  word: '',
  translation: '',
  examples: [''],
  notes: '',
  tags: [],
  proficiencyLevel: 0,
  createdAt: new Date(),
};

export default function VocabularyForm({ isEditing = false }: VocabularyFormProps) {
  const [formData, setFormData] = useState<Omit<VocabularyItem, 'id'>>(emptyVocabularyItem);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(isEditing);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState('');
  const [folders, setFolders] = useState<Folder[]>([]);
  
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchFolders = async () => {
      if (!user) return;

      try {
        const foldersList = await getFolders(user.uid);
        setFolders(foldersList);
        
        // Si estamos editando, verificar si la URL tiene un parámetro de carpeta
        if (!isEditing) {
          const urlParams = new URLSearchParams(window.location.search);
          const folderIdFromUrl = urlParams.get('folder');
          
          if (folderIdFromUrl) {
            setFormData(prev => ({
              ...prev,
              folderId: folderIdFromUrl
            }));
          }
        }
      } catch (err) {
        console.error('Error fetching folders:', err);
      }
    };

    fetchFolders();
  }, [user, isEditing]);

  useEffect(() => {
    const fetchVocabularyItem = async () => {
      if (!user || !id || !isEditing) return;

      try {
        setFetchLoading(true);
        const item = await getVocabularyItem(user.uid, id);
        
        if (item) {
          setFormData(item);
        } else {
          setError('No se encontró la palabra solicitada.');
          navigate('/vocabulary');
        }
      } catch (err) {
        console.error('Error fetching vocabulary item:', err);
        setError('Error al cargar la palabra. Por favor, intenta de nuevo.');
      } finally {
        setFetchLoading(false);
      }
    };

    fetchVocabularyItem();
  }, [user, id, isEditing, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExampleChange = (index: number, value: string) => {
    const updatedExamples = [...formData.examples];
    updatedExamples[index] = value;
    setFormData(prev => ({ ...prev, examples: updatedExamples }));
  };

  const addExample = () => {
    setFormData(prev => ({ ...prev, examples: [...prev.examples, ''] }));
  };

  const removeExample = (index: number) => {
    if (formData.examples.length > 1) {
      const updatedExamples = formData.examples.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, examples: updatedExamples }));
    }
  };

  const handleProficiencyChange = (level: number) => {
    setFormData(prev => ({ ...prev, proficiencyLevel: level }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({ 
        ...prev, 
        tags: [...prev.tags, tagInput.trim()] 
      }));
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({ 
      ...prev, 
      tags: prev.tags.filter(t => t !== tag) 
    }));
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;

    // Validaciones básicas
    if (!formData.word.trim()) {
      setError('La palabra es obligatoria.');
      return;
    }
    
    if (!formData.translation.trim()) {
      setError('La traducción es obligatoria.');
      return;
    }

    // Filtrar ejemplos vacíos
    const filteredExamples = formData.examples.filter(ex => ex.trim() !== '');
    const submissionData = {
      ...formData,
      examples: filteredExamples,
      lastReviewed: isEditing ? formData.lastReviewed : undefined
    };

    try {
      setLoading(true);
      setError(null);

      if (isEditing && id) {
        await updateVocabularyItem(user.uid, id, submissionData);
        setSuccess('Palabra actualizada correctamente.');
      } else {
        await addVocabularyItem(user.uid, submissionData);
        setSuccess('Palabra añadida correctamente.');
        setFormData(emptyVocabularyItem);
      }

      // Redirigir después de un breve retraso para mostrar el mensaje de éxito
      setTimeout(() => {
        navigate('/vocabulary');
      }, 1500);
    } catch (err) {
      console.error('Error saving vocabulary item:', err);
      setError('Error al guardar la palabra. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <button
        onClick={() => navigate('/vocabulary')}
        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Volver a Vocabulario
      </button>
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {isEditing ? 'Editar Palabra' : 'Añadir Nueva Palabra'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {isEditing 
            ? 'Actualiza los detalles de esta palabra en tu vocabulario.' 
            : 'Añade una nueva palabra a tu vocabulario personal.'}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-md">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Palabra */}
          <div>
            <label htmlFor="word" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Palabra*
            </label>
            <input
              type="text"
              id="word"
              name="word"
              value={formData.word}
              onChange={handleChange}
              placeholder="Ej. hello"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="folderId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Carpeta (opcional)
            </label>
            <select
              id="folderId"
              name="folderId"
              value={formData.folderId || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Sin carpeta</option>
              {folders.map(folder => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </div>

          {/* Traducción */}
          <div>
            <label htmlFor="translation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Traducción*
            </label>
            <input
              type="text"
              id="translation"
              name="translation"
              value={formData.translation}
              onChange={handleChange}
              placeholder="Ej. hola"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
        </div>

        {/* Ejemplos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Ejemplos de uso
          </label>
          {formData.examples.map((example, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={example}
                onChange={(e) => handleExampleChange(index, e.target.value)}
                placeholder={`Ejemplo ${index + 1}`}
                className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <button
                type="button"
                onClick={() => removeExample(index)}
                disabled={formData.examples.length <= 1}
                className={`ml-2 px-3 py-2 rounded-md ${
                  formData.examples.length <= 1
                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    : 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800'
                }`}
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExample}
            className="mt-2 inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <PlusIcon className="w-5 h-5 mr-1" />
            Añadir ejemplo
          </button>
        </div>

        {/* Notas */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Notas
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Añade notas adicionales sobre el uso, contexto, etc."
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Etiquetas */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Etiquetas
          </label>
          <div className="flex">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInputKeyDown}
              placeholder="Añade etiquetas y presiona Enter"
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="button"
              onClick={addTag}
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Añadir
            </button>
          </div>
          {formData.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 focus:outline-none"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Carpeta */}
        <div>
          <label htmlFor="folderId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Carpeta
          </label>
          <div className="relative">
            <FolderIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <select
              id="folderId"
              name="folderId"
              value={formData.folderId || ''}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white appearance-none"
            >
              <option value="">-- Sin carpeta --</option>
              {folders.map(folder => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Nivel de conocimiento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nivel de conocimiento
          </label>
          <div className="flex items-center space-x-2">
            {[0, 1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleProficiencyChange(level)}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  formData.proficiencyLevel >= level
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {level}
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              {formData.proficiencyLevel === 0 && 'No aprendido'}
              {formData.proficiencyLevel === 1 && 'Principiante'}
              {formData.proficiencyLevel === 2 && 'Básico'}
              {formData.proficiencyLevel === 3 && 'Intermedio'}
              {formData.proficiencyLevel === 4 && 'Avanzado'}
              {formData.proficiencyLevel === 5 && 'Dominado'}
            </span>
          </div>
        </div>

        <div className="flex justify-end pt-5 space-x-3">
          <button
            type="button"
            onClick={() => navigate('/vocabulary')}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              loading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Guardando...
              </>
            ) : isEditing ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
}
