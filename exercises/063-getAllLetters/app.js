function getAllLetters(str) {
    // your code here
    const array = []
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        array.push(element)
    }
    return array
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']