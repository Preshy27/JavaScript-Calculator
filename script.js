let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let operator = prompt("Choose an operator: +, -, *, /")

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator === "+") {
    prompt(num1 +num2);
}

else if (operator === "-") {
    prompt(num1 - num2);
}

else if (operator === "*") {
    prompt(num1 * num2);
}

else if (operator === "/") {
    prompt(num1 / num2);
}

else {
    prompt("Invalid operator chosen!");
}