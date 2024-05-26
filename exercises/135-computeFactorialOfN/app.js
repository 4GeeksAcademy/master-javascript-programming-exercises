function computeFactorialOfN(n) {
    // your code here
    let total = 1;

    for (let i = 1; i <= n; i++) {
        total *= i;
    }

    return total;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
