/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var inputString = x.toString();
    var reversedInput = inputString.split('').reverse().join('');
    if (inputString === reversedInput) {
        return true;
    }
    return false;
};