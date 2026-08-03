function getAllWords(str) {
    // your code here
    let arr = [];
    arr = (str.split(" "));
    return arr;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
