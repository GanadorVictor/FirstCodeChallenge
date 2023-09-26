// Read user input for speed
const readline = require('readline');
const { calculateDemeritPoints } = require('./speed');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the car's speed (in km/h): ", (speed) => {
  speed = parseFloat(speed);
  // Check if speed is a valid number
  if (!isNaN(speed)) {
      // Calculate demerit points based on speed
    const demeritPoints = calculateDemeritPoints(speed);
       // Log demerit points to console
    console.log(`Points: ${demeritPoints}`);
  } else {
    console.log("Please enter a valid speed.");
  }
  rl.close();
});
