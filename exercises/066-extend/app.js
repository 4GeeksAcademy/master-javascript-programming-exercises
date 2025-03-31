function extend(obj1, obj2) {
    // your code here
    for(key in obj2){
        if(!(key in obj1)){
            obj1[key] = obj2[key];
        }
    }
}

let obj1 = {
    a: 1,
    b: 2
  };
  let obj2 = {
    b: 4,
    c: 3
  };
  
  extend(obj1, obj2);