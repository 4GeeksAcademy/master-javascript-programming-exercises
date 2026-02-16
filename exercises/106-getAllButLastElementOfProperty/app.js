function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let last = []

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return last
    }

    for(let i=0; i<(obj[key].length - 1); i++){

      last.push(obj[key][i])
    }
    return last
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
