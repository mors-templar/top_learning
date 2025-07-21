const container = document.getElementById("container");
const gridSize = 16;

for (let row = 0; row < gridSize; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let col = 0; col < gridSize; col++) {
        const square = document.createElement("div");
        square.classList.add("square");
        rowDiv.appendChild(square);
    }

    container.appendChild(rowDiv);
}
