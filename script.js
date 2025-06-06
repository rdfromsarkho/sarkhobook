// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJJPYVzcbMIXpytP_pTlKv4lweqJWTE1Q",
  authDomain: "sarkhobook.firebaseapp.com",
  projectId: "sarkhobook",
  storageBucket: "sarkhobook.firebasestorage.app",
  messagingSenderId: "807208608521",
  appId: "1:807208608521:web:af7ea73ff4b79fd44d29d8",
  measurementId: "G-98ES25N8D5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Functions
window.signup = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => alert("Signup successful!"))
    .catch((err) => alert("Signup error: " + err.message));
};

window.login = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, pass)
    .then(() => alert("Login successful!"))
    .catch((err) => alert("Login error: " + err.message));
};

window.logout = () => {
  signOut(auth).then(() => alert("Logged out!"));
};

// Auth status check
onAuthStateChanged(auth, (user) => {
  const status = document.getElementById("status");
  if (user) {
    status.innerText = `Logged in as: ${user.email}`;
  } else {
    status.innerText = "Not logged in.";
  }
});
