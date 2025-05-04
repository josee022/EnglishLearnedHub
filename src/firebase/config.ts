import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDV6xRWYFwEFISy0EB1w1QpL3ZRoHZqVAQ",
  authDomain: "english-learned-hub.firebaseapp.com",
  projectId: "english-learned-hub",
  storageBucket: "english-learned-hub.firebasestorage.app",
  messagingSenderId: "747286577699",
  appId: "1:747286577699:web:ac6d4984d6418658232796",
  measurementId: "G-0WTBX1DGFQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
export const auth = getAuth(app);
export const db = getFirestore(app);

// Inicializar analytics solo en entorno de navegador
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

export default app;
