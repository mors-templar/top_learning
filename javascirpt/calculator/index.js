function generate_grid(r, c, input) {
    const container = document.getElementById(input);
    for (let row = 0; row < r; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let col = 0; col < c; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generate_grid(4, 3, 'numbers');
    generate_grid(3, 2, 'operators');
});
