// Write your function here
function getNthElementOfProperty(objeto, llave, posicion){
    if(!Array.isArray(objeto[llave])){
        return undefined
    }
    return objeto[llave][posicion]
}


let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); 