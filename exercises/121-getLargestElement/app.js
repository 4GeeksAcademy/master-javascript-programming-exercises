function getLargestElement(arr) {
  // your code here
  let max = -999999999;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i ++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }

    return 0;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;