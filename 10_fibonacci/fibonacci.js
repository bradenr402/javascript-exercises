const fibonacci = function(fibNum) {
    if (fibNum < 0) return 'OOPS';

    let previous = 1;
    let beforePrevious = 0;

    for (let i = 2; i <= fibNum; i++) {
        let current = previous + beforePrevious;
        beforePrevious = previous;
        previous = current;
    }
    return previous;
};

// Do not edit below this line
module.exports = fibonacci;
