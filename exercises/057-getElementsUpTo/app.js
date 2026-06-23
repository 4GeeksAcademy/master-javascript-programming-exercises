function getElementsUpTo(array, n) {
  // your code here
  let newArr = array.slice(array,n)
  return newArr;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
