function getAllLetters(str) {
    // your code here
    let anArray = [];
    for (char of str) {
    anArray.push(char)
        }
    return anArray;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
