function modulo(num1, num2) {
    // your code here
    let mod = 0;

    if (num1 == 0) {
        mod = 0;
    }

    if (num2 == 0) {
        mod = NaN;
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        mod = NaN;
    }

    if (num1 > num2 && num1 != 0 && num2 != 0) {
        for (let i = 0; i <= num1; i++) {
            num1 -= num2;
            if (num1 < num2) {
                mod = num1;
            }
        } 
    } else if (num1 < 0 && num1 != 0 && num2 != 0) {
        num1 *= -1;

        if (num1 < num2) {
            mod = num1 * (-1);
        }

        if (num1 > num2) {
            for (let i = 0; i <= num1; i++) {
                num1 -= num2;
                if (num1 < num2) {
                    num1 *= -1;
                    mod = num1;
                }
            } 
        }
        
    } else if (num1 < num2 && num1 != 0 && num2 != 0) {
        mod = num1;
    }

    return mod;
}

let output = modulo(25, 4);
console.log(output); // --> 1