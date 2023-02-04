const sumAll = function(first, last) {
    if (first > 0 && last > 0 && typeof last == 'number'){
    const numbers = [];
    if (first < last){
        for (i = first; i <= last; i++){
        numbers.push(i);
        }
    }

    else {
        for (i = first; i >= last; i--){
        numbers.push(i);
        }
    }
    
    const pairs = (numbers.length)/2;
    const sum = pairs * (first + last);
    return sum;
    }

    else return 'ERROR';

}


// Do not edit below this line
module.exports = sumAll;
