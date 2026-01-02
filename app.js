let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const resetbtn = document.querySelector(".resetbtn")


// generating Computer choice
const genCompChoice = () => {
    const options = ["Rock", "Paper" ,"Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//Draw case
const drawGame = () => {
    console.log("game was draw.")
    mssg.innerText = " Game Draw, Play Again "
}

//checking who is going to win and changes occure
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log( "You Win")
        userScore++ ;
        userScorePara.innerText = userScore;
        mssg.innerText = ` You Win! Your ${userChoice} beats ${compChoice}`
        mssg.style.backgroundColor = "green" ; 
    }
    else{
        console.log("You Lose")
        compScore++ ;
        compScorePara.innerText = compScore;
        mssg.innerText = ` You Win! Your ${compChoice} beats ${userChoice}`
        mssg.style.backgroundColor = "#ce3d3d" ;
    }
}


//Game Area 
const playGame = (userChoice) => {
    console.log("user choice = " , userChoice)

    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice)

    if(userChoice ===  compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            //scissor , paper
            userWin = compChoice === "Paper" ? false : true; // if compchoice is paper than it will be false else true
        }
        else if(userChoice === "Paper"){
            //scissor, rock 
            userWin = compChoice === "Rock" ? true : false;// if compchoice is rock than it will be true else false 
        }
        else {
            //rock,paper
            userWin = compChoice === "Rock" ? false : true;// if compchoice is rock than it will be false else true 
        }
        showWinner(userWin , userChoice , compChoice);
    }

};

//Reset Game
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    mssg.innerText = "Play your move";
    mssg.style.backgroundColor = "#081b31";
}

resetbtn.addEventListener("click", resetGame);

//user choice
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
