/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    let arr=[];
    let outPut=[];
    for(let i=0;i<intervals.length;i++){
        for(let j=intervals[i][0];j<=intervals[i][1];j++){
            let count=0;
            count+=j;
            arr.push(count) ;
        }
    }
    let startingIndex=0;
    arr.sort(function(a, b){return a - b});
    for(let i=0;i<intervals.length;i++){
         let count=0;
        for(let j=0;j<arr.length;j++){
            if(intervals[i][1]==arr[j]){
                count+=1;
            }
        }

        if(count==1){
            outPut.push([arr[startingIndex],intervals[i][1]]);
            startingIndex=arr.lastIndexOf(intervals[i][1])+1;
        }
    }
    return outPut;
    
};
