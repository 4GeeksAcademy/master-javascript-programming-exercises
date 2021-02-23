// Write your function here
function areValidCredentials(name, pass) {
    let prueba = (name.length > 3 && pass.length >= 8) ? "verdadero":"falso";
    return prueba
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero