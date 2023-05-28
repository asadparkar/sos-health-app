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
// const firebaseConfig = {
//   apiKey: "AIzaSyCF66H7Njkx_8cW3WXvZ_8_9hVNzqsF4sE",
//   authDomain: "fourthfirebase-eb046.firebaseapp.com",
//   projectId: "fourthfirebase-eb046",
//   storageBucket: "fourthfirebase-eb046.appspot.com",
//   messagingSenderId: "108379634149",
//   appId: "1:108379634149:web:b919e46c3b64cebf8d170c",
//   measurementId: "G-TWWE0H0436"
// };
//fifth db 
// const firebaseConfig = {
//   apiKey: "AIzaSyA7VQSiA10fyejCGksn3IQjuUqUC9XlXJU",
//   authDomain: "fifth-4b621.firebaseapp.com",
//   projectId: "fifth-4b621",
//   storageBucket: "fifth-4b621.appspot.com",
//   messagingSenderId: "1021343297610",
//   appId: "1:1021343297610:web:472f3609a8154ad733f6b3",
//   measurementId: "G-3XMZPDJGLK"
// };
// //sixth db
// const firebaseConfig = {
//   apiKey: "AIzaSyDFUg1vP4QU0uilFAFm_K8SLIsDxAfhW6U",
//   authDomain: "sixth-86ece.firebaseapp.com",
//   projectId: "sixth-86ece",
//   storageBucket: "sixth-86ece.appspot.com",
//   messagingSenderId: "413262547628",
//   appId: "1:413262547628:web:a764419d8d10ec3154ad09",
//   measurementId: "G-EJMSBC167T"
// };
//extra db
// const firebaseConfig = {
//   apiKey: "AIzaSyBvRnSEsLOywvwtZ1k0KaQmW_7IbybVtZ4",
//   authDomain: "extra-1faee.firebaseapp.com",
//   projectId: "extra-1faee",
//   storageBucket: "extra-1faee.appspot.com",
//   messagingSenderId: "698614088017",
//   appId: "1:698614088017:web:e9eeb5d14e8ec1d1825370",
//   measurementId: "G-8F1WE6ELWC"
// };
//extra2 db
// const firebaseConfig = {
//   apiKey: "AIzaSyCGFe7klub6WZLH2b9EL8sBQBR2rwXflUw",
//   authDomain: "extra2-215c9.firebaseapp.com",
//   projectId: "extra2-215c9",
//   storageBucket: "extra2-215c9.appspot.com",
//   messagingSenderId: "145106316012",
//   appId: "1:145106316012:web:c4bed312794da21b3b53c9",
//   measurementId: "G-JT98QX5CYE"
// };
//extra3 db
const firebaseConfig = {
  apiKey: "AIzaSyCmD7lN2RWYasUDBKkvg5k6YFMfOFUsBmo",
  authDomain: "extra3-16245.firebaseapp.com",
  projectId: "extra3-16245",
  storageBucket: "extra3-16245.appspot.com",
  messagingSenderId: "168448291710",
  appId: "1:168448291710:web:8860c98c16602d3fe0392f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

//setting up db
export const db = getFirestore(app);
