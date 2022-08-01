function isOddWithoutModulo(num) {
  // your code here
  let aux = false;
  for (let x = 0; x <= num + 1; x += 2) {
    if (x !== num) aux = true;
  }
  return aux;
}
let output = isOddWithoutModulo(18);
console.log(output); // --> true
