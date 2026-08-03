// Write your function here
function computeAverageOfNumbers(anArray){
    if (anArray.length ===0) {return 0;}

    let sum = 0;
    for (i in anArray){
        sum += anArray[i];
    }
    return sum/anArray.length;
}


let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3