function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
  } 
         return Math.min(...obj[key]);
    }


let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
