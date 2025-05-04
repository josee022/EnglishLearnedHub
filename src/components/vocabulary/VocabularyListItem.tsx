import { useState } from 'react';
import { VocabularyItem } from '../../types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

interface VocabularyListItemProps {
  item: VocabularyItem;
  onDelete: () => void;
  onEdit: () => void;
}

export default function VocabularyListItem({ item, onDelete, onEdit }: VocabularyListItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Nunca';
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getProgressColor = (level: number) => {
    if (level <= 1) return 'bg-red-500';
    if (level <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.word}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.translation}</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="p-1.5 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Editar"
            >
              <PencilSquareIcon className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1.5 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
              aria-label="Eliminar"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${getProgressColor(item.proficiencyLevel)}`} 
              style={{ width: `${(item.proficiencyLevel / 5) * 100}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {item.proficiencyLevel}/5
          </span>
        </div>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {item.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
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
