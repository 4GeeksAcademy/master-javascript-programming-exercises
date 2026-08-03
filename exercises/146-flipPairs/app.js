function flipPairs(input) {
    // your code here
    let newSentence ='';

    for (let i = 0; i < input.length; i+=2) {
        newSentence += input.charAt(i+1);
        
        newSentence += input.charAt(i);
    }

    return newSentence;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
