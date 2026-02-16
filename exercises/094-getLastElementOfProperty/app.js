// Write your function here

function getLastElementOfProperty(objeto, llave){

    if(!Array.isArray(objeto[llave])){
        return undefined
    }

    return objeto[llave][objeto[llave].length - 1]
}

let obj = {
  key: [1, 2, 5]
};

let output = getLastElementOfProperty(obj, 'key');
console.log(output);