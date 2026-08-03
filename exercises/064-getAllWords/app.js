function getAllWords(str) {
    // your code here
    var arr = str.split(" ");
    return arr; 
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
