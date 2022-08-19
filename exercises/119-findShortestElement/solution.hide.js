function findShortestElement(arr) {
  // your code here
  let aux = '99999999999999999999999999999999999999999999999';
  if (arr.length < 1) return '';
  for (let e of arr) {
    if (e.length < aux.length) aux = e;
  }
  return aux;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
