function squareElements(arr) {
  // your code here
  let result = [];
  for (let e of arr) {
    result.push(e * e);
  }
  return result;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
