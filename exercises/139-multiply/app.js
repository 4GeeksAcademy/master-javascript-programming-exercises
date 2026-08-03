function multiply(num1, num2) {
    // your code here
    if (num1 === 0 || num2 === 0) {
        return 0;
    }

    const esNegativo = (num1 < 0) !== (num2 < 0);

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    let product = 0;

    for (let i = 0; i < num2; i++) {
        product += num1;
    }

    return esNegativo ? -product : product;
}



let output = multiply(-4, 7);
console.log(output); // --> 28
