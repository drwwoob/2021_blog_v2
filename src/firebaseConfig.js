// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA70iYkRfCkQ2XclI2alDBjZIhpmODfIb8",
  authDomain: "blogv2-9e161.firebaseapp.com",
  projectId: "blogv2-9e161",
  storageBucket: "blogv2-9e161.appspot.com",
  messagingSenderId: "198947892067",
  appId: "1:198947892067:web:1887d2ef6daa2cd3aac156"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)