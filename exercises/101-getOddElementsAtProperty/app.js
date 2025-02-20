const isOdd = ""


function getOddElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
  } 
  let arrlen = (obj[key]).length;
  let result = [];
  for (let i = 0; i< arrlen; i++){
      if (((obj[key])[i]) % 2 !== 0){
          result.push(obj[key][i]);
      }
  }
  return result;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
