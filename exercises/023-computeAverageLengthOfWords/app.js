// Write your function here
const average = array => array.reduce((a, b) => a + b) / array.length;
function computeAverageLengthOfWords(word1,word2) {
let anArray = [word1.length, word2.length]
return average(anArray);
}
let output = computeAverageLengthOfWords('code', 'programs');
console.log(output);