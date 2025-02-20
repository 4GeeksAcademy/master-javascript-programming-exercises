function removeOddValues(obj) {
    // your code here
    for (let prop in obj) {
      if (obj[prop] % 2 === 1) {
          delete obj[prop]
      }
  }
    return obj
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
