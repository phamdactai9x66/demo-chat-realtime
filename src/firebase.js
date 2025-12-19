// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtBt71XKZzfWtjxYeS7ZoMFZboGEWmlzo",
  authDomain: "chatai-ac396.firebaseapp.com",
  databaseURL:
    "https://chatai-ac396-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatai-ac396",
  storageBucket: "chatai-ac396.firebasestorage.app",
  messagingSenderId: "999392342850",
  appId: "1:999392342850:web:2ce0f9849aea5a99890edb",
  measurementId: "G-4X3HGZR808",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getDatabase(app);
