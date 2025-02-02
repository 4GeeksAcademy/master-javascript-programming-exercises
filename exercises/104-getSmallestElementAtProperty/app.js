function getSmallestElementAtProperty(obj, key) {
    // your code here
    let aux = 999999;
    let arr = [];

    if (Array.isArray(obj[key]) && obj.hasOwnProperty(key) && obj[key].length > 0) {
      for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] < aux ) {
          aux = obj[key][i];
        }
      }
      return aux;
    }

    return arr;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
