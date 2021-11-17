/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // square each element in the list
    // sort the squared list
    var squared = [];
    for (var i = 0; i< nums.length; i++) {
        squared.push(nums[i]*nums[i]);
    };
    for (var j = 1; j < squared.length; j++) {
        for (var i = 1; i < squared.length; i++) {
              if (squared[i] < squared[i - 1]) {
                var temp = squared[i];
                squared[i] = squared[i -1];
                squared[i - 1] = temp;
            };  
        };        
    }; 
    return squared;
};