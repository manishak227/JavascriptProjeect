let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara=document.querySelector("#.userScore");
const compScorePara=document.querySelector("#.compScore");

const genCompChoice = () =>{
    const options= ["rock" ,"paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame= () =>{
    console.log("game was draw.");
    msg.InnerText= ("Game was Draw.Try again");
    msg.computedStyleMap.background = rgb(29, 29, 55);
};
const showWinner =(userWin ,userChoice ,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.InnerText=userScore;
        console.log("you win");
        msg.InnerText= (`you win! Your ${userChoice} beats ${compChoice}`);
        msg.computedStyleMap.background ="green";
    }else {
        compScore++;
        compScorePara.InnerText = compScore;
        console.log("you lose");
        msg.InnerText= `you lose! ${compChoice} beats your ${compChoice}`);
        msg.computedStyleMap.background ="red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);

    const compChoice =genCompChoice();
    console.log("comp Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    let userWin= true;
    if(userChoice === "rock"){
        //paper,scissors
        userWin = compChoice === "paper" ? false:true;
    } else if(userChoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissors" ? false: true;
    } else if(userChoice === "scissors"){
        //rock,paper
        userWin = compChoice === "rock " ? false: true;
    }
};

choices.forEach((choice) => {
    choice.addEventListner("click",() => {
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

