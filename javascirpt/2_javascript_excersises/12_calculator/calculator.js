const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	a.reduce((total, current) => total + current, 0);
};

const multiply = function(a) {
  return a.reduce((prod,curr) => total * curr);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if (a < 0) {
    return undefined; 
  } else if (a === 0 || a === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = a; i > 1; i--) {
      fact = fact * i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
