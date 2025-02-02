// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let arr = [];

    if (obj.hasOwnProperty(key)) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] < 100) {
                arr.push(obj[key][i]);
            } 
        }
    }

    return arr;
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); 