document.addEventListener("DOMContentLoaded",()=>{
    const mainHeading = document.getElementById("mainHeading")

    const redButton = document.getElementById("redButton")
    const greenButton = document.getElementById("greenButton")
    const blueButton = document.getElementById("blueButton")
    const purpleButton = document.getElementById("purpleButton")
    const resetButton = document.getElementById("resetButton")

    const changeColor = (color)=>{
        mainHeading.style.color = color
    }

    redButton.addEventListener('click',()=> changeColor("red") )
    greenButton.addEventListener('click',()=> changeColor("green") )
    blueButton.addEventListener('click',()=> changeColor("blue") )
    purpleButton.addEventListener('click',()=> changeColor("purple") )
    resetButton.addEventListener('click',()=> changeColor("black") )

})