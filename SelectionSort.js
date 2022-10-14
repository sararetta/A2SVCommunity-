/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
 
  selectionSort(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      let min = arr[i];
      for(let j=i+1;j<arr.length;j++){
          if (min > arr[j]) {
            min = arr[j];
          }
        }
       
        let temp = arr[i];
        let index = arr.indexOf(min,i);
        arr[i] = min;
        arr[index] = temp;
    }
    return arr
  }

  //Function to sort the array using selection sort algorithm.
  select(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      let min = arr[i];
      console.log(arr[i])
      for(let j=i+1;j<arr.length;j++){
          if (min > arr[j]) {
            min = arr[j];
          }
        }
       
        let temp = arr[i];
        let index = arr.indexOf(min,i);
        arr[i] = min;
        arr[index] = temp;
    }
    return arr
  }
}
