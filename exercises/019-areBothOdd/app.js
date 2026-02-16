// Write your function here
function areBothOdd(num1, num2) {

    let pares = false;

    if(num1 % 2 === 0 && num2 % 2 === 0) {
        pares = false
    } 
    
    if(num1 % 2 === 0 || num2 % 2 === 0) {
        pares = false
    }
    else {
        pares = true
    }

    return pares
}

areBothOdd(1, 3)