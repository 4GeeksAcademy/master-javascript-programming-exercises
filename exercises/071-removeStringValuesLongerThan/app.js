function removeStringValuesLongerThan(num, obj) {
  // your code here
  // check type
  // remove values when necessary
  for (const key in obj){
    if(typeof obj[key] === "string"  && obj[key].length > num ){
        delete obj[key]

    }
}

return obj
  
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }