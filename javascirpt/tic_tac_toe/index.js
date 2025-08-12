// create board 

function square_hover(el) {
    el.style.backgroundColor = "white";
}

function square_out(el) {
    el.style.backgroundColor = "#dddd";
}

function generate_grid(gridSize = 3) {
    const container = document.getElementById("board");
    container.innerHTML = "";
    
    for (let row = 0; row < gridSize; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let col = 0; col < gridSize; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover", function () {
                square_hover(square);
            });
            square.addEventListener("mouseout", function () {
                square_out(square);
            });

            rowDiv.appendChild(square);
        }

        container.appendChild(rowDiv);
    }
}


// create scoreboard and player

class Player{
    constructor(name, mark){
        this.name = name;
        this.score = 0;
        this.mark = mark; 
    }

    increaseScore() {
        this.score++;
    }
}

let player1;
let player2;

function createUser() {
    // const n1 = prompt("Please enter Player 1's name");
    // const n2 = prompt("Please enter Player 2's name");
    
    const n1 = "r1";
    const n2 = "r2";

    player1 = new Player(n1 || "Player 1", 'X');
    player2 = new Player(n2 || "Player 2", 'O');

    const p1Title = document.getElementById("p1");
    const p2Title = document.getElementById("p2");
    
    const scoreDivs = document.querySelectorAll(".left .score, .right .score");

    if (p1Title && scoreDivs[0]) {
        p1Title.textContent = player1.name;
        scoreDivs[0].textContent = `Score: ${player1.score}`;
    }
    
    if (p2Title && scoreDivs[1]) {
        p2Title.textContent = player2.name;
        scoreDivs[1].textContent = `Score: ${player2.score}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generate_grid(3); 
    createUser();    
});