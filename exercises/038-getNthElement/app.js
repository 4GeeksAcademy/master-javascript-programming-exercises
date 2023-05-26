function getNthElement(array, n) {
  // Add your code after this line
  if (array.length === 0) {
    return undefined
  } else {
    return array[n]
  }
  
}

let output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
