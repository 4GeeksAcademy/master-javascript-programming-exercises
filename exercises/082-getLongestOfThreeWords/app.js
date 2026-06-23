function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longest =  word1;
    if (word2.length > longest.length) longest = word2;
    if (word3.length > longest.length) longest = word3;
    return longest; 
    
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
