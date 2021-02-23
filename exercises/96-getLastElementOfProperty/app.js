// Write your function here
function  getLastElementOfProperty(objeto,propiedad){
    let identificador= objeto[propiedad].length -1;
    return objeto[propiedad][identificador]
}
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5