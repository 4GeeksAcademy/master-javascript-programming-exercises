function addProperty(obj, key) {
  // your code here
  obj[key]=true
}
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); 