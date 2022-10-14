/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sortedArr=nums.sort()
    let outPut=[]
    for(let i=0;i<sortedArr.length;i++){
        if(target==sortedArr[i]){
            outPut.push(sortedArr.indexOf(sortedArr[i],i))
        }
    }

    return outPut
    
};
