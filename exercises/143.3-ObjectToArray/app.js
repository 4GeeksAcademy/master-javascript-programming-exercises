function convertObjectToList(obj) {
  // your code here
  let arrayFinal = []
  let array1 = Object.getOwnPropertyNames(obj)

  let array2 = [];
  for (i in obj){
    array2.push(obj[i]);
  }
  for (i = 0; i< array1.length;i++){
    arrayFinal.push([array1[i],array2[i]]);
  }
  return arrayFinal;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
