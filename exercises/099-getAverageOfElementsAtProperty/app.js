function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let suma = 0
  if(!(key in obj)){
    return 0;
  }
  if(obj[key].length === 0){
    return 0;
  } else if (!Array.isArray(obj[key])){
    return 0;
  } else 
    

 
  for(let i in obj[key]){
    suma += obj[key][i]
  }

  let result = suma / obj[key].length;

  return result
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); 