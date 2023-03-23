import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5AM7IQ-C3j8OJju5MYtwDOzRUeXTAzdY",
  authDomain: "github-auth-2c148.firebaseapp.com",
  projectId: "github-auth-2c148",
  storageBucket: "github-auth-2c148.appspot.com",
  messagingSenderId: "357642517309",
  appId: "1:357642517309:web:9909046cfeff1c00e4e354",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
