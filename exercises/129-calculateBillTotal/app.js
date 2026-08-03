function calculateBillTotal(nominal) {
    // your code here
    let tax = nominal*0.095;
    let tip = nominal*0.15;
    let total = nominal + tax + tip;
return total;
    
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
