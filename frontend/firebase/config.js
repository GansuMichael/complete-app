import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBD8cm9I0ubVb4eGWLhJz3JoGbtfFLZrk",
  authDomain: "complete-app-8a185.firebaseapp.com",
  projectId: "complete-app-8a185",
  storageBucket: "complete-app-8a185.firebasestorage.app",
  messagingSenderId: "443218896362",
  appId: "1:443218896362:web:e76d0f7d6bcf0a00e57e93"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);