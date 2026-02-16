function computeSumOfAllElements(arr) {
  // your code here
  let result = 0;

  for( let i = 0; i < arr.length; i++){
    result += arr[i]
  }
  
  return result
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
