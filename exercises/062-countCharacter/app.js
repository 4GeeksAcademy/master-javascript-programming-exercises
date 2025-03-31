function countCharacter(str, char) {
    // your code here
    let total = 0
    for(let i = 0; i < str.length; i++){
        str[i] == char ? total+=1 : total+=0;
    }
    return total
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
