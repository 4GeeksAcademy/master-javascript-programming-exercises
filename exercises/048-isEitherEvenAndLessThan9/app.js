function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    return ((num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9));

}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
