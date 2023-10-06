// grading.js

function getGrade(mark) {
   // Check if mark is a number 
  if (isNaN(mark)){
    console.log("Please enter your mark");
  }
  // Check if mark is within valid range
     else if (mark<0 || mark>100){
      console.log("Invalid input");
    }
     // Check if mark is greater than or equal to 80
    else if (mark > 79) {
      return 'A';
    }
    // Check if mark is greater than or equal to 60 and less than or equal to 79
    else if (mark >= 60 && mark <= 79) {
      return 'B';
    }
      // Check if mark is greater than or equal to 50 and less than ir equal to 59
    else if (mark >= 50 && mark <= 59) {
      return 'C';
    }
     // Check if mark is greater than or equal to 40 and less than or equal to 49
    else if (mark >= 40 && mark <= 49) {
      return 'D';
    }
    // If mark is less than 40, return 'E'
    else {
      return 'E';
    }
  }
  
  module.exports = getGrade;
  