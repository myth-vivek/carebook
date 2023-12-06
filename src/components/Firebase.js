// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);