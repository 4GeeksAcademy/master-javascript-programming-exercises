function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  return Math.min(word1.length, word2.length, word3.length);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);