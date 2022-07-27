function filterOddElements(arr) {
  // your code here
  let result = [];
  for (let e of arr) {
    if (e % 2 !== 0) result.push(e);
  }
  return result;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
