// Write your function here
function getLastElementOfProperty(obj, key) {
    if (obj.hasOwnProperty(key) && obj[key].length > 0 && ( typeof obj[key] == "object")) {
        return obj[key][obj[key].length-1];
    }

    return undefined;
}

let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output);