import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  // Mostrar algún indicador de carga mientras verificamos la autenticación
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Si no hay usuario autenticado, redireccionar al login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si hay usuario autenticado, mostrar el contenido protegido
  return <>{children}</>;
};
