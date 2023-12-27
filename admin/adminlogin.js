import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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



const form = document.querySelector('#form');
const user = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'panel.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
        
})





// forgotBtn.addEventListener('click' , ()=>{
//     const user = auth.currentUser;
//     const newPassword = prompt('enter new password');
//     updatePassword(user, newPassword).then(() => {
//         // Update successful.
//       }).catch((error) => {
//         // An error ocurred
//         // ...
//       });
// })