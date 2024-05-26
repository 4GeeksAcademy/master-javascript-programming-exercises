function flipEveryNChars(input, n) {
    // your code here
    let newSentence ='';

    for (let i = 0; i < input.length; i+=n) {
        for (let j = i+n-1; j >= i; j--) {
            newSentence += input.charAt(j);
        }
    }

    return newSentence;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
