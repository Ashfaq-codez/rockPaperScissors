

let getComputerChoice = () => {
    let choice=Math.floor(Math.random()*3);
    if (choice == 0)
        return "rock";
    else if(choice == 1)
        return "paper";
    else 
        return "scissors";
}

// console.log(getComputerChoice());

let getHumanChoice = () => {
    let humansChoice = prompt("enter your choice : rock, paper, scissors");
    return humansChoice.toLowerCase();
    
}

// console.log(getHumanChoice());

let playGame=() =>{
    let humanScore=0;
    let computerScore=0;
    
    let playRound = (humanChoice, computerChoice) => {
    if(computerChoice == humanChoice){
        console.log("its a draw !");    
    }
    else if(humanChoice==="rock" && computerChoice==="scissors" ||
       humanChoice==="paper"&& computerChoice==="rock" ||
       humanChoice==="scissors"&& computerChoice==="paper"){

        console.log("you win this round!!!");
        
        humanScore++;
    }
    else{
        console.log("you lost this round!");
        
        computerScore++;
    }


    console.log("human score = "+ humanScore);
    console.log("computer score = "+ computerScore);
    
    
}
    
    let a=prompt('enter the number of rounds you wish to play');
    for(let i=1;i<=a;i++){
        console.log("round: "+i);
        const computerSelection=getComputerChoice();
        const humanSelection=getHumanChoice();
        
        console.log("you chose: "+ humanSelection);
        console.log("computer chose: "+ computerSelection);
        
        playRound(humanSelection, computerSelection);        
    }


    if (humanScore>computerScore){
        console.log("***you won the game by "+ (humanScore-computerScore) + " points***");        
    }
    else if(humanScore==computerScore){
        console.log("### it's a draw ###");
        
    }
    else{
        console.log("---you lost the game by "+ (computerScore-humanScore) + " points---");
        
    }
}

playGame();