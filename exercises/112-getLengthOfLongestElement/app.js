function getLengthOfLongestElement(arr) {
    // Your code here
    let count = 0;
    let greater = 0;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            for (let j in arr[i]) {
                count++;
            }
            if (count > greater) {
                greater = count;
            }
            count = 0;
        }
    }

    return greater;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
