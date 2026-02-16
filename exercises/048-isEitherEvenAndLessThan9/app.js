function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    let result = false;

    if(num1 < 9 && num2 < 9){
        result = true
    } else {
        result = false
    }

    return result
}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
