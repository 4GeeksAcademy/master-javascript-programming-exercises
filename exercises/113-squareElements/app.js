function squareElements(arr) {
  // your code here
  let array_cudrado = []

  for(let i=0; i<arr.length ; i++){
    array_cudrado.push(arr[i]**2)
  }

  return array_cudrado
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
