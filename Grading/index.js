// index.js
// Readline module for reading input from the user
const readline = require('readline');
const getGrade = require('./grading');
// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Ask the user for their mark
rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
   // Call the function to calculate the grade
  console.log(getGrade(mark));
  rl.close();
});
