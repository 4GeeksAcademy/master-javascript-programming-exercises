function flipPairs(input) {
  // your code here
  let result = input.replace(/(.)(.)/g, '$2$1');
  //   input.split('').reverse().join('');
  return result;
}

let input =
  "check out how interesting this problem is, it's insanely interesting!";
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
