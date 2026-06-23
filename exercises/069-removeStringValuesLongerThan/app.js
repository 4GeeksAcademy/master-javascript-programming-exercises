function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj){
    if (obj[key].length > num){
      return delete obj[key];
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
