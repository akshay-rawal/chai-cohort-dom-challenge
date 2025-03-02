let toggleButton = document.querySelector(".toggle-btn")
let panel = document.querySelector(".panel")
let clsedBtn = document.querySelector(".close-btn")
let menuItem = document.querySelectorAll(".menu-item")


toggleButton.addEventListener("click",()=>{
    panel.classList.add("active")
})
clsedBtn.addEventListener("click",()=>{
    panel.classList.remove("active")
})

document.addEventListener("click",(event)=>{
    if(!panel.contains(event.target) && !toggleButton.contains(event.target)){
    panel.classList.remove("active")  
 }
    
})

menuItem.forEach((list)=>{
  list.addEventListener("click",()=>{
    alert(`Thanks for click on ${list.textContent }`)
  })

})