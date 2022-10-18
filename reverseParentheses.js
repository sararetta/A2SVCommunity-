/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
    let arr=s.split('')
    let index=0;
    let stack=[]
    for (let j=0; j< arr.length; j++) {
          if(arr[j]==')'){
            let arr1=arr.slice(index+1,j).reverse()
            let index1=j-index
            arr.splice(index,index1+1)
            arr.splice(index,0,...arr1)
            j=-1
            index=0
            if(j==arr.length-1){
                break
            }
        }
        if(arr[j]=='('){
            index=arr.indexOf(arr[j],j)
        }
    }
    return arr.join('')
    
};
