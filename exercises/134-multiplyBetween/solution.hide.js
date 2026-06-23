function multiplyBetween(num1, num2) {
  // your code here
  if (num1 > num2) return 0;
  let aux = 1;
  for (let i = num1; i < num2; i++) aux *= i;
  return aux;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
