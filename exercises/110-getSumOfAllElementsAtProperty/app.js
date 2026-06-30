function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj.hasOwnProperty(key)||!Array.isArray(obj[key])||obj[key].length === 0) {
        return 0;
      }
      let sum = 0;
      for (i = 0; i < obj[key].length; i++){
        sum += obj[key][i];
      }
      return sum;
    }

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
