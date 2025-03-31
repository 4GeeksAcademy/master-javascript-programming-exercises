function isOddWithoutModulo(num) {
    // your code here
    return (num & 1) === 1;
}

let output = isOddWithoutModulo(2);
console.log(output); // --> true
