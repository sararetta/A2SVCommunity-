/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let answer=[]
    for (let i=0; i< temperatures.length; i++) {
        let nextTemp=0;
        if(i==temperatures.length-1){
            answer.push(0)
            break
        }
        for (let j=i+1; j< temperatures.length; j++) {
            if(temperatures[i]<temperatures[j]){
                nextTemp+=1;
                answer.push(nextTemp)
                break
            }
            else{
                nextTemp+=1
                if(j==temperatures.length-1){
                    answer.push(0)
                    break
                }
            }
        }
    }
    return answer  
};
