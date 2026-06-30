function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (index in obj) {
    if (obj[index].length > num) {
        delete obj[index];
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
