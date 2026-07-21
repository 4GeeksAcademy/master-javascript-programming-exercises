function removeArrayValues(obj) {
    // your code here
    for (let key in obj){
        if (Array.isArray(obj[key])){
            delete obj[key];
        }
    }
    return obj;
    
}
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }