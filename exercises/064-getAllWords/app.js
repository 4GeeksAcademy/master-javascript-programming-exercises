function getAllWords(str) {
    // your code here
    let palabras = str.split(" ")
    return palabras
    
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
