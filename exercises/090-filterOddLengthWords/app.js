function filterOddLengthWords(words) {
    // devuelvo con el filter un nuevo array que tenga
    // los elementos cuyo largo sea impar. 
    let oddwords = words.filter((elemento) => elemento.length%2 !== 0)
    return oddwords;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
