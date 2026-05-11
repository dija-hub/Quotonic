import { supabase } from './supabase.js'

console.log("Supabase object:", supabase)

let email = document.getElementById("info");
let pass = document.getElementById("pass");
let msg = document.getElementById("msg");
let enter = document.getElementById("btn3");


// enter.addEventListener("click", async function () {

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: email.value,
//     password: pass.value
//   });

//   if (error) {
//     msg.innerText = "Wrong Email or Password";
//     msg.style.color = "red";
//   } else {
//     msg.innerText = "Sign In Successful";
//     msg.style.color = "green";
//   }

// });

enter.addEventListener('click',await function(){
  
})