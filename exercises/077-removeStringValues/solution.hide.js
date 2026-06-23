function removeStringValues(obj) {
    // your code here
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
          delete obj[key];
        }
      }
    return obj;
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
