function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((a,b)=>a+b);
  
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
