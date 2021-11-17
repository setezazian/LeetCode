/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var x = nums.length;
    for (var k = 0; k < nums.length; k++) {
        if (nums[k] >= 0) {
            x = k;
            break;
        }
    }
    
    var j = x;
    var i = x - 1;
    var result = [];
    
    while (i >= 0 && j < nums.length) {
        if (-nums[i] < nums[j]) {
            result.push(nums[i] * nums[i]);
            i--;       
        } else {
            result.push(nums[j] * nums[j]);
            j++;
        }
    }
    while (i >= 0) {
        result.push(nums[i] * nums[i]);
        i--;
    }
    while (j < nums.length) {
        result.push(nums[j] * nums[j]);
        j++;
    }
    
    
    return result;
};