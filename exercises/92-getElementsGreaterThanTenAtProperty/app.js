// Write your function here
function getElementsGreaterThan10AtProperty(objeto, identify) {
    let salida = [];
   if (typeof objeto[identify] === 'object') {
        objeto[identify].forEach(element => {
            if (element > 10) {
                salida.push(element)
            }
        });
    }
    return salida
}
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]