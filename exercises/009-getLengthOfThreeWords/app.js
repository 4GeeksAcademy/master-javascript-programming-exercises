function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let palabra1 = word1.length
  let palabra2 = word2.length
  let palabra3 = word3.length

  let suma = palabra1 + palabra2 + palabra3
  return suma
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
