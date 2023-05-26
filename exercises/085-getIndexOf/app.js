// Write your function here
function getIndexOf(char,text){
    return text.search(char)
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
