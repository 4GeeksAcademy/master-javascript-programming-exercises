// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){

    let result = []

    if(!Array.isArray(obj[key])){
        result = []
    }

    for(let i in obj[key]){
        if (obj[key][i] > 10){
            result.push(obj[key][i])
        }
    }

    return result
}

let obj = {
  key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);