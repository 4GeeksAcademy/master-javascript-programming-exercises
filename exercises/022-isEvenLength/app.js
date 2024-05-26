// Write your function here
function isEvenLength(word) {
    if (word.length % 2 === 0) {
        return true;
    }

    return false;
}

let output = isEvenLength('wow');
console.log(output); 