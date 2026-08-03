function isOddWithoutModulo(num) {
    // your code here
    let odd = false;

    if (num > 0) {
        while (num != 0 && num != 1) {
            num = num - 2;
        }

        if (num == 1) {
            odd = true;
        }
    } else if (num < 0) {
        num *= -1;

        while (num != 0 && num != 1) {
            num = num - 2;
        }

        if (num == 1) {
            odd = true;
        }
    }

    return odd;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
