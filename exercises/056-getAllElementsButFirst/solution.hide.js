function getAllElementsButFirst(array) {
  // your code here
  let elementsButFirst = array.slice(1);
  return elementsButFirst;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
