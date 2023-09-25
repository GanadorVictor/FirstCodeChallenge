const readline = require('readline');
const calculateIncomeTax = require('./salary');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your annual income (Ksh.): ', (annualIncome) => {
  annualIncome = parseFloat(annualIncome);

  if (isNaN(annualIncome)) {
    console.log('Invalid input. Please enter a valid number.');
  } else {
    const tax = calculateIncomeTax(annualIncome);
    console.log(`Your income tax is: Ksh. ${tax.toFixed(2)}`);
  }

  rl.close();
});
