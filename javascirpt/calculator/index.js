function generate_grid(r, c, input, arr) {
    const container = document.getElementById(input);
    let count = 0;

    for (let row = 0; row < r; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let col = 0; col < c; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            const button = document.createElement("button");
            button.classList.add("calc-btn");

            button.textContent = arr[count];
            
            square.appendChild(button);
            rowDiv.appendChild(square);
            count++;
        }

        container.appendChild(rowDiv);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    generate_grid(4, 3, 'numbers',["9","8","7","6","5",'4',"3","2","1",".","0","ans"]);
    generate_grid(3, 2, 'operators' , ["+","-","x","÷","%","="]);
});

function get_buttontext(btn){
    return btn.textContent
};

document.addEventListener("click" , (event) => {
    if(event.target.classList.contains("calc-btn")) {
        const text = get_buttontext(event.target);
        console.log(text);
    }
}
);

