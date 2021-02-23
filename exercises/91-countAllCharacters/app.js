// Write your function here
function countAllCharacters(letras){
    let salida={};
    for (let i=0;i<letras.length;i++){
        if (salida[letras.charAt(i)]===undefined){
            salida[letras.charAt(i)]=1
        }else{
            salida[letras.charAt(i)]+=1
        }
    }
    return salida
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}