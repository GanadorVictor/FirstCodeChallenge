const readline = require('readline');
const { calculateDemeritPoints } = require('./speed');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the car's speed (in km/h): ", (speed) => {
  speed = parseFloat(speed);
  if (!isNaN(speed)) {
    const demeritPoints = calculateDemeritPoints(speed);
    console.log(`Points: ${demeritPoints}`);
  } else {
    console.log("Please enter a valid speed.");
  }
  rl.close();
});
