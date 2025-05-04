import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Layout } from '../components/layout/Layout';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const { loginWithEmail } = useAuthContext();
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);
    
    try {
      const success = await loginWithEmail(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setErrorMessage('Error al iniciar sesión. Comprueba tu email y contraseña.');
      }
    } catch (error) {
      setErrorMessage('Ocurrió un error al iniciar sesión. Inténtalo de nuevo.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // No usamos autenticación con Google

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h1>
          
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <Input
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              fullWidth
            />
            
            <Input
              label="Contraseña"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
              fullWidth
            />
            
            <Button
              type="submit"
              isLoading={loading}
              className="w-full"
            >
              Iniciar sesión
            </Button>
          </form>
          
          {/* Solo usamos inicio de sesión con email */}
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              ¿No tienes una cuenta?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
