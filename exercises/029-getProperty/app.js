function getProperty(obj, key) {
  // your code here
  return obj[key];
}

let car = {
  model: 'Toyota'
};

let output = getProperty(car, 'model');
console.log(output); 