var obj = {
  key: [1, 2, 3, 4],
};

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  let aux = 1;
  if (Object.keys(obj)[0] != key) return 0;
  if (obj[key].length < 1) return 0;
  if (typeof obj[key] != typeof []) return 0;
  if (obj[key]) {
    for (let e of obj[key]) {
      aux *= e;
    }
  }

  return aux;
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
