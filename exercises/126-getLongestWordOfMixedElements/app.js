function getLongestWordOfMixedElements(arr) {
    // your code here
    let max = '';

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i ++) {
            if (max < arr[i] && typeof arr[i] == 'string') {
                max = arr[i];
            }
        }
    }

    if (max == '') {
      return '';
    }

    return max;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
