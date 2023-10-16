// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtDewLYP5aLmGuQhaUuNsKi8rXrxAm0f4",
  authDomain: "supreme-22d43.firebaseapp.com",
  projectId: "supreme-22d43",
  storageBucket: "supreme-22d43.appspot.com",
  messagingSenderId: "998665622610",
  appId: "1:998665622610:web:9b8c2e33b4d3141452fb8b",
  measurementId: "G-4PYMZK6YQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};




  // export {auth, provider, storage};
  // export default db;  