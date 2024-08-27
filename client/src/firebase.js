// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-d4d93.firebaseapp.com",
  projectId: "mern-estate-d4d93",
  storageBucket: "mern-estate-d4d93.appspot.com",
  messagingSenderId: "1039504389064",
  appId: "1:1039504389064:web:802f10ae7cf399f71e46fd",
  measurementId: "G-8G9E84M9J5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);