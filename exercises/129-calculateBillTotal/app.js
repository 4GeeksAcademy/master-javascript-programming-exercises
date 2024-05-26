function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let total = preTaxAndTipAmount;

    total += preTaxAndTipAmount * 0.095;
    total += preTaxAndTipAmount * 0.15;

    return total;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
