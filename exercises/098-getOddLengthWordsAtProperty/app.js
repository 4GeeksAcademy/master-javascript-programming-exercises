// Write your function here
function isOdd(word){
    return word.length % 2 !== 0;
}
function getOddLengthWordsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return [];
    } 
    let arrlen = (obj[key]).length;
    let result = [];
    for (let i = 0; i< arrlen; i++){
        if (isOdd((obj[key])[i])){
            result.push(obj[key][i]);
        }
    }
    return result;
}



let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
