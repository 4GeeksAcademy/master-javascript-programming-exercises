function countCharacter(str, char) {
    // your code here
    charcount = 0
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            charcount = charcount + 1   
        }
    }
    return charcount
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
