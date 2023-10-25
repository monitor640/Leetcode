/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let arr = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (arr.has(nums[i]))arr.set(nums[i],arr.get(nums[i])+1)
        else arr.set(nums[i],1);
    }
   let bucket = new Array(nums.length+1);
    for (let i = 0; i < bucket.length; i++) {
        bucket[i]=[];
    }
    arr.forEach((v,k)=>{
        bucket[v].push(k);
    });
    let ans = [];
    for (let i = bucket.length; i > 0; i--) {
        if (bucket[i] === undefined) continue;
        else{
            for (const n of bucket[i]){
                ans.push(n);
            }
        }
        if (ans.length===k) return ans;
    }
    



};
