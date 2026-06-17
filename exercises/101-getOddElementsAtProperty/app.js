function getOddElementsAtProperty(obj, key) {
    // your code here
    let arr = [];

    if (obj.hasOwnProperty(key) && (typeof obj[key][0] != "string")) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] % 2 != 0) {
                arr.push(obj[key][i]);
            } 
        }
        return arr;
    }

    return arr = [];
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
