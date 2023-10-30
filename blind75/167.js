/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0, j=numbers.length-1; i < j;) {
        if (numbers[i]+numbers[j]>target){
            j--;
            continue;
        }
        else if(numbers[i]+numbers[j]<target){
            i++;
            continue;
        }
        return [i+1,j+1];
    }
};