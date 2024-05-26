function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let arr = [];

    if (obj.hasOwnProperty(key)) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i].length % 2 == 0) {
                arr.push(obj[key][i]);
            } 
        }
    }

    return arr;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']