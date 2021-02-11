function getProperty(obj, key) {
  // your code here
  return obj[key];
}

var car = {
  model: 'Toyota',
  color: 'rojo'
};
var output = getProperty(car, 'color');
console.log(output); // --> 'valor'