function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length === 0){
    return 0;
  }

  let smallest = 0;
  let firstNumberFound = false;

  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === "number"){
      if(!firstNumberFound){
        smallest = arr[i]
        firstNumberFound = true
      } else if( arr[i] < smallest){
        smallest = arr[i]
      }
    }
  }

  return smallest
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
