function addToBack(arr, element) {
  // your code here
  let arra = arr.push(element)
  return arr
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
