/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (nums.length === 0){
        return 0;
    }
    var counter = 0;
    var countsList = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
            countsList.push(counter);
        } else {
            counter = 0;
        }
    }
    if (countsList.length === 0) {
        return 0;
    }
    return Math.max(...countsList);
};