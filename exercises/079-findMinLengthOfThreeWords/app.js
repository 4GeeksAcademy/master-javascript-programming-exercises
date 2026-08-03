// Write your function here
function findMinLengthOfThreeWords(str1, str2, str3){
    return Math.min(str1.length, str2.length, str3.length);
}


let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1