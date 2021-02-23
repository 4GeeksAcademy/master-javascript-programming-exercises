// Write your function here
function getIndexOf(letra, cadena) {
    let salida;
    for (i in cadena) {
        if (cadena[i] != letra) {
            salida = "-1";
        } else {
            salida = i;
            break
        }
    }
    return salida
}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2