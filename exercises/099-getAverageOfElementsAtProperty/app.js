function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let avr = 0;

    if (obj.hasOwnProperty(key) && obj[key].length > 0) {
        for (let i = 0; i < obj[key].length; i++) {
            avr += obj[key][i];
        }
        return avr / obj[key].length;
    }

    return avr;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output)