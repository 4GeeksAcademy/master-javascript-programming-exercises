function getElementsAfter(array, n) {
  // your code here
  let newArr = array.slice(n+1);
  return newArr;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
