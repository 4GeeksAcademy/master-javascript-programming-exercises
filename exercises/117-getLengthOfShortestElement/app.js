function getLengthOfShortestElement(arr) {
    // your code here
    let count = 0;
    let min = 999999;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            for (let j in arr[i]) {
                count++;
            }
            if (count < min) {
                min = count;
            }
            count = 0;
        }

        return min;
    }

    return 0;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
