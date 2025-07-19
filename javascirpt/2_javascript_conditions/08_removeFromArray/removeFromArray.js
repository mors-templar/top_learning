const removeFromArray = function(arr , ...num ) {
    //return arr.filter(element => element !== num)
    return arr.filter(element => !num.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
