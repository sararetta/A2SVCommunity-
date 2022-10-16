/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let index;
    for(let i=0;i<nums.length;i++){
        let sumRight=0;
        let sumLeft=0;
        for(let j=i+1;j<nums.length;j++){
            sumRight+=nums[j];
        }
        let arr=nums.slice(0,i)
        for(let k=0;k<arr.length;k++){
            sumLeft+=arr[k];
        }
         if(sumLeft==sumRight){
            index=nums.indexOf(nums[i],i);
            if(index!=undefined){
                break;
            }
         }
    }
     return index==undefined?-1:index;
};

