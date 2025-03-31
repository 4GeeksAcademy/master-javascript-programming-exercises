function multiplyBetween(num1, num2) {
    // your code here
    if(num2<num1){
        return 0;
    }else{
        let rango = [];
    for (let i = num1; i < num2; i++) {
        rango.push(i);
    }
    return rango.reduce((accumulator, initialValue) => accumulator * initialValue);
    }

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
