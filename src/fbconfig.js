// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
 // you will need to generate this within Firebase yourself. 
 // FirebaseTutorialRegister
 apiKey: "AIzaSyCMASpR_TkFTuEson_rj37ok13Sl24fjmQ",
 authDomain: "fir-tutorialregistration.firebaseapp.com",
 projectId: "fir-tutorialregistration",
 storageBucket: "fir-tutorialregistration.appspot.com",
 messagingSenderId: "988069318630",
 appId: "1:988069318630:web:a61b704c21585b82f9d027",
 measurementId: "G-T3MJYMEEDM"
};


let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

// const db = getFirestore(firebaseApp, {});
const db = initializeFirestore(firebaseApp,  
  {
      experimentalForceLongPolling : true
  });

export { db, firebaseApp };
