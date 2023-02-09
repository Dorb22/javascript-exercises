const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function(array) {
  let total = 0;
  if (array.length === 0) return total;
  else return total = array.reduce((sum, num) => {
      return sum += num;
  }, 0);
     
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
