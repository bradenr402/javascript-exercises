const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        args[i] = array.indexOf(args[i]);
        if (args[i] === -1) continue;
        array.splice(args[i], 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
