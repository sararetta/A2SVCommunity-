/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let outPut = [];
  let closest=[]
  for (let i = 0; i < points.length; i++) {
    let value = points[i][0] ** 2 + points[i][1] ** 2;
    let distance = Math.sqrt(value);
    outPut.push(value)
  }
    
 outPut.sort(function(a, b){return a - b})
  for (let i = 0; i < outPut.length; i++) {
    let count=0;
    for (let j = 0; j < points.length; j++) {
        count+=1
       if(outPut[i]== points[j][0] ** 2 + points[j][1] ** 2){
        closest.push(points[count-1])
        break;
       }
      }  
  }

  return closest.slice(0,k)

};
