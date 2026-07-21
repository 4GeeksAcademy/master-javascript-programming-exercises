function transformEmployeeData(array) {
  // your code here
  let result = [];
  for (let x of array) {
    let aux = {};
    for (let y of x) {
      aux[y[0]] = y[1];
    }
    result.push(aux);
  }
  return result;
}

let output = transformEmployeeData([
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager'],
  ],
]);

console.log(output);
