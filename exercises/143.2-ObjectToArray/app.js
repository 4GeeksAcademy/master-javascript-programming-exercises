function listAllValues(obj) {
  // your code here
  let array = [];

  for (let i in obj) {
    array.push(obj[i]);
  }

  return array;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
