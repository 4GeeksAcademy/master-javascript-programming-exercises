function getLargestElement(arr) {
  // your code here
  if (arr.length < 1) return 0;
  
  let aux = 0;
  for (let e of arr) {
    if (aux < e) aux = e;
  }
  return aux;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
