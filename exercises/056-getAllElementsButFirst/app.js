function getAllElementsButFirst(array) {
  // your code here
  return array.slice(1,)
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
