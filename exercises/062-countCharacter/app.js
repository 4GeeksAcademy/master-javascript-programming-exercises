function countCharacter(str, char) {
    // your code here
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            counter++;
        }
    }

    return counter;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
