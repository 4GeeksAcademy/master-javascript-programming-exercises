function average(arr) {
  // your code here
  return (sum(arr)/(arr.length));
}

function sum(arr) {
  // your code here
  let suma = 0;
  for(i in arr){
    suma += arr[i];
  }
  return suma;
}

console.log(average([1, 2])); // --> 1.5
