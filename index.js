let countHome = 0
let countAway = 0
let homeScore = document.getElementById("home-scr")
let homeScore1 = document.getElementById("home-scr1")
let homeScore2 = document.getElementById("home-scr2")
let homeScore3 = document.getElementById("home-scr3")

let awayScore = document.getElementById("away-scr")
let awayScore1 = document.getElementById("awayscore1")
let awayScore2 = document.getElementById("awayscore2")
let awayScore3 = document.getElementById("awayscore3")

function plusOneHome(){
    countHome += 1
 homeScore.textContent = countHome
}
function plusTwoHome(){
    countHome += 2
    homeScore.textContent=countHome
   }

function plusThreeHome(){
    countHome += 3
    homeScore.textContent=countHome
   }

   function plusOneAway(){
    countAway += 1
    awayScore.textContent = countAway
}
function plusTwoAway(){
    countAway += 2
    awayScore.textContent=countAway
   }

function plusThreeAway(){
    countAway += 3
    awayScore.textContent=countAway
   }

function reset(){
    countAway = 0
    countHome = 0 
    homeScore.textContent = countAway
    awayScore.textContent = countHome
}   