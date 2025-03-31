function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if((!obj[key] || obj[key].length == 0) || !Array.isArray(obj[key])){
      return [];
    }
    return obj[key].map((number)=>number**2);
    
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
