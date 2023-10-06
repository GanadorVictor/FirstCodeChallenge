// Read user input for annual income
const readline = require('readline');
// Import the calculateIncomeTax function from the salary module
const calculateIncomeTax = require('./salary');
// Create a readline interface for reading user input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Ask the user to enter their annual income
rl.question('Enter your annual income (Ksh.): ', (annualIncome) => {
   // Convert the user input to a float
  annualIncome = parseFloat(annualIncome);
 // Check if the user input is a valid number
  if (isNaN(annualIncome)) {
        // If the user input is not a valid number, log an error message
    console.log('Invalid input. Please enter a valid number.');
  } else {
    // If the user input is a valid number, calculate the income tax
    const tax = calculateIncomeTax(annualIncome);
    console.log(`Your income tax is: Ksh. ${tax.toFixed(2)}`);
  }

  rl.close();
});
