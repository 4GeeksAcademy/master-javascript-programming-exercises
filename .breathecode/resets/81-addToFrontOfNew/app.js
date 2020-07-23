function addToFrontOfNew(arr, element) {
  // your code here
  newArray = [];
  newArray.unshift(element);
  return newArray.concat(arr);
}

input = [1, 2];
output = addToFrontOfNew(input, 3);
console.log(output);