import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Páginas públicas
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

// Páginas protegidas
import { Dashboard } from './pages/Dashboard';
import Vocabulary from './pages/Vocabulary';
import Flashcards from './pages/Flashcards';
import DictionaryPage from './pages/DictionaryPage';
import Grammar from './pages/Grammar';
import Games from './pages/Games';
import HangmanPage from './pages/HangmanPage';
import MemoryGamePage from './pages/MemoryGamePage';
import WordSearchPage from './pages/WordSearchPage';
import ConnectionsGamePage from './pages/ConnectionsGamePage';
import WordOrderingPage from './pages/WordOrderingPage';
import QuizPage from './pages/QuizPage';

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
          
          {/* Rutas de vocabulario */}
          <Route path="/vocabulary" element={<ProtectedRoute><Vocabulary /></ProtectedRoute>} />
          <Route path="/vocabulary/:action" element={<ProtectedRoute><Vocabulary /></ProtectedRoute>} />
          <Route path="/vocabulary/:action/:id" element={<ProtectedRoute><Vocabulary /></ProtectedRoute>} />
          
          {/* Rutas de flashcards */}
          <Route path="/flashcards" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
          <Route path="/flashcards/:action" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
          
          {/* Ruta de diccionario */}
          <Route path="/dictionary" element={<ProtectedRoute><DictionaryPage /></ProtectedRoute>} />
          
          {/* Ruta de gramática */}
          <Route path="/grammar" element={<ProtectedRoute><Grammar /></ProtectedRoute>} />
          
          {/* Rutas de juegos */}
          <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
          <Route path="/games/hangman" element={<ProtectedRoute><HangmanPage /></ProtectedRoute>} />
          <Route path="/games/memory" element={<ProtectedRoute><MemoryGamePage /></ProtectedRoute>} />
          <Route path="/games/wordsearch" element={<ProtectedRoute><WordSearchPage /></ProtectedRoute>} />
          <Route path="/games/connections" element={<ProtectedRoute><ConnectionsGamePage /></ProtectedRoute>} />
          <Route path="/games/wordordering" element={<ProtectedRoute><WordOrderingPage /></ProtectedRoute>} />
          <Route path="/games/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          
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
