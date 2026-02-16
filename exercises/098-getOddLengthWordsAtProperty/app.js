// Write your function here
function getOddLengthWordsAtProperty(obj, key){

    let result = []

    if(!Array.isArray(obj[key])){
        return result;
    }

    for( let i in obj[key]){
        if(obj[key][i].length % 2 !== 0 ){
            result.push(obj[key][i])
        }
    }
    return result
}

let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);