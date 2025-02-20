function joinArrays(arr1, arr2) {
  // your code here
  const array = arr1.concat(arr2)
  return array
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
