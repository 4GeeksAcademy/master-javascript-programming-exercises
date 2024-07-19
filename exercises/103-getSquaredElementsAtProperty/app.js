function getSquaredElementsAtProperty(obj, key) {
    // your code here
      if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
          return [];
      } 
      let arrlen = (obj[key]).length;
      let result = [];
      for (let i = 0; i< arrlen; i++){
              result.push(Math.pow(obj[key][i],2));
          }
      return result;
    }

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
