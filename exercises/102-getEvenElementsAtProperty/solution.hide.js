function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])) {
      return [];
    }
        
    return obj[key].filter(element => element % 2 === 0);
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
