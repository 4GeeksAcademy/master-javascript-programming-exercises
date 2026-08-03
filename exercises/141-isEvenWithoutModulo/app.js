function isEvenWithoutModulo(num) {
    // your code here

    num = Math.abs(num);
    while (num>2){
        num += -2;
    }
    if (num === 1){
        return false
    } else return true;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
