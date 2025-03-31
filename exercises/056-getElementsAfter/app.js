function getElementsAfter(array, n) {
  // your code here
  return array.slice(n+1,array.length)
  
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
