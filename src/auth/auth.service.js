import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnU7xFqJSeWGG8jTYLlYywg1cZnT1NnnA",
  authDomain: "portafolio-final-2b4e9.firebaseapp.com",
  projectId: "portafolio-final-2b4e9",
  storageBucket: "portafolio-final-2b4e9.appspot.com",
  messagingSenderId: "525354877132",
  appId: "1:525354877132:web:813d6941026cf906ac4269",
  measurementId: "G-4PF188C9MM"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};

