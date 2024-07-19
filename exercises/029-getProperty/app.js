  // your code here
  let car = {
    model: 'Toyota'
  };
function getProperty(obj, key) {
  return obj[key];
}

let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'