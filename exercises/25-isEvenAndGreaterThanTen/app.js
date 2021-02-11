// Write your function here
function isEvenAndGreaterThanTen(word){
if (word%2==0 && word>10){
    return true
}else{
    return false
}
}
var output = isEvenAndGreaterThanTen(13);
console.log(output); 