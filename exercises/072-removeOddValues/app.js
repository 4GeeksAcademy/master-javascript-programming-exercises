function removeOddValues(obj) {
    // your code here
    for (let key in obj){
      if (!(obj[key] % 2 == 0)){
        delete obj[key];
      }
    }
    return obj;

}

let obj = {
  a: 2,
  b: 3,
  c: 4,
  d: 1
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
