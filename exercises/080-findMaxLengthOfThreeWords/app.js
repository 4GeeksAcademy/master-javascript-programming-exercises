// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3){
// retoorna el valor del largo del mayor  string
let mayor = 0;
mayor = Math.max(word1.length, word2.length, word3.length);
return mayor ; 

}