/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  console.log(points);
  let outPut = [];
  let closest=[];
  for (let i = 0; i < points.length; i++) {
    let value = Math.pow(points[i][0],2) + Math.pow(points[i][1],2);
    outPut.push(value);
  }
  outPut.sort(function(a, b){return a - b});

  for (let i = 0; i < outPut.length; i++) {
    let count=0;
    for (let j = 0; j < points.length; j++) {
        count+=1;
       if(outPut[i]== Math.pow(points[j][0],2) +Math.pow(points[j][1],2)){
        closest.push(points[count-1]);
       }
      }  
  }
  return closest.slice(0,k);

};
