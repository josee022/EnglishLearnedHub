import { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  AuthError
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        // Usuario autenticado, obtener datos adicionales de Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (userDoc.exists()) {
            // Si el usuario ya existe en Firestore, actualizar estado
            const userData = userDoc.data() as Omit<User, 'uid' | 'email' | 'displayName' | 'photoURL'>;
            
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              ...userData
            });
          } else {
            // Si es la primera vez que inicia sesión, crear documento en Firestore
            const newUser: User = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              createdAt: new Date(),
            };
            
            await setDoc(doc(db, 'users', firebaseUser.uid), newUser);
            setUser(newUser);
          }
        } catch (err) {
          console.error('Error al obtener datos del usuario:', err);
          setError('Error al cargar datos del usuario');
        }
      } else {
        // Usuario no autenticado
        setUser(null);
      }
      setLoading(false);
    });

    // Limpiar listener al desmontar
    return () => unsubscribe();
  }, []);

  // Registro con email y contraseña
  const registerWithEmail = async (email: string, password: string, displayName: string) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Crear documento de usuario en Firestore
      const newUser: User = {
        uid: result.user.uid,
        email: result.user.email,
        displayName,
        photoURL: null,
        createdAt: new Date(),
        englishLevel: 'Principiante',
        learningGoals: ['General'],
      };
      
      await setDoc(doc(db, 'users', result.user.uid), newUser);
      return true;
    } catch (err) {
      const authError = err as AuthError;
      console.error('Error al registrar usuario:', authError);
      setError(authError.message || 'Error al registrar usuario');
      return false;
    }
  };

  // Inicio de sesión con email y contraseña
  const loginWithEmail = async (email: string, password: string) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      const authError = err as AuthError;
      console.error('Error al iniciar sesión:', authError);
      setError(authError.message || 'Error al iniciar sesión');
      return false;
    }
  };

  // No usamos autenticación con Google

  // Cerrar sesión
  const logout = async () => {
    try {
      await signOut(auth);
      return true;
    } catch (err) {
      const authError = err as AuthError;
      console.error('Error al cerrar sesión:', authError);
      setError(authError.message || 'Error al cerrar sesión');
      return false;
    }
  };

  // Actualizar datos del usuario
  const updateUserProfile = async (data: Partial<User>) => {
    if (!user) return false;
    
    try {
      await setDoc(doc(db, 'users', user.uid), { ...user, ...data }, { merge: true });
      setUser({ ...user, ...data });
      return true;
    } catch (err) {
      const authError = err as Error;
      console.error('Error al actualizar perfil:', authError);
      setError(authError.message || 'Error al actualizar perfil');
      return false;
    }
  };

  return {
    user,
    loading,
    error,
    registerWithEmail,
    loginWithEmail,
    logout,
    updateUserProfile
  };
}
