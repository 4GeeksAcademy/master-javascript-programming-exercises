// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let arr = [];

    if (obj.hasOwnProperty(key)) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] > 10) {
                arr.push(obj[key][i]);
            } 
        }
    }

    return arr;
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);