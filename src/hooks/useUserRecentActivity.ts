import { useQuery } from '@tanstack/react-query';
import { getVocabularyItems } from '../firebase/vocabulary';
import { getStudySessions } from '../firebase/study-sessions';
import { getQuizzes } from '../firebase/quizzes';
import { useAuthContext } from '../context/AuthContext';

export type ActivityType = 'vocab_add' | 'study_session' | 'quiz_played';

export interface UserActivity {
  type: ActivityType;
  label: string;
  date: Date;
  extra?: any;
}

function normalizeActivities({ vocab, sessions, quizzes }: {
  vocab: any[];
  sessions: any[];
  quizzes: any[];
}): UserActivity[] {
  const activities: UserActivity[] = [];

  // Vocabulario añadido
  vocab.forEach(item => {
    if (item.createdAt) {
      activities.push({
        type: 'vocab_add',
        label: `Añadiste la palabra: "${item.word}"`,
        date: item.createdAt,
        extra: item
      });
    }
  });

  // Sesiones de estudio
  sessions.forEach(session => {
    if (session.createdAt) {
      activities.push({
        type: 'study_session',
        label: 'Completaste una sesión de estudio',
        date: session.createdAt,
        extra: session
      });
    }
  });

  // Juegos/Quizzes
  quizzes.forEach(quiz => {
    if (quiz.createdAt) {
      activities.push({
        type: 'quiz_played',
        label: 'Jugaste un quiz o juego',
        date: quiz.createdAt,
        extra: quiz
      });
    }
  });

  // Ordenar por fecha descendente
  activities.sort((a, b) => b.date.getTime() - a.date.getTime());
  return activities;
}

function calculateStreak(activities: UserActivity[]): number {
  if (!activities.length) return 0;
  // Obtener días únicos de actividad
  const days = Array.from(new Set(
    activities.map(act => act.date.toISOString().slice(0, 10))
  )).sort((a, b) => b.localeCompare(a));
  if (!days.length) return 0;
  // Calcular streak desde el día más reciente hacia atrás
  let streak = 1;
  let prev = new Date(days[0]);
  for (let i = 1; i < days.length; i++) {
    const curr = new Date(days[i]);
    const diff = (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak++;
      prev = curr;
    } else {
      break;
    }
  }
  // Si no hubo actividad hoy, streak = 0
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  if (days[0] !== todayStr) return 0;
  return streak;
}

export function useUserRecentActivity(limit: number = 10) {
  const { user } = useAuthContext();
  const userId = user?.uid;

  const vocabQuery = useQuery({
    queryKey: ['vocab', userId],
    queryFn: () => userId ? getVocabularyItems(userId) : [],
    enabled: !!userId,
    staleTime: 1000 * 60
  });
  const sessionsQuery = useQuery({
    queryKey: ['studySessions', userId],
    queryFn: () => userId ? getStudySessions(userId, limit) : [],
    enabled: !!userId,
    staleTime: 1000 * 60
  });
  const quizzesQuery = useQuery({
    queryKey: ['quizzes', userId],
    queryFn: () => userId ? getQuizzes(userId) : [],
    enabled: !!userId,
    staleTime: 1000 * 60
  });

  const isLoading = vocabQuery.isLoading || sessionsQuery.isLoading || quizzesQuery.isLoading;
  const error = vocabQuery.error || sessionsQuery.error || quizzesQuery.error;

  let activities: UserActivity[] = [];
  let streak = 0;
  let wordsLearned = 0;

  if (
    vocabQuery.data &&
    sessionsQuery.data &&
    quizzesQuery.data
  ) {
    activities = normalizeActivities({
      vocab: vocabQuery.data,
      sessions: sessionsQuery.data,
      quizzes: quizzesQuery.data
    });
    if (activities.length > limit) activities = activities.slice(0, limit);
    streak = calculateStreak(activities);
    wordsLearned = vocabQuery.data.filter((item: any) => item.proficiencyLevel === 5).length;
  }

  return {
    isLoading,
    error,
    activities,
    streak,
    wordsLearned
  };
}
