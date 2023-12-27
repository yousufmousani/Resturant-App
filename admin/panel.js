let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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
const db = getFirestore(app);
const auth = getAuth(app);


let getDiv = document.getElementById('items')
let name = document.getElementById('name')
let email = document.getElementById('email')
let time = document.getElementById('time')
const userdata = await getDocs(collection(db, "users"));
    
    userdata.forEach((doc) => {
      name.innerHTML += `
      <div>${doc.data().Name}</div>
      `
    });
    userdata.forEach((doc) => {
        email.innerHTML += `
        <div>${doc.data().SingUp_Email}</div>
        
        `
      });
      userdata.forEach((doc) => {
        time.innerHTML += `
        <div>${doc.data().Time}</div>
        `
      });
    
