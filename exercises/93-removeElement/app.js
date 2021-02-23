// Write your function here
function removeElement(array,numero){
    salida=[];
    array.forEach(element => {
        if (element !=numero)
        salida.push(element);
    });
    return salida
}
var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]