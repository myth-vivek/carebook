
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNKJFST0Yy9yN0QhROcX24jBoUCOLspRI",
  authDomain: "carebook-2f9e8.firebaseapp.com",
  projectId: "carebook-2f9e8",
  storageBucket: "carebook-2f9e8.appspot.com",
  messagingSenderId: "5324745856",
  appId: "1:5324745856:web:9046f83bd8f1ad62ea8a65",
  measurementId: "G-VZXM95Z9GB"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);