/**
 *     
 * racecar
 * 
 * v
 * Racecar!
 *        ^
 * 
 * 
 * 
 * 
 * @param {*} str 
 */
const palindromes = function (str) {
    str = str.toLowerCase();
    let p1 = 0;
    let p2 = str.length-1;

    while (p1 <= p2){
        let charP1 = str.charAt(p1);
        let charP2 = str.charAt(p2);

        if (!isAlpha(charP1)){
            p1++;
        } else if (!isAlpha(charP2)){
            p2--;
        } else if (str.charAt(p1) != str.charAt(p2)){
            return false;
        } else {
            p1++;
            p2--;
        }
    }
    return true;
};

const isAlpha = function(ch){
    return /^[a-z]$/i.test(ch);
  }


// Do not edit below this line
module.exports = palindromes;
