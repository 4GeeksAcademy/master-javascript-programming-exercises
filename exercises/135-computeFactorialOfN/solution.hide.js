function computeFactorialOfN(n) {
  // your code here
  let aux = 1;
  for (let e = 1; e < n + 1; e++) aux *= e;
  return aux;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
