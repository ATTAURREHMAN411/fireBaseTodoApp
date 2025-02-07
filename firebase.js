import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyC3mqkTmRsRQ1P5jU4tetXq3BBxUQOvzUA",
//   authDomain: "web-app-31ebe.firebaseapp.com",
//   projectId: "web-app-31ebe",
//   storageBucket: "web-app-31ebe.firebasestorage.app",
//   messagingSenderId: "278336327479",
//   appId: "1:278336327479:web:9185a9e89eec9bddcd94b2",
//   measurementId: "G-E0F2GCF4BL"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC3mqkTmRsRQ1P5jU4tetXq3BBxUQOvzUA",
  authDomain: "web-app-31ebe.firebaseapp.com",
  projectId: "web-app-31ebe",
  storageBucket: "web-app-31ebe.firebasestorage.app",
  messagingSenderId: "278336327479",
  appId: "1:278336327479:web:9185a9e89eec9bddcd94b2",
  measurementId: "G-E0F2GCF4BL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
