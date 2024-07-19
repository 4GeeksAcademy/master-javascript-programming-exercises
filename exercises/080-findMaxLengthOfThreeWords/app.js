// Write your function here
function findMaxLengthOfThreeWords(str1, str2, str3){
    return Math.max(str1.length, str2.length, str3.length);
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3