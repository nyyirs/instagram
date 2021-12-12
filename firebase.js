// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoR5BSGq1pTm2wxkvdpNUiZDGPq7fZKrs",
  authDomain: "instagram-81a1f.firebaseapp.com",
  projectId: "instagram-81a1f",
  storageBucket: "instagram-81a1f.appspot.com",
  messagingSenderId: "176839296693",
  appId: "1:176839296693:web:02438f59783f0e0f88a0fc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
