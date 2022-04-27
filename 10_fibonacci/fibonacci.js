/**
 * 4
 *  1  2  3  4
 * [1, 1, 2, 3] 
 * if (n < 3) -- return fib[n];
 * while (fib.length < n){
 *  fib[fib.length] = fib[fib.length-1] + fib[fib.length-2];
 * }
 * return fib[fib.length-1]
 * 
 * 
 * 
 * 
 * @param {*} n 
 * @returns 
 */




const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0){
        return "OOPS";
    } 

    let fib = [1,1];
    while (fib.length < n){
        fib[fib.length] = fib[fib.length-1] + fib[fib.length-2];
    }
    return fib[n-1];

};

// Do not edit below this line
module.exports = fibonacci;
