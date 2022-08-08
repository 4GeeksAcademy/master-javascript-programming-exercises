function search(array, value) {
  // your code here
  let index = array.indexOf(value) != -1 ? array.indexOf(value) : null;
  return index;
}

let arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // => 4
