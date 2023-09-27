// Function to calculate income tax
function calculateIncomeTax(annualIncome) {
    let tax = 0;
      // Calculate tax based on income
    if (annualIncome <= 288000) {
      tax = annualIncome * 0.10;
    } else if (annualIncome <= 388000) {
      tax = 288000 * 0.10 + (annualIncome - 288000) * 0.25;
    } else if (annualIncome <= 600000) {
      tax =
        288000 * 0.10 +
        100000 * 0.25 +
        (annualIncome - 388000) * 0.30;
    } else if (annualIncome <= 900000) {
      tax =
        288000 * 0.10 +
        100000 * 0.25 +
        5612000 * 0.30 +
        (annualIncome - 600000) * 0.325;
    } else {
      tax =
        288000 * 0.10 +
        100000 * 0.25 +
        5612000 * 0.30 +
        3600000 * 0.325 +
        (annualIncome - 900000) * 0.35;
    }
  
    // Apply personal tax relief
    const personalRelief = 28800;__
    tax -= personalRelief;
  
    return tax;
  }
  
  module.exports = calculateIncomeTax;
  