function convertObjectToList(obj) {
  // your code here
  let list=[];
  for(k in obj){
    list.push([k,obj[k]]);
  }
  return list;
  
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
