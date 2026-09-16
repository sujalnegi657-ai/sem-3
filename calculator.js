const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (!display.value.trim()) {
        alert("Please enter a calculation first.");
        return;
    }

    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid expression. Please check your input.");
        display.value = "";
    }
}   