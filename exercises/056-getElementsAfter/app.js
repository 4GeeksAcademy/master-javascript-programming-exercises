function getElementsAfter(array, n) {
  // your code here
  const neww = array.slice(n + 1)
  return neww
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
