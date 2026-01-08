function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  let aux = '';
  if (word1.length > aux.length) aux = word1;
  if (word2.length > aux.length) aux = word2;
  if (word3.length > aux.length) aux = word3;
  return aux;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
