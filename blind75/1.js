/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let len = nums.length;
    for (let i = 0; i < len-1; i++) {
        if (nums[i] > target) continue;
        for (let j = i+1; j < len; j++) {
            if (nums[i]+nums[j]===target) return [i,j];
        }
    }
};

//should have done 1 pass and saved the seen numbers, then found the difference between target and current number and look for it in the seen numbers