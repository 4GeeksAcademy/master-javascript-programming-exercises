// Write your function here
function findMinLengthOfThreeWords(str1, str2, str3){

    let minimo = Math.min(str1.length, str2.length, str3.length)

    return minimo
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output)