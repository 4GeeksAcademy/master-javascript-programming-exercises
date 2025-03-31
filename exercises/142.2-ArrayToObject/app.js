function fromListToObject(array) {
  // your code here
  let obj = {}
  for (arr in array) {
    obj[array[arr][0]] = array[arr][1];
  }
  return obj;

}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
