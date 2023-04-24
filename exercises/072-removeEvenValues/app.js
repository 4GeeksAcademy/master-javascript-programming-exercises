function removeEvenValues(obj) {
    // your code here
    // check type
    // check even
    // del if necessary

    for (const key in obj){
        if(typeof obj[key] === "number"  && obj[key]%2 == 0 ){
            delete obj[key]
    
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
  console.log(obj);