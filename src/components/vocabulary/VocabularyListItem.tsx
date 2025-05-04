import { VocabularyItem } from '../../types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

interface VocabularyListItemProps {
  item: VocabularyItem;
  isExpanded: boolean;
  onToggleDetails: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export default function VocabularyListItem({ item, isExpanded, onToggleDetails, onDelete, onEdit }: VocabularyListItemProps) {

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Nunca';
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getProgressColor = (level: number) => {
    if (level <= 1) return 'bg-red-500 dark:bg-red-600';
    if (level <= 3) return 'bg-amber-500 dark:bg-amber-600';
    return 'bg-emerald-500 dark:bg-emerald-600';
  };

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white dark:bg-slate-800 hover:translate-y-[-2px]">
      <div 
        className="p-4 cursor-pointer"
        onClick={onToggleDetails}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">{item.word}</h3>
            <p className="text-slate-700 dark:text-slate-300">{item.translation}</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Editar"
            >
              <PencilSquareIcon className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1.5 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
              aria-label="Eliminar"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center">
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${getProgressColor(item.proficiencyLevel)}`} 
              style={{ width: `${(item.proficiencyLevel / 5) * 100}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            {item.proficiencyLevel}/5
          </span>
        </div>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            {item.examples && item.examples.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ejemplos:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {item.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.notes && (
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notas:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.notes}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div>
                <span className="font-medium">Creado:</span> {formatDate(item.createdAt)}
              </div>
              <div>
                <span className="font-medium">Última revisión:</span> {formatDate(item.lastReviewed)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}