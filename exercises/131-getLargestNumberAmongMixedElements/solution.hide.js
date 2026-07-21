function getLargestNumberAmongMixedElements(arr) {
  // your code here
  let largestNumber = -Infinity;

  for (let element of arr) {
    if (typeof element === 'number' && element > largestNumber) {
      largestNumber = element;
    }
  }

  if (largestNumber === -Infinity) {
    return 0;
  } else {
    return largestNumber;
  }
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
