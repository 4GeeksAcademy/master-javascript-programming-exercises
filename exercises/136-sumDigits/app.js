function sumDigits(num) {
    // your code here
    let total = 0;
    let numStr = num.toString();
    let isNegative = false;

    for (let i in numStr) {
        if (numStr.charAt(i) == '-') {
            isNegative = true;
        } else if (isNegative) {
            total -= Number(numStr.charAt(i));
            isNegative = false;
        } else {
            total += Number(numStr.charAt(i));
        }
    }

    return total;
}

let output = sumDigits(-316);
console.log(output); // --> 4
