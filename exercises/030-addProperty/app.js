function addProperty(obj, key) {
  // your code here
  obj[key] = true;

  return obj;
}

let car = {};

addProperty(car, "electrico")