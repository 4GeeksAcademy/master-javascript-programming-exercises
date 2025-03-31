function computeSumBetween(num1, num2) {
    // your code here
    if (num2 < num1) {
        return 0;
    } else {
        let arr = []
        for (let i = num1; i < num2; i++) {
            arr.push(i);
        }
        return arr.reduce((accumulator, initialValue) => accumulator + initialValue);
    }

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
