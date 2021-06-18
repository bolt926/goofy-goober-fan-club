document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'angry',
            img: 'images/angry.png'
        },
        {
            name: 'angry',
            img: 'images/angry.png'
        },
        {
            name: 'happy',
            img: 'images/happy.png'
        },
        {
            name: 'happy',
            img: 'images/happy.png'
        },
        {
            name: 'robot',
            img: 'images/robot.png'
        },
        {
            name: 'robot',
            img: 'images/robot.png'
        },
        {
            name: 'sad',
            img: 'images/sad.png'
        },
        {
            name: 'sad',
            img: 'images/sad.png'
        },
        {
            name: 'stickman',
            img: 'images/stickman.png'
        },
        {
            name: 'stickman',
            img: 'images/stickman.png'
        },
        {
            name: 'weirdo',
            img: 'images/weirdo.png'
        },
        {
            name: 'weirdo',
            img: 'images/weirdo.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay= document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenID = []
    let cardsWon = []
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)}
        }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]
        if(optionOneID == optionTwoID) {
            cards[optionOneID].setAttribute('src', 'back.png')
            cards[optionTwoID].setAttribute('src', 'back.png')
            alert("you have clicked the same image")
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneID].setAttribute('src', 'images/nocard.png')
            cards[optionTwoID].setAttribute('src', 'images/nocard.png')
            cards[optionOneID].removeEventListener('click', flipCard)
            cards[optionTwoID].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute('src', 'images/back.png')
            cards[optionTwoID].setAttribute('src', 'images/back.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats. You found them all!'
        }
    }


    //flip the card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenID.push(cardId)     
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)}
    } 
    createBoard()
    
})
