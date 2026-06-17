function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = [];

    if (Array.isArray(obj[key]) && obj.hasOwnProperty(key)) {
      arr = obj[key].map((i) => i*i);

      return arr;
    }

    return arr = [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
