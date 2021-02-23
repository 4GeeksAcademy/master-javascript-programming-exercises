// Write your function here
function getOddLengthWordsAtProperty(objeto,propiedad){
    salida=[];
    if (typeof objeto[propiedad] === 'object') {
        objeto[propiedad].forEach(element => {
            if (element.length%2!=0){
                salida.push(element);
            }
        });
    }
    return salida
}
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']