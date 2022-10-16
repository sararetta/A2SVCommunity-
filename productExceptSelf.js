/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let arr=[]
    for (let i=0; i< nums.length; i++) {
        let product=1;
        if(i==nums.length-2){
            product*=nums[i+1];
            let arr1=arr.slice(0,i);
            for (let k=0; k< arr1.length; k++) {
                product*=nums[k];
            }
            product==-0?arr.push(0):arr.push(product);

        }
        else if(i==nums.length-1){
            let arr1=arr.slice(0,i);
            for (let k=0; k< arr1.length; k++) {
                product*=nums[k];
            }
            product==-0?arr.push(0):arr.push(product);
        }
        else{
            for (let j=i+1; j< nums.length; j++) {
                product*=nums[j];
            }
            let arr1=arr.slice(0,i);
            for (let k=0; k< arr1.length; k++) {
                product*=nums[k];
            }
            product==-0?arr.push(0):arr.push(product);
        }
    }
    return arr;
    
};
