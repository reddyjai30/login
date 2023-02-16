import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANZ4LqaVAKZvK5MDIL94T0dcxwdSJCtNU",
  authDomain: "login-99006.firebaseapp.com",
  projectId: "login-99006",
  storageBucket: "login-99006.appspot.com",
  messagingSenderId: "376593133701",
  appId: "1:376593133701:web:8f9eb792f56af30a7c39ec",
  measurementId: "G-2B6XZJTQ8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
