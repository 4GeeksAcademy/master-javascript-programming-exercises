function average(arr) {
  // your code here
  return ((sum(arr))/arr.length);
  
}

function sum(arr) {
  // your code here
  return arr.reduce((accumulator,initialValue)=>accumulator+initialValue);
  
}

console.log(average([1, 2])); // --> 1.5
