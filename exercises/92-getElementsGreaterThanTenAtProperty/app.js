function getElementsGreaterThan10AtProperty(obj, key) {
  // your code here
   var arr = [];
    for (var x in obj[key]) {
        if (obj[key][x] > 10) {
            arr.push(obj[key][x]);
        }
    }
    return arr;
}
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);