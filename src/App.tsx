import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Páginas públicas
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

// Páginas protegidas
import { Dashboard } from './pages/Dashboard';

// Estilos
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Rutas protegidas */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Rutas por implementar */}
          <Route 
            path="/vocabulary" 
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold mb-4">Vocabulario</h1>
                  <p>Esta sección está en desarrollo.</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/flashcards" 
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
                  <p>Esta sección está en desarrollo.</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/quizzes" 
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold mb-4">Quizzes</h1>
                  <p>Esta sección está en desarrollo.</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>
                  <p>Esta sección está en desarrollo.</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          {/* Redirección para rutas no encontradas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
