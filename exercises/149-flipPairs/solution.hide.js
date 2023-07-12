function flipPairs(input) {
  // your code here
  let flippedString = '';

  for (let i = 0; i < input.length; i += 2) {
    if (i + 1 < input.length) {
      flippedString += input[i + 1] + input[i];
    } else {
      flippedString += input[i];
    }
  }

  return flippedString;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?  

/*  // Solution 2:

function flipPairs(input) {
    // This solution is using Regular Expressions or RegExp
    let result = input.replace(/(.)(.)/g, '$2$1');
    return result;
  }

*/

