let firstCard = 1
let secondCard =8

let cards=[firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
 let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
 //let sumEl=document.querySelector("#sum-el")
 function startGame(){
 renderGame()
 }
 let cardsEl=document.getElementById("cards-el")
 function renderGame(){
    cardsEl.textContent="Cards: "

    for (let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] +" "
    }
    
    sumEl.textContent="Sum:" + sum
if (sum <= 20) {
    message="Do you want to draw a new card? "
} else if (sum === 21) {
    message="You've got Blackjack! "
    hasBlackJack = true
} else {
    message="You're out of the game! "
    isAlive=false
}
    messageEl.textContent=message
 }

 function newCard(){
    console.log("Drawing a new card from the deck!")
    let card=2
    sum += card
    cards.push(card)
    renderGame()
 }





 let player1Time = 102
 let player2Time = 107

 function getFastestRaceTime(){

    if(player1Time<player2Time){
      return player1Time
    } else if (player2Time<player1Time){
        return player2Time
    } else{
        return player1Time
    }
 }

 let fastestRace = getFastestRaceTime()
 console.log(fastestRace)

 function raceTime(){
    return player1Time+player2Time
  
   }
    let totalRaceTime = raceTime()
    
    console.log(totalRaceTime)
   