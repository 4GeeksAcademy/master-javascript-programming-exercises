function sumDigits(num) {
    // your code here
   numString = num.toString();
    let sum = 0;
    
        if (numString[0] === '-'){
            sum += -(parseInt(numString[1])*2);
        } else sum += parseInt(numString[0]);
    
    for(i = 1; i<numString.length;i++){
        sum += Number(numString[i]);
    }
    return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4
