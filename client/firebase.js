// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore" 

// const firebaseConfig = {
//   apiKey: "AIzaSyDkmvAxIHs_N7wa21rlAS3h9xA-ddkYU4Y",
//   authDomain: "fir-auth-df359.firebaseapp.com",
//   projectId: "fir-auth-df359",
//   storageBucket: "fir-auth-df359.appspot.com",
//   messagingSenderId: "1010646597012",
//   appId: "1:1010646597012:web:601064389722c8ed3e6381",
//   measurementId: "G-671D3KMN2D"
// };

// second db
const firebaseConfig = {
  apiKey: "AIzaSyA4adD9l5YWFLOaZnsrbjW0QMiDJ-qebt0",
  authDomain: "secondfirebase-6e758.firebaseapp.com",
  projectId: "secondfirebase-6e758",
  storageBucket: "secondfirebase-6e758.appspot.com",
  messagingSenderId: "571837851477",
  appId: "1:571837851477:web:0fe1720b22b2932506f1dc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

//setting up db
export const db = getFirestore(app);
