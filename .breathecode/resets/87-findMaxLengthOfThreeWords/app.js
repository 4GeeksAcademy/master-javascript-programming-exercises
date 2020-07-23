function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  return Math.max(word1.length, word2.length, word3.length);
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);