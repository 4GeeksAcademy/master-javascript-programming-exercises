function joinArrays(arr1, arr2) {
  // your code here
  for (let x in arr2) {
    arr1.push(arr2[x]);
  }
  
  return arr1;
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
