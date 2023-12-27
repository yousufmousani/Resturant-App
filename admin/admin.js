import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {signInWithPopup,getRedirectResult, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
const provider = new GoogleAuthProvider(auth);




const form = document.querySelector('#form');
// const user = document.getElementById('username');

const email = document.querySelector('#email');
const password = document.querySelector('#password');
let name = document.getElementById('username');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email.value, password.value) 

        .then(async (userCredential) => {

            const user = userCredential.user;
            console.log(user);
  
            try {
              const docRef = await addDoc(collection(db, "Admin"), {
                Name : name.value,
                SingUp_Email: email.value,
                SignUp_Password: password.value,
                Time: new Date().toLocaleString()
                
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
              window.location = 'adminlogin.html'
            }
            window.location = 'adminlogin.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

      });

      // signInWithPopup(auth, provider)
      
      let gogle = document.getElementById('gbutton')
      
      gogle.addEventListener('click',(e) => {
        signInWithPopup(auth, provider)     
        getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location = 'panel.html'  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }); 

});
      
      
      
      
      