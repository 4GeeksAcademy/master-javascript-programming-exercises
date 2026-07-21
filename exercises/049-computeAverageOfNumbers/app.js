// Write your function here
function computeAverageOfNumbers(arr){
    let sum = 0;
    if (arr.length == 0){
        return 0;
    }
    for (let num = 0; num < arr.length; num++){
        sum += arr[num];
        
    }
    return sum/arr.length;
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);