/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
    let nums=[];
    for (let i=0; i<queries.length; i++) {
        let number=0;
            for (let j=queries[i][0]; j<=queries[i][1]; j++) {
                number=number^arr[j];
            }
            nums.push(number);
    }

    // console.log(nums);
    return nums;
    
};
