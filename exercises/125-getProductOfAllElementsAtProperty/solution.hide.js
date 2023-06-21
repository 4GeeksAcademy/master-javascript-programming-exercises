function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || typeof obj[key] != typeof [] || obj[key].length < 1) return 0;

  let aux = 1;
  for (let e of obj[key]) {
    aux *= e;
  }

  return aux;
}

let obj = {
  key: [1, 2, 3, 4],
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
