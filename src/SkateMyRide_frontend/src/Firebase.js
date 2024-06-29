import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAielFCXO9LHCrLMc6BpUS_2tMgrqt9sec",
  authDomain: "stakemyride.firebaseapp.com",
  databaseURL: "https://stakemyride-default-rtdb.firebaseio.com",
  projectId: "stakemyride",
  storageBucket: "stakemyride.appspot.com",
  messagingSenderId: "479644267189",
  appId: "1:479644267189:web:c0a19b282cb60063f844fc",
  measurementId: "G-TDYS4EWSJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };  