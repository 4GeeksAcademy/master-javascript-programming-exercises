// Write your function here
function computeAverageOfNumbers(arr) {
    if (arr.length === 0) {
        return 0
    }

    let total = 0;
    for (let x in arr) {
        total += arr[x];
    }

    return total / arr.length;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);