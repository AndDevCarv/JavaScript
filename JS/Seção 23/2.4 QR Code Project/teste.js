import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers.first_name);
});

