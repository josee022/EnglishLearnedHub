import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import FlashcardDeck from '../components/flashcards/FlashcardDeck';
import StudySessionSetup from '../components/flashcards/StudySessionSetup';
import StudySessionSummary from '../components/flashcards/StudySessionSummary';
import { StudySession } from '../types';

type FlashcardsView = 'setup' | 'study' | 'summary';

export default function Flashcards() {
  const { action } = useParams();
  const navigate = useNavigate();
  // El usuario se utiliza en los componentes hijos, no directamente en este componente
  const [currentView, setCurrentView] = useState<FlashcardsView>(action === 'study' ? 'study' : 'setup');
  const [activeSession, setActiveSession] = useState<StudySession | null>(null);
  const [sessionResults, setSessionResults] = useState<{
    totalItems: number;
    correctItems: number;
    averageTime: number;
  } | null>(null);

  // Handler para cuando se inicia una nueva sesión de estudio
  const handleStartSession = (session: StudySession) => {
    setActiveSession(session);
    setCurrentView('study');
    navigate('/flashcards/study');
  };

  // Handler para cuando se completa una sesión de estudio
  const handleCompleteSession = (results: {
    totalItems: number;
    correctItems: number;
    averageTime: number;
  }) => {
    setSessionResults(results);
    setCurrentView('summary');
    navigate('/flashcards/summary');
  };

  // Handler para volver a la configuración
  const handleBackToSetup = () => {
    setActiveSession(null);
    setSessionResults(null);
    setCurrentView('setup');
    navigate('/flashcards');
  };

  // Renderizado condicional según la vista actual
  const renderContent = () => {
    switch (currentView) {
      case 'setup':
        return <StudySessionSetup onStartSession={handleStartSession} />;
      case 'study':
        return activeSession ? (
          <FlashcardDeck
            session={activeSession}
            onCompleteSession={handleCompleteSession}
          />
        ) : (
          <div className="text-center p-8">
            <p className="text-red-500 dark:text-red-400">
              Error: No hay una sesión activa. Por favor, configura una nueva sesión.
            </p>
            <button
              onClick={handleBackToSetup}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Volver a configuración
            </button>
          </div>
        );
      case 'summary':
        return sessionResults ? (
          <StudySessionSummary
            results={sessionResults}
            onStartNewSession={handleBackToSetup}
          />
        ) : (
          <div className="text-center p-8">
            <p className="text-red-500 dark:text-red-400">
              Error: No hay resultados disponibles. Por favor, configura una nueva sesión.
            </p>
            <button
              onClick={handleBackToSetup}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Volver a configuración
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Flashcards
        </h1>
        {renderContent()}
      </div>
    </Layout>
  );
}
