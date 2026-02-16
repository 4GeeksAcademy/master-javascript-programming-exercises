// Write your function here
function computeAverageOfNumbers(anArray){

    if(anArray.length === 0 ){
        return 0;
    }

    let suma = 0;
    for(let i=0; i < anArray.length; i++){
        suma += anArray[i];
    }
    
    let average = suma / anArray.length

    return average
}


let input = [1, 2, 3, 4, 5];

let output = computeAverageOfNumbers(input);
console.log(output);