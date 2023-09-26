// This is the function for grading the marks

const prompt = require('prompt-sync')();
 // Get student mark from user
function getGrade() {
  let mark = prompt('Enter the student mark')
    if (mark >= 80 && mark <= 100) {
      return 'A';
    } else if (mark >= 60 && mark <= 79) {
      return 'B';
    } else if (mark >= 50 && mark <= 59) {
      return 'C';
    } else if (mark >= 40 && mark <= 49) {
      return 'D';
    } else if (mark >= 0 && mark < 40) {
      return 'E';
    } else {
      return 'Invalid Input: Mark should be between 0 and 100.';
    }
  } 
console.log(getGrade());
  
  
  