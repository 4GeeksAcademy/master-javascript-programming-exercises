function getElementsThatEqual10AtProperty(objeto, llave){

    let arreglo = []

    if (!Array.isArray(objeto[llave])){
        return arreglo = []
    }

    
    
    for(let i in objeto[llave]){
        if(objeto[llave][i] === 10){
            arreglo.push(objeto[llave][i])
        } 
    }

    return arreglo
}
let obj = {
  key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);