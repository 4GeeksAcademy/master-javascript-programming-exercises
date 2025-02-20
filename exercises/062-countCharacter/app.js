function countCharacter(str, char) {
    // your code here
    let j = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            j++
        }
    }
    return j
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
