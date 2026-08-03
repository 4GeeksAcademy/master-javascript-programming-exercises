function multiplyBetween(num1, num2) {
    // your code here
    if(num2<=num1){return 0;}
    let product = 1
for (i = num1; i < num2;i++){
    product *= i;
}
return product;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
