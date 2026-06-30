function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length === 0){return 0;}
  let shortest = Infinity;
  for(i in arr){
      if(typeof arr[i] === 'number' && arr[i] < shortest){
      shortest = arr[i];
    }

  }
  if (shortest === Infinity) {
    return 0;
  }
  return shortest;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
