function getAllLetters(str) {
    // your code here
    let newArr = Array.from(str);
    return newArr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
