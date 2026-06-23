function getAllWords(str) {
    // your code here
    let newArr = str.split(" ");
    return newArr;
    
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
