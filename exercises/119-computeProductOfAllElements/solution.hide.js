function computeProductOfAllElements(arr) {
  // your code here
  let result = 1;
  if (arr.length < 1) return 0;
  for (let e of arr) {
    result *= e;
  }
  return result;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
