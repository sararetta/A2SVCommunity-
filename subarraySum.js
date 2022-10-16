/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    const arr=[];
    for (let i = 0; i < nums.length; i++) {
        let sum=0;
        for (let j = i; j < nums.length; j++) {
            sum+=nums[j];
            if(sum===k){
                arr.push(nums.slice(i,j+1));
            }
        }
    }
    return arr.length;
    
};
