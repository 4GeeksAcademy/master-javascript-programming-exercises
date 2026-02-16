function average(arr) {
  // your code here
  let average = 0

  average = sum(arr) / arr.length

  return average
}

function sum(arr) {
  // your code here
  let suma = 0

  for(let i=0; i<arr.length; i++){
    suma += arr[i] 
  }

  return suma
}

console.log(average([1, 2])); // --> 1.5
