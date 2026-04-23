let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-container");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    //console.log("Game was draw.");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin){
        userScore++;
        userScorePara.innerText= userScore;
        //console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("you lose");
        msg.innerText = `you lose. Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //console.log("user choice =", userChoice);
    //generate computer choice -> modular
    const compChoice = genCompChoice();
    //console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userwin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //rock, scissors
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach ((choice) => {
    choice.addEventListener ("click", () => {
        //const choiceId = choice.getAttribute("id"); //access id
        //console.log("choice was clicked", choiceId);
        const userChoice = choice.getAttribute("id"); //access id
        playGame(userChoice);

    });
});