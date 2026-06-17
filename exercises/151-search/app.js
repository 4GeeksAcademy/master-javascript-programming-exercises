function search(array, value) {
  // your code here
  let first = 0;    //left endpoint 
  let last = array.length - 1;   //right endpoint 
  let position = -1;
  let found = false;
  let middle;
  
  while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (array[middle] == value) {
          found = true;
          position = middle;
      } else if (array[middle] > value) {  //if in lower half 
          last = middle - 1;
      } else {  //in in upper half 
          first = middle + 1;
      }
  }

  if (found) {
    return position;
  } else {
    return null;
  }
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
