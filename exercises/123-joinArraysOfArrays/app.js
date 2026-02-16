function joinArrayOfArrays(arr) {
  // your code here
  let concatenado = ""

  concatenado = arr[0].concat(arr[1], arr[2])

  return concatenado
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
