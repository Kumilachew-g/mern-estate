// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-2e6bc.firebaseapp.com',
  projectId: 'mern-estate-2e6bc',
  storageBucket: 'mern-estate-2e6bc.appspot.com',
  messagingSenderId: '712394177768',
  appId: '1:712394177768:web:70f22ddc9e2ae3878bdd5d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
