import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBFJmTWLJSmkQQJZPgN0r5xvO_v9wmpgNQ",
  authDomain: "habbit-tracker-24d3c.firebaseapp.com",
  projectId: "habbit-tracker-24d3c",
  storageBucket: "habbit-tracker-24d3c.firebasestorage.app",
  messagingSenderId: "1069162891610",
  appId: "1:1069162891610:web:5cf736697e3a0fde170b63"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let email = document.getElementById("info");
let pass = document.getElementById("pass");
let msg = document.getElementById("msg");
let enter = document.getElementById("btn3");


enter.addEventListener("click",function(){

  signInWithEmailAndPassword(auth,email.value,pass.value)
  .then(()=>{
       msg.innerText="Sign In Successful"
       msg.style.color = "green";
  })
  .catch(()=>{
    msg.innerText="Wrong Password or Email"
    msg.style.color = "red";
  })
})