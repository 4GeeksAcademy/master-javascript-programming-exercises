function getElementsUpTo(array, n) {
  // your code here
  let arr = [];
  arr = array.slice(0, n);
  return arr;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
