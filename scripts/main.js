document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'goku',
        img: 'images/goku.jpg'
    },
    {
        name: 'goku',
        img: 'images/goku.jpg'
    },
    {
        name: 'gohan',
        img: 'images/gohan.png'
    },
    {
        name: 'gohan',
        img: 'images/gohan.png'
    },
    {
        name: 'frieza',
        img: 'images/frieza.jpg'
    },
    {
        name: 'frieza',
        img: 'images/frieza.jpg'
    },
    {
        name: 'krillin',
        img: 'images/krillin.png'
    },
    {
        name: 'krillin',
        img: 'images/krillin.png'
    },
    {
        name: 'piccolo',
        img: 'images/piccolo.jpg'
    },
    {
        name: 'piccolo',
        img: 'images/piccolo.jpg'
    },
    {
        name: 'vegeta',
        img: 'images/vegeta.jpg'
    },
    {
        name: 'vegeta',
        img: 'images/vegeta.jpg'
    }
]


cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//Create board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/dbz.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('Its a match')
        cards[optionOneId].setAttribute('src', 'images/4star.jpg')
        cards[optionTwoId].setAttribute('src', 'images/4star.jpg')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/dbz.png')
        cards[optionTwoId].setAttribute('src', 'images/dbz.png')
        alert('Sorry, try again')
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = ' Congrats! You Won the Game'
    }
}

//flipcard
function flipcard() {
    var cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()

})