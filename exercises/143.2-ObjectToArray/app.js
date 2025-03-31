function listAllValues(obj) {
  // your code here
  return Object.values(obj);
  
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
