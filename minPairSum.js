/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    nums.sort(function(a, b){return a - b});
    let arr=[]

    for (let i=0;i<(nums.length)/2;i++){
        arr.push(nums[i]+nums[nums.length-(i+1)])  
    }
    return Math.max(...arr)
    
};
