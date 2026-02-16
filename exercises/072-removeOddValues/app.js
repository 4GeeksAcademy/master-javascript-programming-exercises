function removeOddValues(obj) {
    // your code here
  for (let i in obj) {
    if( typeof(obj[i]) === "number" && obj[i] % 2 !== 0 ){
      delete obj[i]
    } 
  }
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
