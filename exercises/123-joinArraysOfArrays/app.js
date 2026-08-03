function joinArrayOfArrays(arr) {
  // your code here
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j in arr[i]) {
      console.log(arr[i][j]);
      newArr.push(arr[i][j]);
    }
  }

  return newArr;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
