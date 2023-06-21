function getOddElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
    return [];
  }

  return obj[key].filter(num => num % 2 !== 0);
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
