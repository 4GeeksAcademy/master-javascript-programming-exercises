function countCharacter(str, charO) {
    // your code here
    var count = 0;
    for (char of str) {
        if (char == charO) {
            count += 1;
        }
    }
    return count;
    
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
