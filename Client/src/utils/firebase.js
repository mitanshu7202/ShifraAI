import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-4cd6c.firebaseapp.com",
  projectId: "fir-4cd6c",
  storageBucket: "fir-4cd6c.firebasestorage.app",
  messagingSenderId: "802279579054",
  appId: "1:802279579054:web:0c4ac6843220c432313c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

