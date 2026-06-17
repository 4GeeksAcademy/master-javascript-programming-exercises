function findSmallestElement(arr) {
    // your code here
    let min = 999999;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i ++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    }

    return 0;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1