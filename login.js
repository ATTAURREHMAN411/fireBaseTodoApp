import { auth } from "./firebase.js"; 
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

 let button = document.querySelector(".form-login")
   
button.addEventListener("submit", event =>{
   event.preventDefault()
  let email = document.querySelector(".Lemail").value
  let password = document.querySelector(".Lpassword").value
   
     signInWithEmailAndPassword (auth, email, password)
   .then((userCredential) => { 
     const user = userCredential.user;
     console.log(user);
     window.location = "card.html"
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
    console.log(errorCode);
     alert("error")
   });
})