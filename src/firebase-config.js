import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ05afZgHKopFnpgTje9E621YyQaJQPP0",
  authDomain: "personal-website-d0d87.firebaseapp.com",
  projectId: "personal-website-d0d87",
  storageBucket: "personal-website-d0d87.appspot.com",
  messagingSenderId: "351061083296",
  appId: "1:351061083296:web:89496193c1ed50a72d35c5"
};

const app = initializeApp(firebaseConfig);
export const data = getFirestore();