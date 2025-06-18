import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useUserRecentActivity } from '../hooks/useUserRecentActivity';

// Componente de paginación para el feed de actividad
const PaginatedActivityFeed: React.FC<{ activities: any[]; pageSize: number }> = ({ activities, pageSize }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(activities.length / pageSize);
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentActivities = activities.slice(startIdx, endIdx);

  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {currentActivities.map((activity, idx) => (
          <li key={startIdx + idx} className="py-4 flex items-center gap-4">
            <span className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: activity.type === 'vocab_add' ? '#3b82f6' : activity.type === 'study_session' ? '#10b981' : '#a855f7' }}
            ></span>
            <span className="flex-1 text-gray-800 dark:text-gray-100">{activity.label}</span>
            <span className="text-xs text-gray-400">{activity.date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-2 mt-4">
        <button
          className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >Anterior</button>
        <span className="px-2 py-1 text-sm text-gray-500 dark:text-gray-400">Página {page} de {totalPages}</span>
        <button
          className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >Siguiente</button>
      </div>
    </>
  );
};

export const Dashboard: React.FC = () => {
  const { user } = useAuthContext();
  const { activities, isLoading, error, wordsLearned, streak } = useUserRecentActivity(10);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Hola, {user?.displayName || 'Usuario'}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Bienvenido de nuevo a tu espacio de aprendizaje de inglés.
          </p>
        </div>

        {/* Estado de carga y error */}
        {isLoading && (
          <div className="flex justify-center p-6">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          </div>
        )}
        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md mb-4">
            Error al cargar tus estadísticas. Intenta de nuevo.
          </div>
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">Palabras aprendidas</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {wordsLearned}
            </p>
            <div className="mt-4">
              <Link to="/vocabulary">
                <Button variant="outline" size="sm">Ver vocabulario</Button>
              </Link>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-1">Racha actual</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {streak} días
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${streak ? Math.min(streak * 10, 100) : 0}%` }}></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {streak ? Math.min(streak * 10, 100) : 0}% hacia tu próxima meta
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Acciones rápidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/vocabulary/add" 
              className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg p-4 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-medium">Añadir palabra</span>
              </div>
            </Link>
            
            <Link 
              to="/flashcards" 
              className="bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-lg p-4 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="font-medium">Practicar flashcards</span>
              </div>
            </Link>
            
            <Link 
              to="/games" 
              className="bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-lg p-4 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="font-medium">Aprende jugando</span>
              </div>
            </Link>
            
            <Link 
              to="/profile" 
              className="bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 rounded-lg p-4 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Mi perfil</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Actividad reciente</h2>
          {isLoading ? (
            <div className="flex justify-center p-6">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md mb-4">
              Error al cargar tu actividad reciente. Intenta de nuevo.
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No hay actividad reciente</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                ¡Comienza a aprender para ver tu actividad aquí!
              </p>
              <div className="mt-6">
                <Link to="/vocabulary/add">
                  <Button>Empezar ahora</Button>
                </Link>
              </div>
            </div>
          ) : (
            <PaginatedActivityFeed activities={activities} pageSize={5} />
          )}
        </div>
      </div>
    </Layout>
  );
};
