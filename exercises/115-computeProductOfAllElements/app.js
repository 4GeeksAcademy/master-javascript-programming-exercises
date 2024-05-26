function computeProductOfAllElements(arr) {
  // your code here
  let multi = 1;

  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++) {
      multi *= arr[i];
    }

    return multi;
  }

  return 0;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
