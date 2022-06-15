/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var counter = 0;
    var max1 = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
            if (counter > max1) {
                max1 = counter;
            }
        } else {
            counter = 0;
        }
    }
    return max1
};