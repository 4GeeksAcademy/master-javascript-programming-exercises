function computeSummationToN(n) {
  // your code here

  let sum = 0;
for (i = 1; i <= n;i++){
  sum += i;
}
return sum;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

