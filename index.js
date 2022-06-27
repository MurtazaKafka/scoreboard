let homeEl = document.getElementById("home-el")
let homeScore = 0

function home1() {
    homeEl.textContent = (homeScore += 1)
}

function home2() {
    homeEl.textContent = (homeScore += 2)
}

function home3() {
    homeEl.textContent = (homeScore += 3)
}


let guestEl = document.getElementById("guest-el")
let guestScore = 0

function guest1() {
    guestEl.textContent = (guestScore += 1)
}

function guest2() {
    guestEl.textContent = (guestScore += 2)
}

function guest3() {
    guestEl.textContent = (guestScore += 3)
}

let newGame = document.getElementById("game-btn")
function NG() {
    guestScore = 0
    homeScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}