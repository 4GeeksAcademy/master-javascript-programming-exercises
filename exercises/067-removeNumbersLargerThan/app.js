function removeNumbersLargerThan(num, obj) {
    // your code here
    for(key in obj){
        if(Number.isInteger(obj[key]) && obj[key] > num){
            delete obj[key];
        }
    }
}

let obj = {
    a: 8,
    b: 2,
    c: 'montana'
  }
  removeNumbersLargerThan(5, obj);
  console.log(obj); // --> { b: 2, c: 'montana' }
