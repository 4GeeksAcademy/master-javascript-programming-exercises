function getAllKeys(obj) {
  // your code here
  return Object.keys(obj);
}

let output = getAllKeys({ name: 'Sam', age: 25, hasPets: true });
console.log(output);
