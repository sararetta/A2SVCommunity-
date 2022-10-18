/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let arr=[]
    for (let j=0; j< tokens.length; j++) {
      if(tokens[j]!=="+"&& tokens[j]!=='-' && tokens[j]!=='*' && tokens[j]!=='/'){
        arr.push(tokens[j])
      }
      else{
        if(tokens[j]=="+"){
            let arr1=Number(arr[arr.length-2])+Number(arr[arr.length-1])
            arr.pop()
            arr.pop()
            arr.push(arr1)
        }
        else if(tokens[j]=="-"){
            let arr1=Number(arr[arr.length-2])-Number(arr[arr.length-1])
            arr.pop()
            arr.pop()
            arr.push(arr1)

        }
        else if(tokens[j]=="*"){
            let arr1=Number(arr[arr.length-2])*Number(arr[arr.length-1])
            arr.pop()
            arr.pop()
            arr.push(arr1)
        }
        else{
         let arr1=parseInt(Number(arr[arr.length-2])/Number(arr[arr.length-1]))==0?0:parseInt(Number(arr[arr.length-2])/Number(arr[arr.length-1]))
            arr.pop()
            arr.pop()
            arr.push(arr1)
        }
      }
    }
     return arr[0]?parseInt(arr[0]):0
};
