function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let min = 999999;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i ++) {
            if (min > arr[i] && typeof arr[i] == 'number') {
                min = arr[i];
            }
        }
    }

    if (min == 999999) {
      return 0;
    }

    return min;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
