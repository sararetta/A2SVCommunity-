'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    let highestNumber=0;
    let result=[]
    

    for(let i=0;i<arr.length;i++){
        if(arr[i]>highestNumber){
          highestNumber=arr[i]   
        }

    }
    
    for(let i=0;i<=highestNumber;i++){
        result.push(i)

    }
    for(let i=0;i<result.length;i++){
        let count=0
        for(let j=0;j<arr.length;j++){
            if(result[i]==arr[j]){
                count+=1
            }
    
        }
        result[i]=count

    }
    if(result.length<arr.length){
        result.push(0)
    }
     return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
