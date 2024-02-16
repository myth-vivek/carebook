
import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, Firestore, getDocs
} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNKJFST0Yy9yN0QhROcX24jBoUCOLspRI",
  authDomain: "carebook-2f9e8.firebaseapp.com",
  projectId: "carebook-2f9e8",
  storageBucket: "carebook-2f9e8.appspot.com",
  messagingSenderId: "5324745856",
  appId: "1:5324745856:web:9046f83bd8f1ad62ea8a65",
  measurementId: "G-VZXM95Z9GB"
};




// getDocs(colRef)
//     .then((snapshot) => {
//       console.log(snapshot.docs)
//     })
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();