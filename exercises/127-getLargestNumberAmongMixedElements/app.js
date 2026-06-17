function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let max = 0;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i ++) {
            if (max < arr[i] && typeof arr[i] == 'number') {
                max = arr[i];
            }
        }
    }

    if (max == 0) {
      return 0;
    }

    return max;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
