function countCharacter(str, char) {
    // your code here
    let count = 0;
    for (let total = 0; total < str.length; total++){
        if (str[total] === char){
            count += 1;
        }
        
    };
    return count;
        
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
