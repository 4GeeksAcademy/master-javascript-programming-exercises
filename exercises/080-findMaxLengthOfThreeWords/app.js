// Write your function here
function findMaxLengthOfThreeWords(num1, num2, num3){
    return Math.max(num1.length, num2.length, num3.length)
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output)