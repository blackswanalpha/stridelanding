// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWT2ewEDwEs9_0sWBY88vQfRh5tg43Iro",
  authDomain: "strideapp-fe8eb.firebaseapp.com",
  projectId: "strideapp-fe8eb",
  storageBucket: "strideapp-fe8eb.firebasestorage.app",
  messagingSenderId: "689477390301",
  appId: "1:689477390301:web:904ea03e492ae7b3e43034",
  measurementId: "G-4R605XV6WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);