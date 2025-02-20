// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    if(Array.isArray(obj[key])) {
        let arrlen = (obj[key]).length;
        let array = [];
        for (let i = 0; i< arrlen; i++){
            if ((obj[key])[i]<100){
                array.push(obj[key][i]);
            }
        }
        return array;
} else return [];
}


let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]