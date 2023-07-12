function getLengthOfLongestElement(arr) {
  // your code here
  if (arr.length === 0) {
    return 0;
  }

  let longestLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
    }
  }

  return longestLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
