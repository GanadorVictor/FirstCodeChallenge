// Create a readline interface for user input
const getGrade = require("./grading");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Prompt the user for a mark and call the getGrade function with the mark
rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
  console.log(getGrade(mark));
  rl.close();
});
