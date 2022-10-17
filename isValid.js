/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let arr=s.split('');
    let arr1=[];
    let valid=false;
    for (let j=0; j< arr.length; j+=1) {
        if(arr[j]=='{'|| arr[j]=='[' ||arr[j]=='('){
            arr1.push(arr[j]);
        }
        else{
            if(arr1.length==0){
                return false;
            }
            else if(arr1.length==1 && j==arr.length-2){
                return false;
            }
            else{
                if(arr[j]==']' && arr1[arr1.length-1]=='[' || arr[j]=='}' && arr1[arr1.length-1]=='{' || arr[j]==')' && arr1[arr1.length-1]=='('){
                    arr1.pop();
                }
                 else{
                    return false
                }
            }
        }
    }
        return arr1.length==0?true:false;
};



