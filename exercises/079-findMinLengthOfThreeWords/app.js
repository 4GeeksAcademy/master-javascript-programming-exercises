// Write your function here

function findMinLengthOfThreeWords(word1, word2, word3){
    // retoorna el valor del largo del menor string
    let menor = 0;
    menor = Math.min(word1.length, word2.length, word3.length);
    return menor ; 
    
    }