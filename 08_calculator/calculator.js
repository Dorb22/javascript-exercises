const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function(array) {
  let total = 0;
  if (array.length === 0) return total;
  else return total = array.reduce((sum, num) => {
      return sum += num;
  }, 0);
     
};

const multiply = function(array, product) {
return total = array.reduce((num, product) => {
  return product *= num;
}, 1); 
};

const power = (num1, num2) => num1 ** num2 ;

const factorial = function(num) {
	let answer = 1;
  if (num > 1){
    for (let i = 1; i <= num; i++){
    answer *= i;
  }
}
return answer;
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
