function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length === 0){return 0;}
  let newArr = 1;
  for (i in arr){
    newArr *= arr[i];
    }
  return newArr;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
