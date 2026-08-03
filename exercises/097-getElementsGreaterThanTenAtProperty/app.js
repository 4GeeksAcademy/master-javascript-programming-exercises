// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    if(Array.isArray(obj[key])) {
        let arrlen = (obj[key]).length;
        let array = [];
        for (let i = 0; i< arrlen; i++){
            if ((obj[key])[i]>10){
                array.push(obj[key][i]);
            }
        }
        return array;
} else return [];
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]