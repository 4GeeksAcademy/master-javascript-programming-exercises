function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj) {
    if (obj[key].length > num && typeof obj[key] === 'string') {
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

console.log(removeStringValuesLongerThan(6, obj));
