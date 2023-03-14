// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJGrwCNsGWTSrSB7CVsCKLDFGy1IaexI",
  authDomain: "chatbot-6a624.firebaseapp.com",
  projectId: "chatbot-6a624",
  storageBucket: "chatbot-6a624.appspot.com",
  messagingSenderId: "341220102400",
  appId: "1:341220102400:web:392fc24c3eff637b68a3e5",
  measurementId: "G-SY07LDXCD2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export default firebase

