import {  onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { auth } from "./firebase.js"; 
 
 onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = "index.html"
    }
});

const logoutBtn = document.querySelector(".logoutbtn");

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert("User LogOut")
       window.location = "index.html"
    }).catch((error) => {
        alert(error)
    });

})