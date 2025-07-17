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

function getUserChoice() {
    let uchoice = prompt("Enter your choice (rock, paper, or scissors):");
    return uchoice;
}

function playRound(hc, cc) {
    hc = hc.toLowerCase();
    cc = cc.toLowerCase();

    if (hc === cc) {
        console.log(`It is a DRAW, both players chose ${hc}`);
        return "draw";
    } else if (
        (hc === "rock" && cc === "scissors") ||
        (hc === "paper" && cc === "rock") ||
        (hc === "scissors" && cc === "paper")
    ) {
        console.log(`You WIN! ${hc} beats ${cc}`);
        return "u";
    } else {
        console.log(`You LOSE! ${cc} beats ${hc}`);
        return "c";
    }
}

function playGame(round = 1, humanScore = 0, computerScore = 0) {
    if (round > 5) {
        console.log("----- Game Over -----");
        console.log(`Final Scores -> You: ${humanScore}, Computer: ${computerScore}`);

        if (humanScore > computerScore) {
            console.log("You are the WINNER!");
        } else if (computerScore > humanScore) {
            console.log("Computer wins!");
        } else {
            console.log("It's a TIE!");
        }
        return;
    }

    let humanChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    let result = playRound(humanChoice, computerChoice);

    if (result === "u") humanScore++;
    else if (result === "c") computerScore++;

    console.log(`Score after round ${round}: You: ${humanScore}, Computer: ${computerScore}\n`);

    playGame(round + 1, humanScore, computerScore);
}

playGame();
