function multiplyBetween(num1, num2) {
    // your code here
    let total = 1;

    if (num1 < num2) {
        for (let i = num1; i < num2; i++) {
            total *= i;
        }

        return total;
    }

    return 0;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
