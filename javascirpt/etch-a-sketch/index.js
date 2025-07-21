function get_gridSize(element) {
    element.addEventListener("click", function() {
        const input = prompt("Enter the size of the grid you want (default = 16):");
        // Convert input to number, use 16 if input is invalid or empty
        let size = parseInt(input);
        if (isNaN(size) || size < 1 || size > 100) {
            size = 16;
        }

        generate_grid(size); 
    });
}


function generate_grid(gridSize){
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let row = 0; row < gridSize; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let col = 0; col < gridSize; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

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
}


function square_hover(element) {
    element.style.backgroundColor = "red";
}
function square_out(element){
    element.style.backgroundColor = "white"
}

get_gridSize(document.getElementById("reset-btn"))