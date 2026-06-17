function getElementsUpTo(array, n) {
  // your code here
  const neww = array.slice(0,n)
  return neww
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
