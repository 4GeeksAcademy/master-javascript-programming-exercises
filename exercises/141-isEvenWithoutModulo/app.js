function isEvenWithoutModulo(num) {
    // your code here
    let even = false;

    if (num > 0) {
        while (num != 0 && num != 1) {
            num = num - 2;
        }

        if (num == 0) {
            even = true;
        }
    } else if (num == 0) {
        even = true;
    } else if (num < 0) {
        num *= -1;

        while (num != 0 && num != 1) {
            num = num - 2;
        }

        if (num == 0) {
            even = true;
        }
    }

    return even;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
