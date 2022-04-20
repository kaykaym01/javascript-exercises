const sumAll = function(start, stop) {
    if (start < 0 || stop < 0 || typeof start != "number" || typeof stop != "number"){
        return "ERROR";
    }

    let sum = 0;
    let min = start;
    let max = stop;

    if (start > stop){
        min = stop;
        max = start;
    }

    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
