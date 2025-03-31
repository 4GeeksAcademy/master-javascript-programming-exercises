function getAllLetters(str) {
    // your code here
    let array = [];
    for(let i=0;i<str.length;i++){
        array.push(str[i]);
    }
    return array;
    
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
