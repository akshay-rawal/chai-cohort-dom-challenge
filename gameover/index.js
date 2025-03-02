
    const emojis = ['🐶', '🐱', '🐭','🐹', '🐰', '🦊','🐶', '🐱', '🐭','🐹', '🐰', '🦊','🍕', '🍔','🍕', '🍔', ]

    let move = 0
    let lockboard = false
    let firstCard = null
    let secondCard = null
    let timer   
    let timeHua = 0;
    let gameStarted = false

    function restartGame(){
    const gameContainer = document.querySelector(".game-container")
        gameContainer.innerHTML = ''

        timeHua = 0;
         updateTimerDisplay();
         clearInterval(timer);
        gameStarted = false
        move = 0
        document.getElementById("moves").textContent = move


        let  shuf_emojis = [...emojis].sort(()=>Math.random() -0.5)
         
        shuf_emojis.forEach(emoji=>{
            let box = document.createElement("div")
        box.className = "card"
        box.innerHTML = `<span>${emoji}</span>`
 
        box.addEventListener("click",handleCardClick)
        gameContainer.appendChild(box)
    })
        
}
      

          function handleCardClick(){
            if(lockboard || this.classList.contains("boxMatch") || this === firstCard){
        return
          }

          if(!gameStarted){
            gameStarted = true
            startTimer()
          }
           
          this.classList.add("boxOpen")

          if(!firstCard){
            firstCard = this
            return
          }
           
          secondCard = this
          lockboard = true
          setTimeout(
            checkMatch,300)    

    }
  
    function checkMatch(){

              if(firstCard.innerHTML === secondCard.innerHTML){
                  firstCard.classList.add("boxMatch")
                  secondCard.classList.add("boxMatch")

                  firstCard.querySelector("span").style.visibility = "visible";
                  secondCard.querySelector("span").style.visibility = "visible";
  
              }  else{
                    firstCard.classList.remove("boxOpen");
                    secondCard.classList.remove("boxOpen");
                }

                firstCard = null
                secondCard = null
                lockboard = false
                move++
                document.getElementById("moves").textContent = move
      
              if(document.querySelectorAll(".boxMatch").length === emojis.length){
                clearInterval(timer)
                setTimeout(() => alert("🎉 You win! 🎉"), 300);
              }
            }

            function startTimer(){
                timer = setInterval(()=>{
                    timeHua++
                    updateTimerDisplay()
                },1000)
            }

            function updateTimerDisplay(){
                document.getElementById("time").textContent = formatTime(timeHua)
            }

            function formatTime(second){
                let minutes = Math.floor(second/60)
                let secs = second % 60
                return `${minutes}:${secs < 10 ? '0':''}${secs}`
            }
     
restartGame()
