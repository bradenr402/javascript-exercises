const sumAll = function(first, second) {
    if (typeof first!== 'number' || typeof second!== 'number') return 'ERROR';

    let sum = 0;
    let parametersArray = [first, second];
    parametersArray.sort((a, b) => a - b);
    
    let start = parametersArray[0],
        end = parametersArray[1];

    if (start < 0 || end < 0) return 'ERROR';

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
