// Write your function here
function getFirstElementOfProperty(obj, key){
    for(prop in obj){
        if(prop === key){
            return obj.key[0]
        }
    }
}

let obj = {
    key: [1, 2, 4],
    edad: 23,
    nombre:'wilfredo'
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output);