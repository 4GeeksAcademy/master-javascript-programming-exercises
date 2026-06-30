function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0){return 0;}
  let largest = -Infinity;
  for(i in arr){
      if(typeof arr[i] === 'number' && arr[i] > largest){
      largest = arr[i];
    }

  }
  if (largest === -Infinity) {
    return 0;
  }
  return largest;

}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
