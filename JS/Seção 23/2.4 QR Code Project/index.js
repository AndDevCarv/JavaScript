/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";

const questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});