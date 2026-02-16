function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let menor = 0

    switch(Math.min(word1.length, word2.length, word3.length)){
        case word1.length:
            menor = word1;
            break;
        case word2.length:
            menor = word2;
            break;
        case word3.length:
            menor = word3;
            break;
    }
    return menor
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
