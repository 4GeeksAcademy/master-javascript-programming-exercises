function computeAverageOfNumbers(array) {
    let total = 0

    if (array.length === 0) {
        return 0
    }

    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total / array.length
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);