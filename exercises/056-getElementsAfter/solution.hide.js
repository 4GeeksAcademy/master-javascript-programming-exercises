function getElementsAfter(array, n) {
  // your code here
  let elementsAfter = array.slice(n + 1);
  return elementsAfter;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
