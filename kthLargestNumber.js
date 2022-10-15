/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        arr.push(parseInt(nums[i]))
    }
    arr.sort(function(a, b){return a - b});

    console.log(arr)

    console.log(arr[arr.length-k].toString())

    return arr[arr.length-k].toString()
    
};
