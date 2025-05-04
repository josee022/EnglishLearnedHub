import { useParams } from 'react-router-dom';
import VocabularyList from '../components/vocabulary/VocabularyList';
import VocabularyForm from '../components/vocabulary/VocabularyForm';
import FoldersList from '../components/vocabulary/FoldersList';

export default function Vocabulary() {
  const { action, id } = useParams();
  // No necesitamos extraer el parámetro 'folder' aquí
  // VocabularyList ya lo obtiene directamente de la URL
  
  // Renderizar la página según la acción
  if (action === 'add') {
    return <VocabularyForm />;
  } else if (action === 'edit' && id) {
    return <VocabularyForm isEditing />;
  } else if (action === 'folders') {
    return <FoldersList />;
  } else {
    // Si hay una carpeta seleccionada, pasamos el ID a VocabularyList a través de la URL
    // La componente ya obtiene el ID de la carpeta de la URL
    return <VocabularyList />;
  }
}
