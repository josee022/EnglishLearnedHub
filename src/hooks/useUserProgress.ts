import { useQuery } from '@tanstack/react-query';
import { getUserProgress } from '../firebase/user-progress';
import { useAuthContext } from '../context/AuthContext';

export function useUserProgress() {
  const { user } = useAuthContext();

  return useQuery({
    queryKey: ['user-progress', user?.uid],
    queryFn: () => {
      if (!user?.uid) throw new Error('No user ID');
      return getUserProgress(user.uid);
    },
    enabled: !!user?.uid,
    staleTime: 1000 * 60, // 1 minuto
  });
}
