import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDC64Rh_66ZCaWstkEhTtVPekvRr7tI19Q",
    authDomain: "db-firebase-340d4.firebaseapp.com",
    projectId: "db-firebase-340d4",
    storageBucket: "db-firebase-340d4.appspot.com",
    messagingSenderId: "1003570202828",
    appId: "1:1003570202828:web:4f7dfa44d0ab9bd1b75a69",
    measurementId: "G-R0QVBR9X8C"
  };

  const app = initializeApp(firebaseConfig);

  export const DB = getFirestore(app);