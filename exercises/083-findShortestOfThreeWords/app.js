function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let shortest = word1;
    if(word2.length < shortest.length) shortest=word2;
    if(word3.length < shortest.length) shortest=word3;
    return shortest;
    
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
