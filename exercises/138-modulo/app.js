function modulo(num1, num2) {
    // your code here
         if (num2 === 0) {return("Error");}
    
        const quotient = Math.trunc(num1 / num2);
        const remainder = num1 - quotient * num2;
    
        if (num1 < 0 && remainder > 0) {
            return remainder - Math.abs(num2);
        }
        if (num1 > 0 && remainder < 0) {
            return remainder + Math.abs(num2);
        }
    
        return remainder;
    }


let output = modulo(25, 4);
console.log(output); // --> 1
