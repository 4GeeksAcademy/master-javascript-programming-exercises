function getAllKeys(obj) {
  // your code here
  let arr = [];
  for(let element in obj){
    arr.push(element);
  }
  return arr
}

let output = getAllKeys({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
