let firstCard = 19
let secondCard = 3
let sum = firstCard + secondCard

let isAlive = true
let hasBlackjack = false


console.log(sum)


let message = ''

if (sum < 21) {
    message = 'Do you want to draw a new card?'
} else if (sum === 21) {
    message = "Congratulations! You've got a Blackjack!"
    hasBlackjack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

console.log(message)
