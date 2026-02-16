// Write your function here
function keep(array, num){

    let resultado = array.filter(i => i === num )

    return resultado
    
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output);