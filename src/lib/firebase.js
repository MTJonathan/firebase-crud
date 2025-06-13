import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxLuHtz3geEcORs-nvr6FhKBq7pQ-ZqEc",
  authDomain: "bodega-jhoan.firebaseapp.com",
  projectId: "bodega-jhoan",
  storageBucket: "bodega-jhoan.firebasestorage.app",
  messagingSenderId: "910865618097",
  appId: "1:910865618097:web:0324d584c668cec12dbe90",
  measurementId: "G-SXV469QYY6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);