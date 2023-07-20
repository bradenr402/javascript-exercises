const palindromes = function (str) {
    const processedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedStr = processedString.split('').reverse().join('');
    return processedString === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
