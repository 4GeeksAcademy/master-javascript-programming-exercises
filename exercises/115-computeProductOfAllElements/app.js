function computeProductOfAllElements(arr) {
  // your code here
  let result = 1;

  if(arr.length === 0){
    return 0;
  }

  for(let i=0; i<arr.length;i++ ){
    result *= arr[i]
  }

  return result
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
