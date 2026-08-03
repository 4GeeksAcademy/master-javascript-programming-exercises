function getElementsAfter(array, n) {
  // your code here
  let arr = [];
  arr = array.slice(n+1, array.length);
  return arr;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
