function append(value) {
    let display = document.getElementById("display").value;
    
    // Handle power operator: replace ^ with Math.pow
    if (value === '^') {
        document.getElementById("display").value += '**';
        return;
    }

    document.getElementById("display").value = display + value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function factorial() {
    let val = document.getElementById("display").value;

    if (isNaN(val)) {
        document.getElementById("display").value = "Error";
        return;
    }

    val = Number(val);
    let result = 1;

    for (let i = 1; i <= val; i++) {
        result *= i;
    }

    document.getElementById("display").value = result;
}

function calculate() {
    let expression = document.getElementById("display").value;

    try {
        // Convert percentage
        expression = expression.replace(/%/g, '/100');

        // Evaluate
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (err) {
        document.getElementById("display").value = "Error";
    }
}
