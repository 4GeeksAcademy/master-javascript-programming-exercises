// Write your function here
function getElementsLessThan100AtProperty(objeto, llave) {

    let result = []

    if (!Array.isArray(objeto[llave])){
           return result
    }

    for(let i in objeto[llave]){
        if(objeto[llave][i] < 100){
            result.push(objeto[llave][i])
        }
    }
    

    return result
}

let obj = {
  key: [1000, 20, 50, 500]
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);