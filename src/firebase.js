import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCevfw2twtgkqYb_jbQWn1fM_voN4wfayU",
  authDomain: "quicknotesapp-3985d.firebaseapp.com",
  projectId: "quicknotesapp-3985d",
  storageBucket: "quicknotesapp-3985d.appspot.com",
  messagingSenderId: "455206186500",
  appId: "1:455206186500:web:5476251c72875de2f9cf51",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
