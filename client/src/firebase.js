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
// const firebaseConfig = {
//   apiKey: "AIzaSyA4adD9l5YWFLOaZnsrbjW0QMiDJ-qebt0",
//   authDomain: "secondfirebase-6e758.firebaseapp.com",
//   projectId: "secondfirebase-6e758",
//   storageBucket: "secondfirebase-6e758.appspot.com",
//   messagingSenderId: "571837851477",
//   appId: "1:571837851477:web:0fe1720b22b2932506f1dc"
// };

//third db
// const firebaseConfig = {
//   apiKey: "AIzaSyBr9f875eiFqiGXIv8gpNJVLV1nNm6Jm0U",
//   authDomain: "thirdbase-8b28d.firebaseapp.com",
//   projectId: "thirdbase-8b28d",
//   storageBucket: "thirdbase-8b28d.appspot.com",
//   messagingSenderId: "703512896862",
//   appId: "1:703512896862:web:df0ac0ffdcb07d15b9dbcf",
//   measurementId: "G-2CV0DSXZCZ"
// };

//fourth db
const firebaseConfig = {
  apiKey: "AIzaSyCF66H7Njkx_8cW3WXvZ_8_9hVNzqsF4sE",
  authDomain: "fourthfirebase-eb046.firebaseapp.com",
  projectId: "fourthfirebase-eb046",
  storageBucket: "fourthfirebase-eb046.appspot.com",
  messagingSenderId: "108379634149",
  appId: "1:108379634149:web:b919e46c3b64cebf8d170c",
  measurementId: "G-TWWE0H0436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

//setting up db
export const db = getFirestore(app);