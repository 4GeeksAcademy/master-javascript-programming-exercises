function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let result = 1;

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return result = 0
    }

    for(let i=0; i<obj[key].length; i++){
      result *= obj[key][i];
    }

    if(key >= obj[key].length){
      result = 0
    }

    return result
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
