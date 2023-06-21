function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
  else {
    let aux = 999999999999999999
    obj[key].map(item => item < aux ? aux = item : null)
    return aux
  }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
