/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let arr=[]
    for (let j=0; j< nums1.length; j++) {
        let index=nums2.indexOf(nums1[j])
       if(nums1[j]<nums2[index+1]){
        arr.push(nums2[index+1])
       }
       else{
        arr.push(-1)
       }
    }
    return arr 
};
