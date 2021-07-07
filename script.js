function computerPlay(){
    let num = Math.ceil(Math.random()*3);
    if (num==1){
        return "Rock";
    }
    else if(num==2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection=="rock"){
        if(computerSelection=="scissors"){
            console.log( "You Win! Rock beats Scissors");
            return 1;
        }
        else if(computerSelection=="paper"){
            console.log("You Lose :( Paper beats Rock");
            return -1;
        }
    }
    if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else if(computerSelection=="scissors"){
            console.log( "You Lose :( Scissors beat Paper");
            return -1;
        }
    }
    if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            console.log("You Win! Scissors beat Paper");
            return 1;
        }
        else if(computerSelection=="rock"){
            console.log("You Lose :( Rock beats Scissors");
            return -1;
        }    
    }
    return 0;
}
function game(){
    let human = 0;
    let machine = 0;
    while(human!=5 && machine!=5){
        const player = prompt("What is your weapon?");
        const computer = computerPlay();
        roundResult = playRound(player, computer);
        if (roundResult == 1){
            human+=1;
        }
        else if (roundResult==-1){
            machine+=1;
        }
        console.log("Human:" + human + "Machine:" + machine);
    }
    if (human==5){
        console.log("YOU WON CONGRATS!")
    }
    else{
        console.log("You lost :( Better luck next time")
    }
}

game();
