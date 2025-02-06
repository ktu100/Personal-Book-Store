// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcRoBiQ0kE7Daj6TBhgaodXBnNRY0DtpM",
  authDomain: "mern-book-store-9ef63.firebaseapp.com",
  projectId: "mern-book-store-9ef63",
  storageBucket: "mern-book-store-9ef63.appspot.com",
  messagingSenderId: "312912431266",
  appId: "1:312912431266:web:e17563db73b52fa5aa2ffb",
  measurementId: "G-T94MJ8KQDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;