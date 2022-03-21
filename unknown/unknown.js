const fruits = ['🍌', '🍎', '🍎', '🍌',  '🍎', '🍌', '🍌'];


// Get DOM
let table1El = document.querySelector('#table-1')
let table2El = document.querySelector('#table-2')


// Functions
function sortFruitsToShelf() {
    for (each of fruits){
        if (each === '🍌') {
            table1El.textContent += each
        } else {
            table2El.textContent += each
        }
    }
}

sortFruitsToShelf()