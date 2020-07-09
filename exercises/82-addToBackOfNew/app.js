function addToBackOfNew(arr, element) {
  // your code here
newArray = [element];
newArray = arr.concat(newArray);
return newArray;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(output);