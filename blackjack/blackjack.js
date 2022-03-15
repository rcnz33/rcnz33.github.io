let firstCard = Math.floor(Math.random(1,11) * 11) + 1
let secondCard = Math.floor(Math.random(1,11) * 11) + 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

// Get DOM
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el') 
let sumEl = document.querySelector('#sum-el') 

// Game Conditions
let isAlive = true
let hasBlackjack = false


function startGame() {
    renderGame()
}

function renderGame() {
    let message = ''
    if (sum < 21) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }
    
    messageEl.textContent = message
    cardsEl.textContent = 'Cards: '
    for (i = 0; i < cards.length; i++) {
        if (i > 0) {
            cardsEl.textContent += ' • ' + cards[i]    
        } else{
            cardsEl.textContent += cards[i]
        }
        
    }
    sumEl.textContent = 'Sum: ' + sum
}

function getRandomCard() {
    return Math.floor(Math.random(1,11) * 11) + 1
}

function newCard() {
    let additionalCard = getRandomCard()
    cards.push(additionalCard)
    sum += additionalCard
    renderGame()
}


