function multiply(num1, num2) {
    // your code here
    let total = 0;

    if (num1 > 0) {
        for (let i = 0; i < num1; i++) {
            total += num2;
        }
    } else if (num1 < 0) {
        for (let i = num1; i < 0; i++) {
            total += num2;
        }

        total = Math.abs(total);
    }

    if (total == -0) {
        total = 0;
    }

    return total;
    
}

let output = multiply(4, 7);
console.log(output); // --> 28