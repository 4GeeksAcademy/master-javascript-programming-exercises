// Write your function here
function findMaxLengthOfThreeWords(a, b, c){
    if(a.length > b.length && a.length > c.length){
        return a.length
    }else if(b.length > a.length && b.length > c.length){
        return b.length
    }else{
        return c.length
    }
}