// Write your function here
function getNthElementOfProperty(obj, key, n) {
    if (obj.hasOwnProperty(key)) {
        return obj[key][n];
    }

    return undefined;
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);