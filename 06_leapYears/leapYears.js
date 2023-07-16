const leapYears = function(year) {
    // divisible by 4
    // not divisible by 400, unless divisible by 400

    /* use an 'if' statement and '&&' 
    to make sure all the conditions are 
    met properly */

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
