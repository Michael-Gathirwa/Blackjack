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
    sumEl.textContent="Sum:" + sum
    cardsEl.textContent="Cards: " + cards[0] + " " + cards[1 ]
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
    renderGame()
 }


let skills = [
    "Programming",
    "HTML & CSS",
    "Cybersecurity",
    "cctv installation",
    "Networking"
]

console.log(skills[2])
console.log(skills[1])
console.log(skills[0])
console.log(skills[3])
console.log(skills[4])