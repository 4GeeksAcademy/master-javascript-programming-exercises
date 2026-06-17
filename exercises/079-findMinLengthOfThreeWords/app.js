function findMinLengthOfThreeWords(str1,str2,str3) {
    let word1 = str1.length
    let word2 = str2.length
    let word3 = str3.length
    return Math.min(word1,word2,word3)
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1