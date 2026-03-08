let count = 0;

const number = document.querySelector("#number");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const incrementBtn = document.querySelector("#increment");

decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
incrementBtn.addEventListener("click", increment);

function decrement() {
    count--;
    number.textContent = count;
    updateColor()
}

function reset() {
    count = 0;
    number.textContent = count;
    updateColor()
}

function increment() {
    count++;
    number.textContent = count;
    updateColor()
}

function updateColor() {
    if (count > 0) {
        number.style.color = "green";
    }
    else if (count < 0) {
        number.style.color = "red";
    }
    else {
        number.style.color = "black";
    }
}