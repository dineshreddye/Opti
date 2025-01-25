// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: "AIzaSyBOrIzxfRG6PVxabspmQrcHOwAIeH6iqoQ",
  // authDomain: "test-project-8de79.firebaseapp.com",
  // projectId: "test-project-8de79",
  // storageBucket: "test-project-8de79.firebasestorage.app",
  // messagingSenderId: "1089994553523",
  // appId: "1:1089994553523:web:307819a45913e991a258c6",

  apiKey: "AIzaSyCIusebwW6ZLXhj1IbHdRDkpQzFgen8q8E",
  authDomain: "optimizer-9ac06.firebaseapp.com",
  projectId: "optimizer-9ac06",
  storageBucket: "optimizer-9ac06.firebasestorage.app",
  messagingSenderId: "380106057989",
  appId: "1:380106057989:web:29b253695d99e59d87ef6c",
  databaseURL: "https://optimizer-9ac06-default-rtdb.firebaseio.com",
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase);
export const database = getDatabase(firebase);

export default firebase;
