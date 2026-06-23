// Write your function here
function getIndexOf(char, str){
    for (let find = 0; find < str.length; find++){
        if (str[find] === char){
            return find;
        }
    }
    return -1;
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2