function removeArrayValues(obj) {
    // your code here
    for (const key in obj){
        if(typeof obj[key] === "object"){
            delete obj[key]
    
        }
    }
    
    return obj
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }
  