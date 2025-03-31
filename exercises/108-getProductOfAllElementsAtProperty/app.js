function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if((!obj[key] || obj[key].length == 0) || !Array.isArray(obj[key])){
      return 0;
    }
    return obj[key].reduce((accumulator, currentValue) => accumulator * currentValue);
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
