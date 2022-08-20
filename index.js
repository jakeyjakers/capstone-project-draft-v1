console.log("Test")

//////////Grabbing all elements to be used in application///////

////////Archive form/////////////
const cardContainer = document.querySelector('.card-container')

const archiveForm = document.querySelector('.archive-form')

const gameTitle = document.getElementById('game-title')

const length = document.getElementById('length')

const playerNumSelect = document.getElementById('player-num-select')////maybe we'll have to use this, maybe not. Or just the options in it///////////

const playerNumText = playerNumSelect.options[playerNumSelect.selectedIndex].text

const playerOption = document.querySelectorAll('option')

const races = document.getElementById('races')

const victor = document.getElementById('victor')

const textArea = document.getElementById('text-area')

const archiveBtn = document.querySelector(".archive-button")

/////////Archive form///////////////////////

////////////////random game generator form///////////////

const randomGenerator = document.getElementById("random-gen")

const randNumPlayerInput = document.getElementById('random-num-players')

const randGenBtn = document.getElementById('gen-btn')

////////////////random game generator form///////////////

//////////////////////////////////////////////////////////////

const createCard = (event) =>{
    event.preventDefault()
/////////////////////////creating elements for card/////////
    const archiveCard = document.createElement('div')
    const archivePic = document.createElement('img')
    const archiveTitle = document.createElement('h5')
    const archiveLength = document.createElement('h5')
    const archivePlayerAmount = document.createElement('h5')  ////in final draft look at adding loop to add classes for shorter code///
    const archiveRaces = document.createElement('h5')
    const archiveVictor = document.createElement('h5')
    const archiveParagraph = document.createElement('p')
    archiveCard.classList.add('archive-card')
////////////////creating elemnts for card///////////////

/////////////////assigning content to variables///////////////
    // archivePic.src = pic from database or api call
    archiveTitle.textContent = `Game Title: ${gameTitle.value}.`.trim()
    archiveLength.textContent = `Game Length: ${length.value}`.trim()
    archivePlayerAmount.textContent = `Amount Of Players: ${(playerNumText)}`
    archiveRaces.textContent = `Races: ${races.value}`.trim()
    archiveVictor.textContent = `Victor ${victor.value}`
    archiveParagraph.textContent = textArea.value

//////////////appending everthing together/////////////
    archiveCard.appendChild(archivePic)
    archiveCard.appendChild(archiveTitle)
    archiveCard.appendChild(archiveLength)
    archiveCard.appendChild(archivePlayerAmount)
    archiveCard.appendChild(archiveRaces)
    archiveCard.appendChild(archiveVictor)
    archiveCard.appendChild(archiveParagraph)
    cardContainer.appendChild(archiveCard)
}

archiveForm.addEventListener('submit', createCard)