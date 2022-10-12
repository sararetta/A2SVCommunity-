'use strict';

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
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
     let numSwaps =0;
    let sortedArray=[...a]
    for(let i=0;i<sortedArray.length;i++){
       let swapped=false;
        for(let j=0;j<sortedArray.length-1;j++){
            if(sortedArray[j]>sortedArray[j+1]){
               let secondValue=sortedArray[j]
                sortedArray[j]=sortedArray[j+1]
                sortedArray[j+1]=secondValue
                swapped=true
                if (swapped){
                    numSwaps +=1
                }
            }

        }
        
    }

    console.log(`Array is sorted in ${numSwaps } swaps.`)
    console.log(`First Element: ${sortedArray[0]}`)
    console.log(`Last Element: ${sortedArray[sortedArray.length-1]}`)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
