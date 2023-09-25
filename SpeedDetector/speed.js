// Define a function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      
      if (demeritPoints >= maxDemeritPoints) {
        return "License suspended";
      } else {
        return demeritPoints;
      }
    }
  }
  
  // Export the calculateDemeritPoints function
  module.exports = { calculateDemeritPoints };
  