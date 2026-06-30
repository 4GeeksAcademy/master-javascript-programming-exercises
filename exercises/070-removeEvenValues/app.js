function removeEvenValues(obj) {
    // your code here
    for (index in obj) {
      if ((obj[index] % 2)==0) {
          delete obj[index];
      }
  }
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
