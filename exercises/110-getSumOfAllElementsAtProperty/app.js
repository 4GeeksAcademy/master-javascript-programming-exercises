function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let resultado = 0;

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 ){
        return resultado
    }

    for( let i = 0; i <obj[key].length; i++){
        resultado += obj[key][i]
    }

    return resultado
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
