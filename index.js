// Attributes
let countData = 0
let welcomeEl = document.getElementById('welcome-el')
let myName = 'Stranger'
let greeting = 'Hello, '
let firstEntry = 0
let entryP = document.getElementById('entry-p')
let entries = 0

// Set the screen
document.getElementById('number-display').innerText = countData
welcomeEl.innerText = greeting + myName + '!'
welcomeEl.innerText += '👋'





// Methods
function increment() {
    numberDisplay = document.getElementById('number-display')
    countData += 1
    numberDisplay.innerText = countData
}

function save() {
    if (firstEntry == 0) {
        entryP.innerText = countData
        firstEntry = 1
        countData = 0
        numberDisplay.innerText = countData
    }
    else {
        entryP.innerText += ' - ' + countData
        countData = 0
        numberDisplay.innerText = countData
    }
    
}

function reset() {
    countData = 0
    numberDisplay.innerText = countData
    entryP.innerText = '---'
    firstEntry = 0
}

