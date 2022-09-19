function computeSummationToN(n) {
  // your code here
  let aux = 0;
  for (let e = 1; e < n + 1; e++) aux += e;
  return aux;
}

var output = computeSummationToN(6);
console.log(output); // --> 21
