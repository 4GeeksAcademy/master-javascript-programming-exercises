function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let aux = word1;

    if (aux.length > word2.length) {
        aux = word2;
    } else if (aux.length > word3.length) {
        aux = word3;
    }

    return aux;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
