function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let palabra = 0;
       
    switch(Math.max(word1.length, word2.length, word3.length)){
        case word1.length:
            palabra = word1;
            break;
        case word2.length:
            palabra = word2;
            break;
        case word3.length:
            palabra = word3;
            break;
    }

    return palabra
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
