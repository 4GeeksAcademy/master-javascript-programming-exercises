// Write your function here
function computeAverageOfNumbers(array) {
    var sum = 0;
    let salida
    array.forEach(element => {
        sum += element
    });
    salida = sum / array.length;
    return salida
}
var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3