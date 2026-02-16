// Write your function here
function countAllCharacters(string){

    let resultado = {}

    if(string.length === 0){
        return resultado
    }

    for(let i=0; i<string.length; i++){
        let letra = string[i]
        if(resultado[letra] === undefined) {
            resultado[letra] = 1;
        } else  {
            resultado[letra] += 1;
        }
        
    }

    return resultado
}


let output = countAllCharacters('banana');
console.log(output);