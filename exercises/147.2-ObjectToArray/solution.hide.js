function listAllValues(obj) {
  // your code here
  return Object.values(obj);
}

let output = listAllValues({ name: 'Krysten', age: 33, hasPets: false });
console.log(output);
