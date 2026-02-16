function removeEvenValues(obj) {
    // your code here
    for( let i in obj){
      if( typeof(obj[i]) === "number" && obj[i] % 2 === 0 ){
        delete obj[i]
      }
    }
    return obj
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
