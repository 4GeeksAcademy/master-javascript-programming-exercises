// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let arr = [];

    if (obj.hasOwnProperty(key)) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i].length % 2 != 0) {
                arr.push(obj[key][i]);
            } 
        }
    }

    return arr;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output);