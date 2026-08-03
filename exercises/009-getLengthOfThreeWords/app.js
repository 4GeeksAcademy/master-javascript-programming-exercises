function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let length1 = word1.length;
  let length2 = word2.length;
  let length3 = word3.length;
  let sumOfLengths = length1 + length2 + length3;
  return sumOfLengths;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
