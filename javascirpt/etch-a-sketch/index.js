const container = document.getElementById("container");
const gridSize = 16;

for (let row = 0; row < gridSize; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let col = 0; col < gridSize; col++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add hover event listener directly to each square
        square.addEventListener("mouseover", function() {
            square_hover(square);
        });
        square.addEventListener("mouseout", function() {
            square_out(square);
        });
        rowDiv.appendChild(square);
    }

    container.appendChild(rowDiv);
}

function square_hover(element) {
    element.style.borderColor = "brown";
}
function square_out(element){
    element.style.borderColor = "white"
}
