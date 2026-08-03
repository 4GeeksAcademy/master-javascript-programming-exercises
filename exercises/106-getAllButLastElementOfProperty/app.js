function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = [];

    if (Array.isArray(obj[key]) && obj.hasOwnProperty(key) && obj[key].length > 0) {
      for (let i = 0; i < obj[key].length-1; i++) {
        arr.push(obj[key][i]);
      }
    }

    return arr;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
