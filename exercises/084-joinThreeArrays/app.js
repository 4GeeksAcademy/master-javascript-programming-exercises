function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  let arr = [];

  arr = arr.concat(arr1);
  arr = arr.concat(arr2);
  arr = arr.concat(arr3);

  return arr;
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); 