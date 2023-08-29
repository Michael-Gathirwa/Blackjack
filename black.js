let firstCard = 3
let secondCard = 24
 let sum = firstCard + SecondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
function startGame(){
 sumEl.textContent="Sum: " + sum
 cardsEl.textContent="Cards: " +
     if (sum<25){
     message="Do you Want to draw another card"
     }
     else if(sum===25){
       message="You have your JACKS!"
     }
     else {
       message="You are Out of the Game!"
     }
 messageEl.textContent = message
}
