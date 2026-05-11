import { supabase } from './supabase.js'

console.log("Supabase object:", supabase)

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