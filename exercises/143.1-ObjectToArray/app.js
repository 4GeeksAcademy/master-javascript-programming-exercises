function getAllKeys(obj) {
  // your code here
  let array = [];

  for (let i in obj) {
    array.push(i);
  }

  return array;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
