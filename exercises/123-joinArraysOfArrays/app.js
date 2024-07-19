function joinArrayOfArrays(arr) {
  // your code here

  let newArray = arr.reduce(function(a, b){return a.concat(b);})
  return newArray;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
