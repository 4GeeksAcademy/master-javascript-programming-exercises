function getProperty(obj, key) {
  // your code here
  let property = obj[key];
  return property;
};

let car = {
  model: 'Toyota'
};

let output = getProperty(car, 'model');
console.log(output);
