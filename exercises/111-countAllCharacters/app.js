// Write your function here
function countAllCharacters(aString){
    if (aString.length === 0){ return {};}
   let result = {};
    for(char of aString){
        if (result[char] === undefined){result[char] = 1}
        else result[char] += 1;
    }
    return result;
}


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}