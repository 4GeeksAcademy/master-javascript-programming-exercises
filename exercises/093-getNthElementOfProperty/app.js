// Write your function here
function getNthElementOfProperty(obj,key,n){
    for(prop in obj){
        if(prop == key){
            return obj.key[n];
        }
    }
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 2);
  console.log(output); // --> 2
