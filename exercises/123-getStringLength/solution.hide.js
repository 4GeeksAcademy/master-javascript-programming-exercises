function getStringLength(string) {
  // your code here
  return [...string].reduce((a) => a + 1, 0);
}

var output = getStringLength('hello');
console.log(output); // --> 5

//////////////////OR////////////////////

function getStringLength(string) {
  // your code here
  return [...string].reduce((a) => a + 1, 0);
}

var output = getStringLength('hello');
console.log(output); // --> 5
