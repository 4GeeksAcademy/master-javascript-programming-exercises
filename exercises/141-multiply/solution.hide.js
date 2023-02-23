function multiply(num1, num2) {
    // your code here
    let aux = 0;
    if (num1 < 0 && num2 < 0){
        for (let times = 0; times < Math.abs(num2); times++) aux += num1;
        return Math.abs(aux);
    }
    else if (num1 < 0) {
        for (let times = 0; times < num2; times++) aux += num1;
    } else {
        for (let times = 0; times < num1; times++) aux += num2;
    }
    return aux;
}

let output = multiply(2, -7);
console.log(output); // --> - 14
