function removeProperty(obj, key) {
  // your code here
  if (key in obj){
    return delete obj[key];
  }
  return obj;
}
let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name);