function flipPairs(input) {
    // your code here
    let result = input.replace(/(.)(.)/g, '$2$1');
    return result;
  }

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
