// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth} from"firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_rWi5rz8P89y66nzvoreLPwKUd097dY",
  authDomain: "carpooling-48485.firebaseapp.com",
  projectId: "carpooling-48485",
  storageBucket: "carpooling-48485.appspot.com",
  messagingSenderId: "1901973616",
  appId: "1:1901973616:web:3c654be37b75ccefc164b5",
  measurementId: "G-SQTHRRR6FJ"
};

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentification = getAuth(app);
export const db = getFirestore(app)
