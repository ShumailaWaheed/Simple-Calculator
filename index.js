#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter first number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division", "exponentiation", "modules"]
    },
]);
// Conditional Statement
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "exponentiation") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "modules") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please selact a valid opreator");
}
