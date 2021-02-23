// Write your function here
function keep(array, id) {
    salida = [];
    array.forEach(element => {
        if (element === id) {
            salida.push(element);
        }
    });
    return salida
}

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output);// --> [2, 2]