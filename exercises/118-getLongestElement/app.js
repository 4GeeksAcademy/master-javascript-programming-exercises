function getLongestElement(arr) {
    // your code here
    let greater = '';

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (greater.length < arr[i].length) {
                greater = arr[i].toString();
            }
        }
    }

    return greater;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
