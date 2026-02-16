// Write your function here
function getFirstElementOfProperty(obj, llave){

    if (!Array.isArray(obj[llave])) {
        return undefined;
  }

    return obj[llave][0]
}

let obj = {
  key: [1, 2, 4]
};

let output = getFirstElementOfProperty(obj, 'key');
console.log(output);