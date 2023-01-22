#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let welcome = chalkAnimation.rainbow('Welcome to Computation World!');
setTimeout(() => {
    welcome.stop();
}, 2000);
let calc = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Which Operation you want to Perform?",
            choices: ['Addition +', "Subtraction -", "multiplication *", "Division /", "Exponent ^", "Modulas %"]
        },
        { type: "input",
            name: "num1",
            message: "Enter first number!",
            validate(value) {
                if (!isNaN(parseFloat(value)) && isFinite(value) && (Number(value) > 0)) {
                    return true;
                }
                return 'Please enter a valid number greater than 0';
            }
        },
        {
            type: "input",
            name: "num2",
            message: "Enter second number! ",
            validate(value) {
                if (!isNaN(parseFloat(value)) && isFinite(value) && (Number(value) > 0)) {
                    return true;
                }
                return 'Please enter a valid number greater than 0';
            }
        }
    ]);
};
let calcAgain = () => {
    return inquirer.prompt([{
            name: 'answer',
            message: 'Do you want to perform Caculation Again ?',
            type: 'confirm'
        }]);
};
async function calculator(calc, calcAgain) {
    let answer = true;
    try {
        while (answer) {
            let msg = await calc();
            let num1 = Number(msg.num1);
            let num2 = Number(msg.num2);
            if (msg.operation == "Addition +") {
                console.log(`Sum is: ${num1 + num2}`);
            }
            else if (msg.operation == "Subtraction -") {
                console.log(`Subtraction is: ${num1 - num2}`);
            }
            else if (msg.operation == "multiplication *") {
                console.log(`Multiplication is: ${num1 * num2}`);
            }
            else if (msg.operation == "Division /") {
                console.log(`Division is: ${num1 / num2}`);
            }
            else if (msg.operation == "Exponent ^") {
                console.log(`Exponent is: ${num1 ** num2}`);
            }
            else {
                console.log(`Modulas is: ${num1 % num2}`);
            }
            let again = await calcAgain();
            answer = again.answer;
        }
    }
    catch (err) {
        console.log(err);
    }
}
setTimeout(() => {
    calculator(calc, calcAgain);
}, 2000);
