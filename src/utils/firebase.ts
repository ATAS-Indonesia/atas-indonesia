// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVe_qm04TnO7d1Ph8_ksx07iCdvLUUQZY",
  authDomain: "database-atas.firebaseapp.com",
  databaseURL:
    "https://database-atas-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "database-atas",
  storageBucket: "database-atas.appspot.com",
  messagingSenderId: "1087887347863",
  appId: "1:1087887347863:web:4f532be7286d782efa19d2",
  measurementId: "G-QNM7KL83Z6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
