function getLongestElement(arr) {
  // your code here
  let aux = '';
  if (arr.length < 1) return '';
  for (let e of arr) {
    if (e.length > aux.length) aux = e;
  }
  return aux;
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(typeof ''); // --> 'three'
