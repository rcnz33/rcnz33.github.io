let cards = [] // Store cards to display
let sum = 0 // Sum up all cards and display
let message = ''

// Get DOM
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el') 
let sumEl = document.querySelector('#sum-el') 
let playerEl = document.querySelector('#player-el')
// Get Dom : (Buttons)
let startGameBtnEl = document.querySelector('#startGameBtn')
let newGameBtnEl = document.querySelector('#newCardBtn')
let playAgainBtnEl = document.querySelector('#playAgainBtn')

newGameBtnEl.style.display = 'none'
playAgainBtnEl.style.display = 'none'

// Game Conditions
let isAlive = false
let hasBlackjack = false

// OBJECT: Player
let player = {
    name: "You",
    chips: 100
}


function updatePlayer() {
    playerEl.textContent = player.name + ': $' + player.chips
}


function startGame() {
        if (player.chips > 0) {
            player.chips -= 25
            updatePlayer()
            let firstCard = getRandomCard()
            let secondCard = getRandomCard()
            sum = firstCard + secondCard
            cards = [firstCard, secondCard]
            renderGame()
            startGameBtnEl.style.display = 'none'
            playAgainBtnEl.style.display = 'none'
            newGameBtnEl.style.display = 'block'
        }else {
            message = "You don't have enough chips to play."
            messageEl.textContent = message
            startGameBtnEl.style.display = 'none'
            cardsEl.textContent = ''
            sumEl.textContent = 'Thanks for playing!'
        }
}


function playAgain() {
    playAgainBtnEl.style.display = 'none'
    startGameBtnEl.style.display = 'block'
    cards = []
    sum = 0
    message = 'Want to play a round?'

    cardsEl.textContent = 'Cards:'
    sumEl.textContent = 'Sum:'
    messageEl.textContent = message
    isAlive = true
}


function renderGame() {
    hasBlackjack = false
    if (sum < 21) {
        message = 'Do you want to draw a new card?'
        isAlive = true
    } else if (sum === 21) {
        message = "You've got a Blackjack!"
        newCardBtn.style.display = 'none'
        playAgainBtnEl.style.display = 'block'
        // hasBlackjack = true
        // isAlive = false
        player.chips += 25 * 25
        updatePlayer()
    } else {
        message = "You're out of the game."
        isAlive = false
        newGameBtnEl.style.display = 'none'
        playAgainBtnEl.style.display = 'block'
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
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let additionalCard = getRandomCard()
        cards.push(additionalCard)
        sum += additionalCard
        renderGame()
    }
}
