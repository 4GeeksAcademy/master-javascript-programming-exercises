function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (key in obj) {
    if (typeof (obj[key]) == 'string') {
      if (obj[key].length > num) {
        delete obj[key];
      }
    }
  }

}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
