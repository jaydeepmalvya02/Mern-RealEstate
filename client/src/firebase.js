// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dbf76.firebaseapp.com",
  projectId: "mern-estate-dbf76",
  storageBucket: "mern-estate-dbf76.firebasestorage.app",
  messagingSenderId: "401999912835",
  appId: "1:401999912835:web:9be8284eff13e64c3260b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);