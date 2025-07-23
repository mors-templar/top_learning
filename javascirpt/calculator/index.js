function generate_grid(r, c, input, arr) {
    let displayed_items = document.getElementById("display");
    displayed_items.textContent = "";
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
    generate_grid(3, 2, 'operators' , ["+","-","x","÷","AC","="]);
});

function get_buttontext(btn){
    return btn.textContent;
};

let decimal_flag = false; 
let ans  = 0;

document.addEventListener("click", (event) => {
    let displayed_items = document.getElementById("display");
    let prev_items = displayed_items.textContent;

    if (event.target.classList.contains("calc-btn")) {
        let text = get_buttontext(event.target);

        // decimal check
        if (text === ".") {
            if (decimal_flag) {
                alert("You can only have one decimal point.");
                return;
            } else {
                decimal_flag = true;
            }
        }

        // operator check
        const lastChar = prev_items.slice(-1);
        if (["+",  "x", "÷"].includes(text) && ["+",  "x", "÷"].includes(lastChar)) {
            return;
        }

        // eval expression 
        if(text === "=") {
            let expression = prev_items.replace(/x/g, "*").replace(/÷/g, "/");
            let result = eval(expression);
            displayed_items.textContent = result;
            ans = result;
            decimal_flag = false;
            return;
        }

        // handle 'ans'
        if(text === "ans"){
            displayed_items.textContent = prev_items + ans;
            return;
        }

        // all clear 
        if(text === "AC") {
            displayed_items.textContent = "";
            decimal_flag = false;
            return
        }

        // reset decimal operator 
        if (["+", "-", "x", "÷"].includes(text)) {
            decimal_flag = false;
        }

        displayed_items.textContent = prev_items + text;
    }   
});
