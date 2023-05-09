import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5_wVtFIGok7N2VtturVr-0o_vZhnk39U",
  authDomain: "portafolio-b8a3f.firebaseapp.com",
  projectId: "portafolio-b8a3f",
  storageBucket: "portafolio-b8a3f.appspot.com",
  messagingSenderId: "844081881470",
  appId: "1:844081881470:web:bf7d89af6519f2a7efd32f"
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

