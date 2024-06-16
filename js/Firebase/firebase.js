import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQ6d0FX6v480_sBjax5XBffI6-BR5DzxI",
  authDomain: "casa-del-lago-a0f0e.firebaseapp.com",
  projectId: "casa-del-lago-a0f0e",
  storageBucket: "casa-del-lago-a0f0e.appspot.com",
  messagingSenderId: "887554796512",
  appId: "1:887554796512:web:35f918ea0c5fd789fed985",
  measurementId: "G-M04XKX7Z34"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtener el objeto de autenticación
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
};