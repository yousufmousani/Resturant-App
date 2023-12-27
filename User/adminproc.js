import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection,getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1NzGsbVSriCHX1jcJZHQ5x45PYsZdffA",
  authDomain: "hackhathon-f4971.firebaseapp.com",
  projectId: "hackhathon-f4971",
  storageBucket: "hackhathon-f4971.appspot.com",
  messagingSenderId: "433610253363",
  appId: "1:433610253363:web:6b274b3e18453945542f46",
  measurementId: "G-MP7MGKJBVW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

