function convertObjectToList(obj) {
  // your code here
  let array = [];

  for (let i in obj) {
    let aux = [];
    aux.push(i);
    aux.push(obj[i]);

    array.push(aux);
  }

  return array;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
