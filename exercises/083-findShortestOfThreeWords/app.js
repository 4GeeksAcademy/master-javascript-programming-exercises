function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
   let strShorter= {};
   if (word1.length <= word2.length && word1.length <= word3.length) {
        strShorter = word1;
   } else {
    if (word2.length<= word3.length)
        strShorter = word2;
    else 
    strShorter = word3;

}
   return strShorter;    
   }
    


let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
