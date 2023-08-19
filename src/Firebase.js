// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJZbPBP9h5WnOEBExXkQKNiNxQWFuX2Wo",
    authDomain: "chatcha-e92ae.firebaseapp.com",
    projectId: "chatcha-e92ae",
    storageBucket: "chatcha-e92ae.appspot.com",
    messagingSenderId: "22012587467",
    appId: "1:22012587467:web:e4c6a9a177c29061a15a4e",
    measurementId: "G-B57RF9R7HR"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();