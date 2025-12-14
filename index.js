let homeScore = document.getElementById("home-score")
let homeCount = 0 
let guestScore = document.getElementById("guest-score")
let guestCount = 0 


function increase1PointHome(){
    homeCount++
    console.log(homeCount)
    homeScore.textContent=homeCount
}

function increase2PointHome(){
    homeCount+=2
    console.log(homeCount)
    homeScore.textContent=homeCount
}

function increase3PointHome(){
    homeCount+=3
    console.log(homeCount)
    homeScore.textContent=homeCount
}


function increase1PointGuest(){
    guestCount++
    console.log(guestCount)
    guestScore.textContent=guestCount
}

function increase2PointGuest(){
    guestCount+=2
    console.log(guestCount)
    guestScore.textContent=guestCount
}

function increase3PointGuest(){
    guestCount+=3
    console.log(guestCount)
    guestScore.textContent=guestCount
}
