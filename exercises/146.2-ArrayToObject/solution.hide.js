function fromListToObject(array) {
  // your code here
  let aux = {};
  for (let e of array) {
    aux[e[0]] = e[1];
  }
  return aux;
}

let output = fromListToObject([
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
]);
console.log(output); // --> { make: 'Ford', model: 'Mustang', year: 1964 }
