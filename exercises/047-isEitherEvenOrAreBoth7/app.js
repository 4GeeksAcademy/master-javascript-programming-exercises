function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    let resultado = false

    if(num1 === 7 && num2 === 7) {
        resultado = true
    } 
    else if (num1 % 2 === 0 || num2 % 2 === 0) {
        resultado = true
    }
    else {
        resultado = false
    }

    return resultado
}


let output = isEitherEvenOrAreBoth7(3, 7);
console.log(output);
