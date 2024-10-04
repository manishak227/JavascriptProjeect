let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options= ["rock" ,"paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () =>{
    //console.log("game was draw.");
    msg.innerText= ("Game was Draw.Try again");
    msg.style.backgroundColor="rgb(29, 29, 55)";
};
const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you win");
        msg.innerText= `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("you lose");
        msg.innerText= `you lose! ${compChoice} beats your ${compChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
    //console.log("user choice = ",userChoice);
    const compChoice =genCompChoice();
    //console.log("comp Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else  {
    let userWin= true;
    if(userChoice === "rock"){
        //paper,scissors
        userWin = compChoice === "paper" ? false:true;
    } else if(userChoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissors" ? false: true;
    } else {(userChoice === "scissors")
        //rock,paper
        userWin = compChoice === "rock " ? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});