function listAllValues(obj) {
  // your code here
  let arr = [];
  for(let element in obj){
    arr.push(obj[element]);
  }
  return arr
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output);
