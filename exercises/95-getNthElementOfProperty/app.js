function getNthElementOfProperty(obj, key, n) {
  // your code here
    if(Array.isArray(obj[key])) {
    return obj[key][n];
}
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);