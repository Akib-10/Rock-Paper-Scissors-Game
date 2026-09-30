let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

/* always use MODULAR programming -> ek ek kajer jonno ek ek function create */

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random()*3); /* 0 theke 2 er bitor random int value anar jonno */ 
    return options[randIndx];
}


const playGame = (userChoice) =>{
    console.log("User clicked was", userChoice);
    const compChoice = genCompChoice();
    console.log("User clicked was", compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});