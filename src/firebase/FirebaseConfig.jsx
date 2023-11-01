import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyCuTSWSc-MNp8QUbVXY_bRwohw9U6beRiM",
  authDomain: "react-e-shop-5e34a.firebaseapp.com",
  projectId: "react-e-shop-5e34a",
  storageBucket: "react-e-shop-5e34a.appspot.com",
  messagingSenderId: "228883868532",
  appId: "1:228883868532:web:2084fb08e2f0025f4c1a21"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const fireDB= getFirestore(app)
export const auth=getAuth(app)
