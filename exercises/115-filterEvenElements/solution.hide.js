function filterEvenElements(arr) {
  // your code here
  let aux = [];
  for (let e of arr) {
    if (e % 2 == 0) aux.push(e);
  }
  return aux;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
