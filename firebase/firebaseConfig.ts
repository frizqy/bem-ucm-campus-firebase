// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ4MLnm1uH2tl5BTYKyq0U9Bv3hb-BL_I",
  authDomain: "dummy-query-database-bem-ucm-1.firebaseapp.com",
  databaseURL: "https://dummy-query-database-bem-ucm-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dummy-query-database-bem-ucm-1",
  storageBucket: "dummy-query-database-bem-ucm-1.firebasestorage.app",
  messagingSenderId: "300656322140",
  appId: "1:300656322140:web:dae65489b6edc305d52899",
  measurementId: "G-9Y5MEBQPTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
