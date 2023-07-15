const removeFromArray = function(array, index1, index2, index3, index4) {

    let itemIndex1 = array.indexOf(index1);
    let itemIndex2 = array.indexOf(index2);
    let itemIndex3 = array.indexOf(index3);
    let itemIndex4 = array.indexOf(index4);

    let resultArray = array.slice(0, itemIndex1).concat(array.slice(itemIndex1 + 1));
    if (index2 == undefined) {
        return resultArray ;
    }

    resultArray = resultArray.slice(0, itemIndex2).concat(resultArray.slice(itemIndex2 + 1));

    if (index3 == undefined) {
        return resultArray;
    }

    resultArray = resultArray.slice(0, itemIndex3).concat(resultArray.slice(itemIndex3 + 1));

    if (index4 == undefined) {
        return resultArray;
    }

    resultArray = [];

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
