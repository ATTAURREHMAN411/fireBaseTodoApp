// signInWithEmailAndPassword 
import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { auth } from "./firebase.js"; 

let button = document.querySelector(".button")
   
button.addEventListener("click", function(event){
  let email = document.querySelector(".email").value
  let password = document.querySelector(".password").value
   event.preventDefault()
  
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => { 
     const user = userCredential.user;
     console.log(user);
     window.location.href = "card.html"
     email = ""
     password = ""

   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage)
   });
})









