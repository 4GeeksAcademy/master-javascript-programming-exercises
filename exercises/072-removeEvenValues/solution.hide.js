function removeEvenValues(obj) {
    // your code here
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          delete obj[key];
        }
      }
      return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
