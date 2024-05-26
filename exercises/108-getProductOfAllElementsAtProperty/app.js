function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let multi = 1;
    
    if (Array.isArray(obj[key]) && obj.hasOwnProperty(key) && obj[key].length > 0) {
        for (let i = 0; i < obj[key].length; i++) {
          multi *= obj[key][i];
        }
        return multi;
    }

    return 0;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
