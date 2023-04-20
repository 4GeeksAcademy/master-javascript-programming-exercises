function removeFromBackOfNew(arr) {
  // your code here
  return new_array = arr.filter((value,index,arr)=> index < (arr.length -1 ))
  
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
