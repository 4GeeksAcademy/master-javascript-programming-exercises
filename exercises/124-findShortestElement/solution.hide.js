function findShortestElement(arr) {
  // your code here
  if (arr.length < 1) return '';
  
  let aux = '999999999999999999999999999999';
  for (let e of arr) {
    if (e.length < aux.length) aux = e;
  }
  return aux;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
