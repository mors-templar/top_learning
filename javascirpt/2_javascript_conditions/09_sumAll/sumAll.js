const sumAll = function(start , end) {
    let sum = 0;
    if(start > end && (start > 0 || end > 0)){
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    return sum;
    }
    else {return "Error"}

};

// Do not edit below this line
module.exports = sumAll;
