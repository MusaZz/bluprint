// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbXrZfjnSEWiAfntrP0kjh6OZUXpHexxg",
  authDomain: "msghyv-bluprint-1.firebaseapp.com",
  projectId: "msghyv-bluprint-1",
  storageBucket: "msghyv-bluprint-1.appspot.com",
  messagingSenderId: "834269973764",
  appId: "1:834269973764:web:3b2ce966edb1c0f8eed451",
  measurementId: "G-B00H1FWSKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
