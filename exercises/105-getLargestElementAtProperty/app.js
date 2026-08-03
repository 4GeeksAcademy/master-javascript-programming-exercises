function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
  } 
         return Math.max(...obj[key]);
    }


let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
