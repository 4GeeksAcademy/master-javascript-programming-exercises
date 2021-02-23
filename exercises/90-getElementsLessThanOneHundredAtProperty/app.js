// Write your function here
function getElementsLessThan100AtProperty(objeto, identify) {
    let salida = [];
   if (typeof objeto[identify] === 'object') {
        objeto[identify].forEach(element => {
            if (element < 100) {
                salida.push(element)
            }
        });
    }
    return salida
}
var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]