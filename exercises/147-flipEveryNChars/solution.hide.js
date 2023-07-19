function flipEveryNChars(input, n) {
  // your code here
  let reges = `(.{${n}})`;
  let parsed = new RegExp(reges);

  let result = input
    .split(parsed)
    .map((e) => e.split('').reverse().join(''))
    .join('');
  return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
