function isEvenWithoutModulo(num) {
    // your code here
    return (num & 1) === 0;
    
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
