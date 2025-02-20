function isOddWithoutModulo(num) {
    // your code here
    if (num === 0) {
        return false;
    }
    num = Math.abs(num);
    while (num>2){
        num += -2;
    }
    if (num === 1){
        return true
    } else return false;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
