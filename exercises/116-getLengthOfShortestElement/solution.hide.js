function getLengthOfShortestElement(arr) {
  // your code here
  let aux = 9999999999;
  if (arr.length < 1) return 0;
  for (let e of arr) {
    if (e.length < aux) aux = e.length;
  }
  return aux;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
