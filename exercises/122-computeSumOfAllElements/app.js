function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0;
  if (arr.length === 0){return 0;}
  for(i in arr){
    sum += arr[i]
    }
  
  return sum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
