function square_hover(el) {
    el.style.backgroundColor = "#ddd";
}

function square_out(el) {
    el.style.backgroundColor = "white";
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

document.addEventListener("DOMContentLoaded", () => generate_grid(3));
