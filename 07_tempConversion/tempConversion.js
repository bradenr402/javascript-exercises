const convertToCelsius = function(fahrenheitTemp) {
    // (temp - 32) * 5/9
    
    let tempToCelsius = (fahrenheitTemp - 32) * 5/9;
    return (Math.round(tempToCelsius * 10) / 10);
};

const convertToFahrenheit = function(celsiusTemp) {
    // (temp * 9/5 + 32) 
    
    let tempToFahrenheit = (celsiusTemp * 9/5 + 32);
    return (Math.round(tempToFahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
