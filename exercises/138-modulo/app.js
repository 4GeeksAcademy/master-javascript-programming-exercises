function modulo(num1, num2) {
    // your code here
    if(num1==0){
        return 0;
    }else if(num2==0 || num1==NaN || num2==NaN){
        return NaN
    }
    let mod = num1 - num2 * Math.trunc(num1 / num2);
    return mod === 0 ? 0 : (num1 < 0 && mod > 0) ? mod - Math.abs(num2) : mod;

    
}

let output = modulo(25, 4);
console.log(output); // --> 1
