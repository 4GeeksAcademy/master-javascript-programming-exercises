function getAllWords(str) {
    // your code here
    let words = str.split(' ');
    return words;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
