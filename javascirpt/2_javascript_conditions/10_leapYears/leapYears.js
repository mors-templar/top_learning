const leapYears = function() {
    let isYearDivisibleByFour = year % 4 === 0;
    let isCentury = year % 100 === 0;
    let isYearDivisibleByFourHundred = year % 400 === 0;
    
    if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred))
    {return true;} 
    else {return false;}
};

// Do not edit below this line
module.exports = leapYears;
