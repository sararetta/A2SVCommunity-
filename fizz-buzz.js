//  Input: n = 3
//Output: ["1","2","Fizz"]
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true
 

var fizzBuzz = function(n) {
    let outPut=[]
    for (i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            outPut.push("FizzBuzz")

        }
        else if(i%3==0){
            outPut.push("Fizz")

        }
        else if(i%5==0){
            outPut.push("Buzz")

        }
        else{
            outPut.push(`${i}`)
          
        }

    }

    return outPut
    
};



console.log(fizzBuzz(15))