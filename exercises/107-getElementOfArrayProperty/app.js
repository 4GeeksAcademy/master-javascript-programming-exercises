function getElementOfArrayProperty(obj, key, index) {
    // your code here
    let resultado = undefined;

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 ){
        return resultado
    }

    resultado = obj[key][index]

    if( index >= obj[key].length){
        resultado = undefined
    }


    return resultado
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
