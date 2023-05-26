function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  return arr1.concat(arr2).concat(arr3)
  
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
