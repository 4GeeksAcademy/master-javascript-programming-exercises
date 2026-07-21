function addProperty(obj, key) {
  // your code here
    if (key in obj){
      return obj;
    }
    obj[key] = true;
    return obj;
}

let myObj = {};
addProperty(myObj, 'myProperty');
console.log(addProperty(myObj, 'myProperty'))