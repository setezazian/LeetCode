/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var bottom = 1;
        var top = n;
        var middle = Math.floor((top + bottom) /2);
        
        while (top > (bottom + 1)) {
            if (isBadVersion(middle)) {
                top = middle;
            }
            else {
                bottom = middle;
            }
            middle = Math.floor((top + bottom) /2);
        }
        if (isBadVersion(bottom)) {
            return bottom;
        }
        return top;
    };
};