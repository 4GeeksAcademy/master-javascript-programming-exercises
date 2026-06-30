function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
  } 
   obj[key].pop();
         return obj[key];
    }


let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
