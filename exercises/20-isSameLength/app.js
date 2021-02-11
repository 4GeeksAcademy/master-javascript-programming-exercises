// Write your function here
function isSameLength(word1,word2){
    if (word1.length==word2.length){
        return true
    }else{
        return false
    }
}
var output = isSameLength('world', 'super');
console.log(output); // --> verdadero