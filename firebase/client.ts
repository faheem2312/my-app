// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOGXEs10ZvAc7i5RNelii6-x9Or4YAxcc",
  authDomain: "quickprep-590c9.firebaseapp.com",
  projectId: "quickprep-590c9",
  storageBucket: "quickprep-590c9.firebasestorage.app",
  messagingSenderId: "527868486484",
  appId: "1:527868486484:web:2e7656ffcf813cf54a1ec1",
  measurementId: "G-8NTM9EVN8W"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);