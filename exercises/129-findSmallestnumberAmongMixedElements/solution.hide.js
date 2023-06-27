function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallestNumber = Infinity;

  for (let element of arr) {
    if (typeof element === 'number' && element < smallestNumber) {
      smallestNumber = element;
    }
  }

  if (smallestNumber === Infinity) {
    return 0;
  } else {
    return smallestNumber;
  }
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
