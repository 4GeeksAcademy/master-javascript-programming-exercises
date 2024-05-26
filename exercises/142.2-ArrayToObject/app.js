function fromListToObject(array) {
  // your code here
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      obj[array[i][0]] = array[i][j];
    }
  }

  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
