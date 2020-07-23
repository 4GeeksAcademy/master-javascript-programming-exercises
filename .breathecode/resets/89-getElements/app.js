function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var arr = [];
  for (prop in obj) {
    for (var i = 0; i < obj[prop].length; i++) {
      if (obj[prop][i] === 10) {
        arr.push(obj[prop][i]);
      }
    }
  }
  return arr;
}
var obj = {
  key: [1000, 10, 50, 10] 
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);