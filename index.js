

let getComputerChoice = () => {
    let choice=Math.floor(Math.random()*3);
    if (choice == 0)
        return "rock";
    else if(choice == 1)
        return "paper";
    else 
        return "scissors";
}
// let computer=getComputerChoice();
// console.log(getComputerChoice());

let getHumanChoice = () => {
    let humansChoice = prompt("enter your choice : rock, paper, scissors");
    return humansChoice.toLowerCase();
    
}
// let human=getHumanChoice();
// console.log(human);







let playGame=() =>{
    let humanScore=0;
    let computerScore=0;
    
    let playRound = (computerChoice, humanChoice) => {
    if(computerChoice == humanChoice){
        console.log("its a draw !");    
    }
    else if(humanChoice=="rock" && computerChoice=="scissors" ||
       humanChoice=="paper"&& computerChoice=="rock" ||
       humanChoice=="scissors"&& computerChoice=="paper"
    ){
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
    
    let a=prompt('enter rounds');
    for(let i=1;i<=a;i++){
        console.log("round: "+i);
        const compterSelection=getComputerChoice();
        const humanSelection=getHumanChoice();
        
        playRound(humanSelection, compterSelection);        
    }

    if (humanScore>computerScore){
        console.log("***you won the game***");        
    }
    else{
        console.log("---you lost the game---");
        
    }
}

playGame();