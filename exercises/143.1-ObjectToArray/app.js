function getAllKeys(obj) {
  // your code here 
 let array = Object.getOwnPropertyNames(obj)
  return array;
  
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
