function getComputerChoice() {
    let rand = Math.random();

    if (rand < 0.33) {
        return "rock";
    } else if (rand < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getUserChoice()
{
    let uchoice = prompt("Enter your Choice");
    return uchoice;
}

function playRound(hc , cc)
{
    hc = hc.toUpperCase();
    cc = cc.toUpperCase();

if (hc === cc)
{
    return `It is a DRAW, both players chose ${hc}`;
} 
else 
{
    if 
    (
        (hc === "rock" && cc === "scissors") ||
        (hc === "paper" && cc === "rock") ||
        (hc === "scissors" && cc === "paper")
    ) 
    {
        return `You WIN! ${hc} beats ${cc}`;
    } 
    else 
    {
        return `You LOSE! ${cc} beats ${hc}`;
    }
}


    
}


let humanscore = 0;
let computerscore = 0;
const computer_choice = getComputerChoice();
const humer_choice = getUserChoice();
