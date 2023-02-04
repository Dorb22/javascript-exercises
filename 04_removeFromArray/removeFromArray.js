const removeFromArray = function(numbers, ...remove) {
    for (;remove.length > 0;){
        const deletedNum = remove.shift();
        const ind = numbers.indexOf(deletedNum);
        if (ind > -1){
        numbers.splice(ind, 1);
        }
    }
    
    return numbers;
}


// Do not edit below this line
module.exports = removeFromArray;
