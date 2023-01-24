#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

//chalk animation for animation the welcome note
chalkAnimation.rainbow("Welcome to Number Gussing Game");

// after welcome note another anyc function will be called which is settimeout after 1 second and diplay the text as an indication to start the game
setTimeout(() => {
  console.log("Let's start the Game");
}, 1000);

//types of result and confirmation
interface results {
  num: number;
}
interface confirmations {
  confirm: boolean;
}

//async function having all logic.
async function gussingGame() {
  let allow = true;
  while (allow) {
    let actual_number = Math.floor(Math.random() * 10) + 1;
    let tries = 3;

    while (tries > 0) {
      let result: results = await inquirer.prompt([
        {
          type: "number",
          name: "num",
          message: "Guess the number in range(1-10)!",
        },
      ]);

      if (result.num == actual_number) {
        console.log(
          chalk.green("Woah! You have guessed right number, Game Ended!")
        );
        tries = 0;
      } else {
        console.log(chalk.red("You Guessed Wrong number!"));
        console.log(
          actual_number > result.num
            ? chalk.blue("Think higher")
            : chalk.blue("Think Lower")
        );
        tries--;
        console.log(
          tries > 0
            ? chalk.yellow(`Only ${tries} tries left.`)
            : chalk.red("Game Ended")
        );
      }
    }
    let confirmation: confirmations = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "Do you wanna play again? ",
      },
    ]);
    allow = confirmation.confirm ? true : false;
  }
}
setTimeout(() => {
  gussingGame();
}, 2000);
