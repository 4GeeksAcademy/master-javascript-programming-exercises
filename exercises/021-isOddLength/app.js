// Write your function here
function isOddLength(word){
    if (!(word.length % 2 == 0)){
        return true;
    } else {
        return false;
    }

}
console.log(isOddLength("cinco"));
