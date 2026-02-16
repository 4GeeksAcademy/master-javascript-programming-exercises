// Write your function here
function isEitherEven (num1, num2) {

    let pares = false;

    if (num1 % 2 === 0 || num2 % 2 === 0 ) {
        pares = true;
    } else {
        pares = false;
    }

    return pares
}

isEitherEven(1, 4)