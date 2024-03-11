// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqwa3zzTYHX_OfbX_swxvlt0HUJ2gbgrc",
  authDomain: "fir-7e23d.firebaseapp.com",
  projectId: "fir-7e23d",
  storageBucket: "fir-7e23d.appspot.com",
  messagingSenderId: "351006843369",
  appId: "1:351006843369:web:58c790134d5cb992f9ab78",
  measurementId: "G-ZER8VGJD5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);