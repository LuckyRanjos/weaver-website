// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaNDzLsmQy4iZlPhUVu4jK3zI7TeRaEK4",
  authDomain: "weaver-missedcall.firebaseapp.com",
  projectId: "weaver-missedcall",
  storageBucket: "weaver-missedcall.firebasestorage.app",
  messagingSenderId: "742967662458",
  appId: "1:742967662458:web:0111474a1988adcac8a8c3",
  measurementId: "G-23MMBFR573"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// ✅ Export Auth and Firestore instances
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);