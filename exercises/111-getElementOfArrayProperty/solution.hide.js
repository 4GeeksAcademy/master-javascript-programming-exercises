var obj = {
  key: [],
};
function getElementOfArrayProperty(obj, key, index) {
  // your code here
  if (Object.keys(obj)[0] != key) return undefined;
  if (obj[key][index]) return obj[key][index];
  else return undefined;
}

console.log(getElementOfArrayProperty(obj, 'key', 1));
