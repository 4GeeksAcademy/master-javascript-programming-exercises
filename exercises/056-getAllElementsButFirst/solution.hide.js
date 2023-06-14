function getAllElementsButFirst(array) {
  // your code here
  let newArray = array.slice(1);
  return newArray;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
console.log(input);  // --> [1, 2, 3, 4]
