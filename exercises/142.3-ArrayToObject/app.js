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
