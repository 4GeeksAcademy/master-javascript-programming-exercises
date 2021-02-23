// Write your function here
function getNthElementOfProperty(objeto, propiedad, id){
    return objeto[propiedad][id];
}
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2