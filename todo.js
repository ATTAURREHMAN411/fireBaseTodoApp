import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth, db } from "./firebase.js";
import { collection, addDoc, getDocs, query, where , deleteDoc, updateDoc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


// get elements from html 

const form = document.querySelector('.todo');
const todo = document.querySelector('#tittle');
const container = document.querySelector('.showitem');
const describtion = document.querySelector("#describtion")
// const logoutBtn = document.querySelector("#logoutbtn");

// global array for todos
const allTodo = []


// check user status
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
getDataFromFirestore()

    } else {
        window.location = "index.html"
    }
});

// get data from database

async function getDataFromFirestore() {
    const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        allTodo.push({
            ...doc.data(),
            docid: doc.id
        })
    });

    console.log(allTodo);
    allTodo.map(item => {
        container.innerHTML += ` <div class="outputtodo">
            <img src="todo2.png" alt="">
            <h3 class="inttittle">Tittle </h3><span id="inttittle">${item.Tittle}</span>
                <h3 class="indescribtion">Describtion </h3><span id="indescribtion">${item.Desription}</span><br>
                <button class="editBtn"><span>Edit</span> <img src="new-removebg-preview.png" alt=""></button>
                <button class="deleteBtn"><span>Delete</span> <img src="new-removebg-preview.png" alt=""></button>
                </div>`
    })
}


const deleteBtn = document.querySelectorAll('.deleteBtn')
const editBtn = document.querySelectorAll('.editBtn')

editBtn.forEach((item, index) => {
    item.addEventListener('click', async (event) => {
        console.log("click");
        
    })
})


// add data into database

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(todo.value);

    try {
        const docRef = await addDoc(collection(db, "users"), {
         Tittle: tittle.value, 
         Desription: describtion.value,
         uid: auth.currentUser.uid
        });
        tittle.value = ""
        describtion.value = ""
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})
;