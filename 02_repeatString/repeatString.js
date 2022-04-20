const repeatString = function(str, numRepeat) {
    if (numRepeat < 0){
        return "ERROR";
    } else if (numRepeat == 0 || str == ""){
        return "";
    }

    let result = "";
    for (let i = 0; i < numRepeat; i++){
        result += str;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
