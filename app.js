function changetoColor(color){
    let bgAnimated = document.querySelector(".bg-animated")
    let colorChange = document.querySelector(".color-change")

    bgAnimated.style.background = color
    colorChange.style.background = color
    bgAnimated.classList.add("active")
   setTimeout(()=>{
    bgAnimated.classList.remove("active")

   }, 1200)
}
color = document.querySelectorAll(".color")


function colorBorder(){
    color.forEach((item) => {
       item.classList.remove('active')
       this.classList.add('active')
        
    });
}


color.forEach((item) => {
    item.addEventListener('click',colorBorder)
 })

 let sigin = document.querySelector(".sigin")
let login = document.querySelector(".login")
let formSigin = document.querySelector(".form-sigin")
let formLogin = document.querySelector(".form-login ")
sigin.addEventListener("click", ()=>{
   formSigin.classList.remove("disable")
   formLogin.classList.add("disable")
})
login.addEventListener("click", ()=>{
    formLogin.classList.remove("disable")
    formSigin.classList.add("disable")
})



 

 




























