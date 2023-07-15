const reverseString = function(originalString) {
    // split string into an array
    // reverse the array
    // join the array back into a string
    // return the reversed string

    originalString = originalString.split('');
    let reversedString = originalString.reverse();
    reversedString = reversedString.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
