// Write your function here
function countAllCharacters(str) {
    let obj = {};

    if (str.length > 0) {
        for (let char in str) {
            if (obj.hasOwnProperty(str.charAt(char))) {
                obj[str.charAt(char)] += 1; 
            } else {
                obj[str.charAt(char)] = 1;
            }
        }
    }

    return obj;
}

let output = countAllCharacters('banana');
console.log(output); 