function repeatString(string, num) {
    // your code here
    let newString = '';

    for (let i = 0; i < num; i++) {
        newString += string;
    }

    return newString;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
