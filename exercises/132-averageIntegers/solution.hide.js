function average(arr) {
  // your code here
  return sum(arr) / arr.length;
}

function sum(arr) {
  // your code here
  return arr.reduce((a, b) => a + b, 0);
}

console.log(average([1, 2])); // --> 1.5
