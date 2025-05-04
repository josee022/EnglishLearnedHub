import { useParams } from 'react-router-dom';
import VocabularyList from '../components/vocabulary/VocabularyList';
import VocabularyForm from '../components/vocabulary/VocabularyForm';
import FoldersList from '../components/vocabulary/FoldersList';
import { Layout } from '../components/layout/Layout';

export default function Vocabulary() {
  const { action, id } = useParams();
  // No necesitamos extraer el parámetro 'folder' aquí
  // VocabularyList ya lo obtiene directamente de la URL
  
  // Renderizar el contenido según la acción, dentro del Layout común
  return (
    <Layout>
      {action === 'add' ? (
        <VocabularyForm />
      ) : action === 'edit' && id ? (
        <VocabularyForm isEditing />
      ) : action === 'folders' ? (
        <FoldersList />
      ) : (
        <VocabularyList />
      )}
    </Layout>
  );
}
