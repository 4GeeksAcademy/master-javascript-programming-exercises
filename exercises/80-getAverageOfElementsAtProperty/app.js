// Write your function here
function getAverageOfElementsAtProperty(obj,key){
if (obj[key].length<=0) {
    return 0;
}else if (Array.isArray(obj[key])==false){
    return 0;
}else{   
    var suma=0;
    for(var i=0 ; i < obj[key].length; i++){
       suma+=obj[key][i];
    }
    return suma/i
    }   
}
var objeto={
    word:[1,2,3],
    word2:[],
    word3:'hola'
};
var output = getAverageOfElementsAtProperty(objeto, 'word');
console.log(output); 