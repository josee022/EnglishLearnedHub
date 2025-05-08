import React, { useState, useEffect } from 'react';

interface DictionarySearchProps {
  onSearch: (term: string) => void;
  searchTerm?: string;
}

const DictionarySearch: React.FC<DictionarySearchProps> = ({ onSearch, searchTerm: externalSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sincronizar con el valor externo cuando cambia
  useEffect(() => {
    if (externalSearchTerm !== undefined) {
      setSearchTerm(externalSearchTerm);
    }
  }, [externalSearchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar palabra en inglés..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default DictionarySearch;
