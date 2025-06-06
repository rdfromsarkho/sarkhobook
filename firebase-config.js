// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJJPYVzcbMIXpytP_pTlKv4lweqJWTE1Q",
  authDomain: "sarkhobook.firebaseapp.com",
  projectId: "sarkhobook",
  storageBucket: "sarkhobook.appspot.com",
  messagingSenderId: "807208608521",
  appId: "1:807208608521:web:af7ea73ff4b79fd44d29d8",
  measurementId: "G-98ES25N8D5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
