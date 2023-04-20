function removeFromBackOfNew(arr) {
  // your code here
  new_array = arr.filter(arr)
  return new_array
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
