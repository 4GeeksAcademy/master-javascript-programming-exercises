function getEvenElementsAtProperty(obj, key) {
  
    // your code here
    
    {
      if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
          return [];
      } 
      let arrlen = (obj[key]).length;
      let result = [];
      for (let i = 0; i< arrlen; i++){
          if (((obj[key])[i]) % 2 === 0){
              result.push(obj[key][i]);
          }
      }
      return result;
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
