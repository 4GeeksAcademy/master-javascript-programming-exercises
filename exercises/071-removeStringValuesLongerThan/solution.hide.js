function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length > num) {
      delete obj[key];
    }
  }
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
