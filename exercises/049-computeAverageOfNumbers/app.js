// Write your function here
function computeAverageOfNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else {
        let total = 0;
        for (i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total / numbers.length;
    }
}