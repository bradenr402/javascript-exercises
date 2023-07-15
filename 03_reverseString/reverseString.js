const reverseString = function(originalString) {
    originalString = originalString.split('');
    let reversedString = originalString.reverse();
    reversedString = reversedString.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
