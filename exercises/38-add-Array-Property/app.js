var myObj = {};
var myArray = [1, 3];

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
}

addArrayProperty(myObj, "key", myArray);
console.log(myObj.key);