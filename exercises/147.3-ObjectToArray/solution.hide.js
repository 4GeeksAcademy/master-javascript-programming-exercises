function convertObjectToList(obj) {
  // your code here
  let result = [];
  for (let element in obj) {
    result.push([element, obj[element]]);
  }
  return result;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [['name', 'Holly'], ['age', 35], ['role', 'producer']]

