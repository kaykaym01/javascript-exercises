const reverseString = function(str) {
    let i = str.length-1;
    let result = "";

    while (i >= 0){
        result += str.charAt(i);
        i--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
