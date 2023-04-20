function countCharacter(str, char) {
    // your code here
    charcount = 0
    for (i in str){
        if (i === char){
            charcount = charcount + 1 
        }
    }
    return charcount
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
