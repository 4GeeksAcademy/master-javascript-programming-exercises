function getAllLetters(str) {
    // your code here
    let letras = [];

    for(let i in str){
        letras.push(str[i])

    }

    return letras
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
