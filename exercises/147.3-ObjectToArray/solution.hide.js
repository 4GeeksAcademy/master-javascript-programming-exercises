function convertObjectToList(obj) {
  // your code here
  let result = [];
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for (let e = 0; e < keys.length; e++) {
    result.push([keys[e], values[e]]);
  }
  return result;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output);
