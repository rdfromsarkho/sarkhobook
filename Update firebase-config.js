import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

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
const storage = getStorage(app);

export { auth, storage };
