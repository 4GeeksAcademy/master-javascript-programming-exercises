function getLargestElement(arr) {
  // your code here
  let aux = 0;
  if (arr.length < 1) return 0;
  for (let e of arr) {
    if (aux < e) aux = e;
  }
  return aux;
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
