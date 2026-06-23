function computeSumOfAllElements(arr) {
  // your code here
  let aux = 0;
  for (let e of arr) {
    aux += e;
  }
  return aux;
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
