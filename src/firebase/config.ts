// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6xRWYFwEFISy0EB1w1QpL3ZRoHZqVAQ",
  authDomain: "english-learned-hub.firebaseapp.com",
  projectId: "english-learned-hub",
  storageBucket: "english-learned-hub.firebasestorage.app",
  messagingSenderId: "747286577699",
  appId: "1:747286577699:web:ac6d4984d6418658232796",
  measurementId: "G-0WTBX1DGFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };