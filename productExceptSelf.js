/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let arr=[]
    let prevElement=1;
    for (let i=0; i< nums.length; i++) {
        let product=1;
            for (let j=i+1; j< nums.length; j++) {
                product*=nums[j];
            }
            if(i!=0){
                let index=nums[i-1];
                prevElement=prevElement*index;
            }
            prevElement==-0?prevElement=0:prevElement=prevElement;
            product==-0?arr.push(0):arr.push(product*prevElement);
    }
    return arr;
};
