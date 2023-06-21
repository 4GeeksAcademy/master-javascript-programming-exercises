function getStringLength(string) {
  // your code here
  let count = 0;
  for (let char of string) {
    count++;
  }
  return count;
}

let output = getStringLength('hello');
console.log(output); // --> 5
