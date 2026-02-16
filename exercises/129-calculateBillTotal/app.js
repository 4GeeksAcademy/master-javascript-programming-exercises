function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = preTaxAndTipAmount * 0.15;
    let tip = preTaxAndTipAmount * 0.095;
    let total = preTaxAndTipAmount + tax + tip;
    return total
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
