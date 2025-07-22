const repeatString = function(strTOrepeat , numTOrepeat) {
    if (numTOrepeat < 0) return "ERROR";
    let outstr = "";
    for(let x = 0;x < numTOrepeat;x++){
        outstr +=strTOrepeat;
    }
    return outstr;
};

// Do not edit below this line
module.exports = repeatString;
