function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if (num1 < 9 && num2 < 9 && (num1 % 2 ==0||num2 % 2 ==0) ){
        return true
    } else {
        return false
    }
}

let output1 = isEitherEvenAndLessThan9(2, 4);
console.log(output1); // --> true

let output2 = isEitherEvenAndLessThan9(72, 2);
console.log(output2); // --> false
