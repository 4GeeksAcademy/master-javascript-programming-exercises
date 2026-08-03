function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}


let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined