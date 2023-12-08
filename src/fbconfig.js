// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
 // you will need to generate this within Firebase yourself. 
  apiKey: "AIzaSyCyYr79N1VIGu7mn7uEkFcd4b1_9xSxYG8",
  authDomain: "fir-totorialfrenkie.firebaseapp.com",
  projectId: "fir-totorialfrenkie",
  storageBucket: "fir-totorialfrenkie.appspot.com",
  messagingSenderId: "363661984616",
  appId: "1:363661984616:web:fd948fe7de27ebb6b50cdd",
  measurementId: "G-4Q42D6D41R"
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
